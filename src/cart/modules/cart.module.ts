import { Module } from '@nestjs/common';
import { CartsController } from '../controllers/cart.controller';
import { CartsService } from '../providers/cart.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cart } from '../model/cart.model';

@Module({
  imports: [SequelizeModule.forFeature([Cart])],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
