import { Module } from '@nestjs/common';
import { ProductsModule } from './products/modules/products.module';
import { CartsModule } from './cart/modules/cart.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products/entities/product.entity';
import { Cart } from './cart/entities/cart.entity';
import { CartItems } from './cart/entities/cartItems.entity';
import { Discount } from './discount/discounts.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ProductsModule,
    CartsModule,
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [Product, Cart, Discount, CartItems],
      autoLoadModels: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
