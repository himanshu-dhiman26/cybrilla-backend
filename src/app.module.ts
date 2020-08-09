import { Module } from '@nestjs/common';
import { ProductsModule } from './products/modules/products.module';
import { CartsModule } from './cart/modules/cart.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products/entities/product.entity';
import { Cart } from './cart/entities/cart.entity';
import { CartItems } from './cart/entities/cartItems.entity';
import { Discount } from './discount/discounts.entity';

@Module({
  imports: [
    ProductsModule,
    CartsModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cy_backend',
      models: [Product, Cart, Discount, CartItems],
      autoLoadModels: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
