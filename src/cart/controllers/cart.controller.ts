import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CartsService } from '../providers/cart.service';
import { CartDto } from '../dto/cart.dto';
import { Cart } from '../model/cart.model';

@Controller('carts')
export class CartsController {
  constructor(private readonly cartsService: CartsService) {}

  @Get()
  getCart(@Param('id') id: number): Promise<Cart> {
    return this.cartsService.findOne(id);
  }

  @Post()
  create(@Body() cart: CartDto) {
    console.log(cart);
    this.cartsService.create(cart);
  }
}
