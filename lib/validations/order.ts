import * as Yup from "yup";

export const orderValidation = Yup.object({
  screeningId: Yup.string().min(1),
  seats: Yup.array(
    Yup.object({
      row: Yup.number().integer().positive(),
      seat: Yup.number().integer().positive(),
      isBooked: Yup.boolean(),
    })
  ),
  totalPrice: Yup.number().positive(),
  user: Yup.string().min(1),
  paymentStatus: Yup.boolean(),
  date: Yup.date(),
});
