import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ProductService } from "../service/product.service";
import { GetProductsSchema } from "./schemas/get-products.schema";
import { AddProductSchema } from "./schemas/add-product.schema";
import { logger } from "../shared/logger/logger";

type Dependencies = {
  productService: ProductService;
};

export class ProductController {
  constructor(private readonly dependencies: Dependencies) {}

  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit, page } = GetProductsSchema.parse(req.query);

      const products = await this.dependencies.productService.getProducts(
        limit,
        page,
      );

      setTimeout(() => res.send(products), 3000);
    } catch (error) {
      next(error);
    }
  }

  async addProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const product = AddProductSchema.parse(req.body);

      await this.dependencies.productService.addProduct(product);

      res
        .status(StatusCodes.CREATED)
        .send({ message: "Product has been added." });
    } catch (error: any) {
      logger.error("Failed to add product.", error);

      //Duplication code
      if (error?.code === 11000) {
        return res
          .status(StatusCodes.CONFLICT)
          .send({ message: "This product already exists." });
      }

      next(error);
    }
  }
}
