import * as z from "zod";

export const orderValidation = z.object({
  screeningId: z.string().min(1),
  seats: z.array(
    z.object({
      row: z.number().int().positive(),
      seat: z.number().int().positive(),
      isBooked: z.boolean(),
    })
  ),
  totalPrice: z.number().positive(),
  user: z.string().min(1),
  paymentStatus: z.boolean(),
  date: z.date(),
});
