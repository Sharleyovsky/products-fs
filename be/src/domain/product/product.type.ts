import { Money } from "../money/money.type";
import { EnergyClass } from "./energy-class";

export type Product = {
  image: string;
  code: string;
  name: string;
  color: string;
  capacity: number;
  dimensions: string;
  features: string[];
  energyClass: EnergyClass;
  price: Money;
};
