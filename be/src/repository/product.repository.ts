import { Model } from "mongoose";
import { Product } from "../domain/product/product.type";

type Dependencies = {
  productModel: Model<Product>;
};

export class ProductRepository {
  constructor(private readonly dependencies: Dependencies) {}

  async find(limit: number, skip: number) {
    return this.dependencies.productModel.find().limit(limit).skip(skip);
  }

  async create(product: Product) {
    return new this.dependencies.productModel(product).save();
  }
}
