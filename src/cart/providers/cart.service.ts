import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from '../entities/cart.entity';
import { CartDto } from '../dto/cart.dto';
import { CartItemDto } from '../dto/cartItem.dto';
import { DiscountService } from '../../discount/discounts.service';
import { CartItems } from '../entities/cartItems.entity';
import { Discount } from 'src/discount/discounts.entity';
import { Product } from '../../products/entities/product.entity';
import { ProductsService } from 'src/products/providers/products.service';

@Injectable()
export class CartsService {
  constructor(
    @InjectModel(Cart)
    private cartRepository: typeof Cart,
    @InjectModel(CartItems)
    private cartItemRepository: typeof CartItems,
    private discountService: DiscountService,
    private productService: ProductsService,
  ) {}

  async findAll(): Promise<Cart[]> {
    return this.cartRepository.findAll();
  }

  findOne(id: number): Promise<Cart> {
    return this.cartRepository.findOne({
      include: [
        {
          model: CartItems,
          include: [Product],
        },
        Discount,
      ],
      where: {
        id,
      },
    });
  }

  async create(newCart: CartDto) {
    const cartDiscount = await this.discountService.create(
      newCart.discount_rules,
    );

    const cart = await this.cartRepository.create({
      user_id: newCart.user_id,
      discount_rule_id: cartDiscount.getDataValue('id'),
    });

    return cart;
  }

  async checkout(cartId: number) {
    const cart = await this.cartRepository.findOne({
      where: { id: cartId },
      include: [
        {
          model: CartItems,
          include: [
            {
              model: Product,
              include: [Discount],
            },
          ],
        },
        Discount,
      ],
    });

    const cartAmount = this.calculateCartAmount(
      cart.getDataValue('cart_items'),
    );

    const finalCartAmount = this.calculateCartDiscountedPrice(cartAmount, cart.getDataValue("discount"));

    return new Promise((resolve, reject) => {
      resolve({total_amount : finalCartAmount})
    })
  }

  async addItem(item: CartItemDto, cartId: number) {
    await this.cartItemRepository.create({
      cart_id: cartId,
      product_id: item.product_id,
      quantity: item.quantity,
    });

    return this.cartRepository.findOne({
      include: [CartItems],
      where: {
        id: cartId,
      },
    });
  }

  calculateCartAmount(cartItems: CartItems[]) {
    let finalAmount = 0;

    cartItems.map(item => {
      const itemQuantity = item.getDataValue('quantity');

      const product = item.getDataValue('product');

      const discountedPrice = this.productService.calculateDiscountedPrice(
        product,
        itemQuantity,
      );

      finalAmount += discountedPrice;
    });

    return finalAmount;
  }

  calculateCartDiscountedPrice(cartAmount: number, discountRules: Discount): number {

    if (discountRules.getDataValue('discount_mode') === 'total_amount') {
      if (discountRules.getDataValue('discount_type') === 'flat') {
        if (cartAmount > discountRules.getDataValue('cutoff_amount')) {
          return cartAmount - discountRules.getDataValue('discount_value');
        }
      }
    }
    return cartAmount;
  }
}
