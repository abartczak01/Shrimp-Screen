import * as Yup from "yup";

import { MPARatings } from "@/constants";

export const filmValidation = Yup.object({
  title: Yup.string().min(1).max(200).required("Title is required"),
  overview: Yup.string().min(1).max(900).required("Overview is required"),
  releaseDate: Yup.date().required("Release date is required"),
  duration: Yup.number().positive().integer().required("Duration is required"),
  director: Yup.string().min(1).max(50).required("Director is required"),
  cast: Yup.array(
    Yup.string().min(1).max(50).required("Field cannot be empty")
  ).required("Cast is required"),
  MPARating: Yup.string().oneOf(MPARatings).required("MPA Rating is required"),
  isShowing: Yup.boolean().required("Required"),
  trailerUrl: Yup.string().url().optional(),
  poster: Yup.string().url().optional(),
  backdrop: Yup.string().url().optional(),
});
