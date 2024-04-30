import request from "supertest";
import { app, server } from "../../../index";
import { mockDb, cleanUpDb } from "../../../scripts/mock-db";
import { RouterPrefix } from "../../domain/router-prefix";
import { productMockFactory } from "../../shared/mocks/product";
import mongoose from "mongoose";

describe("Products router", () => {
  beforeAll(async () => {
    await cleanUpDb();

    await mockDb();
  });

  afterAll(async () => {
    server.close();

    await cleanUpDb();
    await mongoose.disconnect();
  });

  it("Should create one product element and respond with code 201", async () => {
    const code = "WWW111333444";
    const product = productMockFactory(code);
    const response = await request(app)
      .post(RouterPrefix.PRODUCTS)
      .send(product);

    expect(response.status).toEqual(201);
  });

  it("Should fail creating  product element and respond with code 409", async () => {
    const code = "WWW111333444";
    const product = productMockFactory(code);
    const response = await request(app)
      .post(RouterPrefix.PRODUCTS)
      .send(product);

    expect(response.status).toEqual(409);
  });

  it("Should get 6 products and respond with code 200", async () => {
    const response = await request(app).get(RouterPrefix.PRODUCTS);

    expect(response.status).toEqual(200);
    expect(response.body.count).toEqual(6);
  });

  it("Should get 3 products and respond with code 200", async () => {
    const response = await request(app).get(
      `${RouterPrefix.PRODUCTS}?limit=${3}`,
    );

    expect(response.status).toEqual(200);
    expect(response.body.count).toEqual(3);
  });

  it("Should get 1 product by skipping the rest and respond with code 200", async () => {
    const response = await request(app).get(
      `${RouterPrefix.PRODUCTS}?limit=${6}&page=${2}]}`,
    );

    expect(response.status).toEqual(200);
    expect(response.body.count).toEqual(1);
  });
});
