import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from '../providers/products.service';
import { ProductDto } from '../dto/product.dto';
import { Product } from '../entities/product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  listProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() product: ProductDto): Promise<Product> {
    return this.productsService.create(product);
  }
}
