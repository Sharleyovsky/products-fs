import { Schema } from "mongoose";
import { Currency } from "../domain/money/currency";
import { Product } from "../domain/product/product.type";

export const productSchema = new Schema<Product>(
  {
    image: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2016/10/18/18/19/question-mark-1750942_1280.png",
    },
    code: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    dimensions: {
      type: String,
      required: true,
    },
    features: [
      {
        type: String,
      },
    ],
    energyClass: {
      type: String,
      required: true,
    },
    price: {
      value: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        default: Currency.PLN,
      },
      installment: {
        value: {
          type: Number,
          required: true,
        },
        period: {
          type: Number,
          required: true,
        },
      },
      validFrom: {
        type: Date,
        required: true,
      },
      validTo: {
        type: Date,
        required: true,
      },
    },
  },
  { timestamps: true },
);
