import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from '../providers/products.service';
import { ProductDto } from '../dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  listProducts(): string {
    return 'This action returns all cats';
  }

  @Post()
  create(@Body() product: ProductDto) {
    console.log(product);
    this.productsService.create(product);
  }
}
