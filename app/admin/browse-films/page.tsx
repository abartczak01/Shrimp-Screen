import Searchbar from "@/components/shared/Searchbar";
import { fetchFilms } from "@/lib/actions/film.actions";
import DetailedFilmCard from "@/components/cards/DetailedFilmCard";

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
    <section className="flex flex-col items-center gap-8 py-6">
      <div className="flex flex-col items-center w-full px-24 gap-6">
        <h1 className="header">Search</h1>
        <Searchbar routeType="admin/browse-films" />
      </div>

      <div className="flex flex-col w-full">
        {result.films.length === 0 ? (
          <p>No result</p>
        ) : (
          <>
            {result.films.map((film) => (
              <DetailedFilmCard key={film._id} film={film} isForAdmin={true} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
