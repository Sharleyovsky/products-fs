import { Currency } from "./currency";

export type Money = {
  value: number;
  currency: Currency;
  installment: {
    value: number;
    period: number;
  };
  validFrom: Date;
  validTo: Date;
};
