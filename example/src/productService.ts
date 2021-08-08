import { Injectable } from '@nestjs/common';
import { ProductDto } from './ProductDto';

@Injectable()
export class ProductService {
  private readonly products: ProductDto[] = [];

  create(product: ProductDto) {
    this.products.push(product);
  }

  getByName(name: string): ProductDto {
    return this.products.find((p) => p.name == name);
  }

  getAll(): ProductDto[] {
    return this.products;
  }

  update(product: ProductDto) {
    const existingProduct = this.getByName(product.name);
    if (existingProduct == null) {
      return;
    }

    const i = this.products.indexOf(existingProduct);
    this.products[i] = product;
  }

  delete(name: string) {
    const existingProduct = this.getByName(name);
    if (existingProduct == null) {
      return;
    }

    const i = this.products.indexOf(existingProduct);
    this.products.splice(i, 1);
  }
}
