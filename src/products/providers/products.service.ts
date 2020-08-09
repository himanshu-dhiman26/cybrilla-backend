import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../model/product.model';
import { ProductDto } from '../dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private readonly productRepository: typeof Product,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  findOne(id: string): Promise<Product> {
    return this.productRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(newProduct: ProductDto) {
    const product: Product = await this.productRepository.create(newProduct);
  }

  async remove(id: string): Promise<void> {
    const product = await this.findOne(id);
    await product.destroy();
  }
}
