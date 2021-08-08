import { Module } from '@nestjs/common';
import { ProductsController } from './app.controller';
import { ProductService } from './productService';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class AppModule {}
