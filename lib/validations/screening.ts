import * as Yup from "yup";

export const screeningValidation = Yup.object({
  filmId: Yup.string().min(1),
  date: Yup.date(),
  audioOption: Yup.string().min(1),
  seats: Yup.array(
    Yup.object({
      row: Yup.number().integer().positive(),
      seat: Yup.number().integer().positive(),
      isBooked: Yup.boolean(),
    })
  ),
});
