import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CartsService } from '../providers/cart.service';
import { CartDto } from '../dto/cart.dto';
import { CartItemDto } from '../dto/cartItem.dto';
import { Cart } from '../entities/cart.entity';
import { CartItems } from '../entities/cartItems.entity';

@Controller('carts')
export class CartsController {
  constructor(private cartsService: CartsService) {}

  @Get(':id')
  getCart(@Param('id') id: number): Promise<Cart> {
    return this.cartsService.findOne(id);
  }

  @Post()
  create(@Body() cart: CartDto): Promise<Cart> {
    return this.cartsService.create(cart);
  }

  @Post('add-item/:id')
  addItem(@Body() item: CartItemDto, @Param('id') id: number): Promise<Cart> {
    return this.cartsService.addItem(item, id);
  }

  @Get('checkout/:id')
  getCheckoutDetails(@Param('id') id: number) {
    return this.cartsService.checkout(id);
  }
}
