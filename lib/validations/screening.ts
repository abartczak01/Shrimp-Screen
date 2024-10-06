import * as z from "zod";

export const screeningValidation = z.object({
  filmId: z.string().min(1),
  date: z.date(),
  audioOption: z.string().min(1),
  seats: z.array(
    z.object({
      row: z.number().int().positive(),
      seat: z.number().int().positive(),
      isBooked: z.boolean(),
    })
  ),
});
