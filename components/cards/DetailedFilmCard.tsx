"use client";
import Image from "next/image";
import { useState } from "react";
import ScreeningCard from "./ScreeningCard";
import Link from "next/link";

interface Props {
  _id: string;
  title: string;
  overview: string;
  duration: number;
  director: string;
  cast: string[];
  releaseDate: string;
  MPARating: string;
  isShowing: boolean | string;
  trailerUrl?: string;
  poster?: string;
  backdrop?: string;
}

export default function DetailedFilmCard({
  film,
  isForAdmin,
}: {
  film: Props;
  isForAdmin: boolean;
}) {
  const {
    title,
    overview,
    duration,
    director,
    cast,
    MPARating,
    isShowing,
    trailerUrl,
    releaseDate,
    poster,
    backdrop,
  } = film;

  const [isDisplayingDetails, setIsDisplayingDetails] = useState(false);
  return (
    <div className="border-b-4 border-stone-950 flex">
      <Link
        href={`/film/${title
          .toLowerCase()
          .replace(/[^a-z0-9 ]/g, "")
          .replace(/\s+/g, "-")}`}
        className="border-r-4 border-stone-950 p-2 flex-none"
      >
        <Image src={poster || ""} alt={title} width={200} height={300} />
      </Link>
      <div className="p-2 flex flex-col gap-2">
        <div className="flex gap-3">
          <h1 className="w-min whitespace-nowrap text-2xl font-bold border-b-4 border-tomato">
            {title}
          </h1>
          <div className="rounded-xl border-2 border-stone-950 px-2 font-bold flex items-center">
            {MPARating}
          </div>
        </div>

        <div>{overview}</div>
        {isDisplayingDetails ? (
          <>
            <div className="grid grid-cols-2">
              <div>
                <div className="font-bold">release date</div>
                <div className="text-stone-500 -mt-2">{releaseDate}</div>
              </div>
              <div>
                <div className="font-bold">duration</div>
                <div className="text-stone-500 -mt-2">
                  {Math.floor(duration / 60)}h {duration % 60} min
                </div>
              </div>
              <div>
                <div className="font-bold">director</div>
                <div className="text-stone-500 -mt-2">{director}</div>
              </div>

              <div>
                <div className="font-bold">cast</div>
                <div className="text-stone-500 -mt-2">{cast.join(", ")}</div>
              </div>
            </div>
            <button
              className="font-bold underline w-min whitespace-nowrap"
              onClick={() => setIsDisplayingDetails(false)}
            >
              Hide details
            </button>
          </>
        ) : (
          <button
            className="font-bold underline w-min whitespace-nowrap"
            onClick={() => setIsDisplayingDetails(true)}
          >
            Show details
          </button>
        )}
        {/* <p>{isShowing ? "is showing" : "isn't showing"}</p> */}

        {isForAdmin && (
          <div className="flex gap-1">
            <Link href={`/admin/add-screening/${film._id}`}>
              <button className="blue-btn">New Screening</button>
            </Link>
            <button className="blue-btn">Edit</button>
            <button className="orange-btn">Delete</button>
          </div>
        )}
        <ScreeningCard filmId={film._id} />
      </div>
    </div>
  );
}
