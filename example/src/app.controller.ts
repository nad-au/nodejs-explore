import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './productService';
import { ProductDto } from './ProductDto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() product: ProductDto) {
    this.productService.create(product);
  }

  @Get('all')
  getAll(): ProductDto[] {
    return this.productService.getAll();
  }

  @Get(':name')
  getByName(@Param('name') name: string): ProductDto {
    return this.productService.getByName(name);
  }

  @Put(':name')
  update(@Param('name') name: string, @Body() product: ProductDto) {
    this.productService.update(product);
  }

  @Delete(':name')
  deleteByName(@Param('name') name: string) {
    return this.productService.delete(name);
  }
}
