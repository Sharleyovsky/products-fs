import { ProductRepository } from "../src/repository/product.repository";
import { productModel } from "../src/repository/product.model";
import { mockData } from "../src/shared/mocks/data";

const productRepository = new ProductRepository({ productModel });

const isIntegrationDb = () => {
  if (process.env.DB_NAME !== "integration") {
    throw new Error(
      "This function is only allowed only for the integration tests.",
    );
  }
};

export const mockDb = async () => {
  isIntegrationDb();

  return await Promise.all(
    mockData.map(async (product) => await productRepository.create(product)),
  );
};

//This one is not a part of repository since it's not a part of business logic it's only used for e2e tests
export const cleanUpDb = async () => {
  isIntegrationDb();

  await productModel.deleteMany({});
};
