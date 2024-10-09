"use server";
import { FilterQuery, SortOrder } from "mongoose";
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

export async function fetchFilms({
  searchString = "",
  pageNumber = 1,
  pageSize = 20,
  sortBy = "desc",
}: {
  searchString?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: SortOrder;
}) {
  try {
    await connectToDB();
    const skipAmount = (pageNumber - 1) * pageSize;
    const regex = new RegExp(searchString, "i");
    const query: FilterQuery<typeof Film> = {};

    if (searchString.trim() !== "") {
      query.$or = [
        { title: { $regex: regex } },
        { director: { $regex: regex } },
        { cast: { $in: [regex] } },
      ];
    }

    const sortOption = { releaseDate: sortBy };

    const filmsQuery = Film.find(query)
      .sort(sortOption)
      .skip(skipAmount)
      .limit(pageSize);

    const totalFilmsCount = await Film.countDocuments(query);

    const films = await filmsQuery.exec();

    const isNext = totalFilmsCount > skipAmount + films.length;

    return { films, isNext };
  } catch (error: any) {
    throw new Error(`Failed to fetch films: ${error.message}`);
  }
}
