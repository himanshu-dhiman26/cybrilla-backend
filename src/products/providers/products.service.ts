import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../entities/product.entity';
import { Discount } from '../../discount/discounts.entity';
import { ProductDto } from '../dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productRepository: typeof Product,
    @InjectModel(Discount)
    private discountRepository: typeof Discount,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(newProduct: ProductDto) {
    const productDiscount = await this.discountRepository.create(newProduct.discount_rules);

    const product = await this.productRepository.create(
      {
        name: newProduct.name,
        price: newProduct.price,
        discount_rule_id: productDiscount.getDataValue("id")
      },
      {
        include: [Discount],
      },
    );

    return product;
  }

  calculateDiscountedPrice(product: Product, quantity: number): number {

    const discountRules = product.getDataValue("discount");
      if(discountRules.getDataValue("discount_mode") === "quantity") {
        if (quantity >= discountRules.getDataValue('cutoff_quantity')) {
          const discountedQuantity =
          quantity / discountRules.getDataValue('cutoff_quantity');

          return (
            (product.getDataValue('price') * quantity) - (discountedQuantity * discountRules.getDataValue('discount_value'))
          );
        }
      }

      return product.getDataValue("price") * quantity;
  }
}
