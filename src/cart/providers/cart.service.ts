import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cart } from '../model/cart.model';
import { CartDto } from '../dto/cart.dto';

@Injectable()
export class CartsService {
  constructor(
    @InjectModel(Cart)
    private readonly cartRepository: typeof Cart,
  ) {}

  async findAll(): Promise<Cart[]> {
    return this.cartRepository.findAll();
  }

  findOne(id: number): Promise<Cart> {
    return this.cartRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(newCart: CartDto) {
    const cart: Cart = await this.cartRepository.create(newCart);
  }

}
