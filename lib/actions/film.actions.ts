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

  return film.save();
}
