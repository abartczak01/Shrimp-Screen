import * as Yup from "yup";
import { rooms } from "@/constants";

const roomNames = Object.keys(rooms);

export const screeningValidation = Yup.object({
  filmId: Yup.string().min(1).required(),
  date: Yup.date().required(),
  audioOption: Yup.string().min(1).required(),
  roomName: Yup.string().oneOf(roomNames).required(),
  // Yup.array(
  //   Yup.object({
  //     row: Yup.number().integer().positive(),
  //     seat: Yup.number().integer().positive(),
  //     isBooked: Yup.boolean(),
  //   })
  // ).required(),
});
