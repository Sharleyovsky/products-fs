import { EnergyClass } from "../../domain/product/energy-class";
import { Currency } from "../../domain/money/currency";
import { Product } from "../../domain/product/product.type";

export const productDocumentMockFactory = (id: string, code: string) => ({
  _id: id,
  image:
    "https://f00.esfr.pl/foto/5/71215465857/b7c91239dad8f45eae1abe48d24c6b3b/samsung-ww90ta046te,71215465857_8.jpg",
  code: code,
  name: "Pralka QuickDrive™",
  color: "biała",
  capacity: 9,
  dimensions: "55 x 60 x 85 cm",
  features: ["Drzwi AddWash™", "Panel AI Control", "Silnik inwerterowy"],
  energyClass: EnergyClass.B,
  price: {
    value: 1999.0,
    currency: Currency.PLN,
    installment: {
      value: 53.31,
      period: 60,
    },
    validFrom: new Date("2021-01-01"),
    validTo: new Date("2021-12-31"),
  },
});

export const productMockFactory = (code: string): Product => ({
  image:
    "https://f00.esfr.pl/foto/5/71215465857/b7c91239dad8f45eae1abe48d24c6b3b/samsung-ww90ta046te,71215465857_8.jpg",
  code: code,
  name: "Pralka QuickDrive™",
  color: "biała",
  capacity: 9,
  dimensions: "55 x 60 x 85 cm",
  features: ["Drzwi AddWash™", "Panel AI Control", "Silnik inwerterowy"],
  energyClass: EnergyClass.B,
  price: {
    value: 1999.0,
    currency: Currency.PLN,
    installment: {
      value: 53.31,
      period: 60,
    },
    validFrom: new Date(),
    validTo: new Date(),
  },
});
