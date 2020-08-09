import { Module } from '@nestjs/common';
import { ProductsController } from '../controllers/products.controller';
import { ProductsService } from '../providers/products.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from '../entities/product.entity';
import { Discount } from 'src/discount/discounts.entity';

@Module({
  imports: [SequelizeModule.forFeature([Product, Discount])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
