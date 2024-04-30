import { Product } from "../../domain/product/product.type";
import { EnergyClass } from "../../domain/product/energy-class";
import { Currency } from "../../domain/money/currency";

export const mockData: Product[] = [
  {
    image:
      "https://f00.esfr.pl/foto/5/71215465857/b7c91239dad8f45eae1abe48d24c6b3b/samsung-ww90ta046te,71215465857_8.jpg",
    code: "WW90T754AB1T",
    name: "Pralka QuickDrive™",
    color: "biała",
    capacity: 9,
    dimensions: "55 x 60 x 85 cm",
    features: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    energyClass: EnergyClass.A,
    price: {
      value: 2999.1,
      currency: Currency.PLN,
      installment: {
        value: 53.31,
        period: 60,
      },
      validFrom: new Date("2021-01-01"),
      validTo: new Date("2021-12-31"),
    },
  },
  {
    image:
      "https://f00.esfr.pl/foto/5/71215465857/b7c91239dad8f45eae1abe48d24c6b3b/samsung-ww90ta046te,71215465857_8.jpg",
    code: "WW90T754A3BH",
    name: "Pralka QuickDrive™",
    color: "biała",
    capacity: 10.5,
    dimensions: "55 x 60 x 85 cm",
    features: [
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    energyClass: EnergyClass.A,
    price: {
      value: 1999.2,
      currency: Currency.PLN,
      installment: {
        value: 53.31,
        period: 60,
      },
      validFrom: new Date("2021-01-01"),
      validTo: new Date("2021-12-31"),
    },
  },
  {
    image:
      "https://f00.esfr.pl/foto/5/71215465857/b7c91239dad8f45eae1abe48d24c6b3b/samsung-ww90ta046te,71215465857_8.jpg",
    code: "WW90T754A5BC",
    name: "Pralka QuickDrive™",
    color: "biała",
    capacity: 8,
    dimensions: "55 x 60 x 85 cm",
    features: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    energyClass: EnergyClass.A,
    price: {
      value: 1799.0,
      currency: Currency.PLN,
      installment: {
        value: 53.31,
        period: 60,
      },
      validFrom: new Date("2021-01-01"),
      validTo: new Date("2021-12-31"),
    },
  },
  {
    image:
      "https://f00.esfr.pl/foto/5/71215465857/b7c91239dad8f45eae1abe48d24c6b3b/samsung-ww90ta046te,71215465857_8.jpg",
    code: "WW90T754A7BD",
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
  },
  {
    image:
      "https://f00.esfr.pl/foto/5/71215465857/b7c91239dad8f45eae1abe48d24c6b3b/samsung-ww90ta046te,71215465857_8.jpg",
    code: "WW90T754A8BE",
    name: "Pralka QuickDrive™",
    color: "biała",
    capacity: 10.5,
    dimensions: "55 x 60 x 85 cm",
    features: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    energyClass: EnergyClass.C,
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
  },
  {
    image:
      "https://f00.esfr.pl/foto/5/71215465857/b7c91239dad8f45eae1abe48d24c6b3b/samsung-ww90ta046te,71215465857_8.jpg",
    code: "WW90T72154ABF",
    name: "Pralka QuickDrive™",
    color: "biała",
    capacity: 8,
    dimensions: "55 x 60 x 85 cm",
    features: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Wyświetlacz elektroniczny",
    ],
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
  },
];
