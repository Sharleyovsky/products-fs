import { z } from "zod";

export const GetProductsSchema = z.object({
  limit: z
    .string()
    .default("6")
    .transform((limit) => parseInt(limit))
    .pipe(z.number().int().min(1)),
  page: z
    .string()
    .default("1")
    .transform((page) => parseInt(page))
    .pipe(z.number().int()),
});
