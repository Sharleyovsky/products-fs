import { ProductService } from "../../service/product.service";
import { ProductRepository } from "../../repository/product.repository";
import { productModel } from "../../repository/product.model";
import { productDocumentMockFactory } from "../../shared/mocks/product";
import { Product } from "../../domain/product/product.type";
import { HydratedDocument } from "mongoose";

jest.mock("../../repository/product.repository");
jest.mock("../../repository/product.model");

export const productsItemsMock = [
  productDocumentMockFactory(crypto.randomUUID(), "WWWW111333"),
  productDocumentMockFactory(crypto.randomUUID(), "WWWW111444"),
  productDocumentMockFactory(crypto.randomUUID(), "WWWW111555"),
];

export const productsMock = {
  items: productsItemsMock,
  count: productsItemsMock.length,
};

describe("Product service", () => {
  let productRepository: ProductRepository;
  let productService: ProductService;

  beforeEach(() => {
    productRepository = new ProductRepository({ productModel });
    productService = new ProductService({ productRepository });
  });

  it("Should return result with products in it", async () => {
    jest
      .spyOn(productRepository, "find")
      .mockResolvedValue(
        productsItemsMock as unknown as HydratedDocument<Product>[],
      );
    const result = await productService.getProducts();

    expect(productRepository.find).toHaveBeenCalledTimes(1);
    expect(result.items).toEqual(productsItemsMock);
    expect(result.count).toEqual(3);
  });

  it("Should return result with no products in it", async () => {
    jest.spyOn(productRepository, "find").mockResolvedValue([]);
    const result = await productService.getProducts();

    expect(productRepository.find).toHaveBeenCalledTimes(1);
    expect(result.items).toEqual([]);
    expect(result.count).toEqual(0);
  });

  it("Should create a product", async () => {
    jest
      .spyOn(productRepository, "create")
      .mockResolvedValue(
        productsItemsMock[0] as unknown as HydratedDocument<Product>,
      );
    const product = await productService.addProduct({} as unknown as Product);

    expect(productRepository.create).toHaveBeenCalledTimes(1);
    expect(product).toEqual(
      productsItemsMock[0] as unknown as HydratedDocument<Product>[],
    );
  });
});
