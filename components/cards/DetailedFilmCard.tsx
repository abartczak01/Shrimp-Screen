import Image from "next/image";

interface Props {
  title: string;
  overview: string;
  duration: number;
  director: string;
  cast: string[];
  releaseDate: Date;
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
    poster,
    backdrop,
  } = film;
  const releaseDate = film.releaseDate.toISOString().split("T")[0];
  return (
    <div className="border-t-4 border-stone-950 px-4 py-2">
      <Image src={poster || ""} alt={title} width={200} height={300} />
      <div>
        <h1>{title}</h1>
        <p>{overview}</p>
        <p>{duration}</p>
        <p>{director}</p>
        <p>{cast}</p>
        <p>{releaseDate}</p>
        <p>{MPARating}</p>
        <p>{isShowing}</p>
      </div>
      {isForAdmin && (
        <div className="flex gap-1">
          <button className="blue-btn">Edit</button>
          <button className="orange-btn">Delete</button>
        </div>
      )}
    </div>
  );
}
