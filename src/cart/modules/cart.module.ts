import { Module } from '@nestjs/common';
import { CartsController } from '../controllers/cart.controller';
import { CartsService } from '../providers/cart.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from '../entities/cart.entity';
import { Product } from '../../products/entities/product.entity';
import { CartItems } from '../entities/cartItems.entity';
import { Discount } from '../../discount/discounts.entity';
import { DiscountService } from '../../discount/discounts.service';
import { ProductsService } from 'src/products/providers/products.service';

@Module({
  imports: [SequelizeModule.forFeature([Cart, CartItems, Discount, Product])],
  controllers: [CartsController],
  providers: [CartsService, DiscountService, ProductsService],
})
export class CartsModule {}
