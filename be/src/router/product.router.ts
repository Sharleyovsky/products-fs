import { Router } from "express";
import { RouterPrefix } from "../domain/router-prefix";
import { ProductController } from "../controller/product.controller";
import { ProductService } from "../service/product.service";
import { ProductRepository } from "../repository/product.repository";
import { productModel } from "../repository/product.model";

export const getProductRouter = (): Router => {
  const productRouter = Router();
  const productRepository = new ProductRepository({ productModel });
  const productService = new ProductService({ productRepository });
  const productController = new ProductController({ productService });

  productRouter.get(
    RouterPrefix.PRODUCTS,
    productController.getProducts.bind(productController),
  );
  productRouter.post(
    RouterPrefix.PRODUCTS,
    productController.addProduct.bind(productController),
  );

  return productRouter;
};
