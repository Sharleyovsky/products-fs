import { model } from "mongoose";
import { Product } from "../domain/product/product.type";
import { productSchema } from "./product.schema";
import { Model } from "../domain/db/model";

export const productModel = model<Product>(Model.PRODUCT, productSchema);
