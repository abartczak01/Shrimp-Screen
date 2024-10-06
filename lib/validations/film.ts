import * as z from "zod";
import { MPARating } from "../enums";

export const filmValidation = z.object({
  title: z.string().min(1).max(200),
  overview: z.string().min(1).max(500),
  director: z.string().min(1).max(50),
  cast: z.array(z.string().min(1).max(50)),
  releaseDate: z.date(),
  duration: z.number().int().positive(),
  trailerUrl: z.string().url().optional(),
  MPARating: MPARating,
  poster: z.string().url().optional(),
  backdrop: z.string().url().optional(),
  isShowing: z.boolean(),
});
