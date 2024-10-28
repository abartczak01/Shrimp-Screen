import Searchbar from "@/components/shared/Searchbar";
import { fetchFilms } from "@/lib/actions/film.actions";
import DetailedFilmCard from "@/components/cards/DetailedFilmCard";
import { release } from "os";
import ScreeningCard from "@/components/cards/ScreeningCard";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const result = await fetchFilms({
    searchString: searchParams.q,
    pageNumber: searchParams?.page ? +searchParams.page : 1,
    pageSize: 4,
    sortBy: "desc",
    // TODO add customizable sorting
  });

  return (
    <section className="flex flex-col items-center">
      <div className="py-4 flex flex-col items-center w-full px-36 gap-6 border-b-4 border-stone-950">
        <h1 className="header">SEARCH</h1>
        <Searchbar routeType="admin/browse-films" />
      </div>

      <div
        className={`flex flex-col w-full ${
          result.films.length === 1 && "border-b-4 border-stone-950"
        }`}
      >
        {result.films.length === 0 ? (
          <p>No result</p>
        ) : (
          <>
            {result.films.map((film, index) => {
              const sanitizedFilm = {
                ...film,
                _id: film._id.toString(),
                releaseDate: film.releaseDate.toISOString(),
              };
              return (
                <div key={film._id}>
                  <DetailedFilmCard film={sanitizedFilm} isForAdmin={true} />
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="p-4">
        <button className="blue-btn">buttons</button>
      </div>
    </section>
  );
}
