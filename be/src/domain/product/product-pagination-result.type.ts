import { HydratedDocument } from "mongoose";
import { Product } from "./product.type";

export type ProductPaginationResult = {
  items: HydratedDocument<Product>[];
  count: number;
};
