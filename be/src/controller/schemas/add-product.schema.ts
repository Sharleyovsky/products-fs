import { z } from "zod";
import { EnergyClass } from "../../domain/product/energy-class";
import { Currency } from "../../domain/money/currency";

export const AddProductSchema = z.object({
  image: z.string().url().min(1).trim(),
  code: z.string().min(1).trim(),
  name: z.string().min(1).trim(),
  color: z.string().min(1).trim(),
  capacity: z.number().int().gt(0),
  dimensions: z.string().min(1).trim(),
  features: z.string().trim().array(),
  energyClass: z.nativeEnum(EnergyClass),
  price: z.object({
    value: z.number().gt(0),
    currency: z.nativeEnum(Currency),
    installment: z.object({
      value: z.number().gt(0),
      period: z.number().gt(0),
    }),
    validFrom: z
      .string()
      .transform((date) => new Date(date))
      .pipe(z.date()),
    validTo: z
      .string()
      .transform((date) => new Date(date))
      .pipe(z.date()),
  }),
});
