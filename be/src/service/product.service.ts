import { ProductRepository } from "../repository/product.repository";
import { Product } from "../domain/product/product.type";
import { HydratedDocument } from "mongoose";
import { ProductPaginationResult } from "../domain/product/product-pagination-result.type";

type Dependencies = {
  productRepository: ProductRepository;
};

export class ProductService {
  constructor(private readonly dependencies: Dependencies) {}

  async getProducts(
    limit: number = 6,
    page: number = 1,
  ): Promise<ProductPaginationResult> {
    const skip = (page - 1) * limit;
    const products = await this.dependencies.productRepository.find(
      limit,
      skip,
    );

    return {
      items: products,
      count: products.length,
    };
  }

  async addProduct(product: Product): Promise<HydratedDocument<Product>> {
    return this.dependencies.productRepository.create(product);
  }
}
