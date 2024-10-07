"use server";
import { connectToDB } from "../mongoose";

import Film from "../models/film.model";

interface Params {
  title: string;
  overview: string;
  director: string;
  cast: string[];
  releaseDate: Date;
  duration: number;
  trailerUrl: string;
  MPARating: string;
  poster: string;
  backdrop: string;
  isShowing: boolean;
}

export async function addFilm({
  title,
  overview,
  director,
  cast,
  releaseDate,
  duration,
  trailerUrl,
  MPARating,
  poster,
  backdrop,
  isShowing,
}: Params) {
  try {
    await connectToDB();

    const film = new Film({
      title,
      overview,
      director,
      cast,
      releaseDate,
      duration,
      trailerUrl,
      MPARating,
      poster,
      backdrop,
      isShowing,
    });

    await film.save();
    return { success: true, message: "Film added successfully" };
  } catch (error: any) {
    console.log(error);
    return { success: false, message: `Failed to add film: ${error.message}` };
  }
}
