import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  methods: ["POST", "GET"],
  origin: "*",
  maxAge: 86_400,
};
