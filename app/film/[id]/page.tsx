// "use client";
import DetailedFilmCard from "@/components/cards/DetailedFilmCard";
import { fetchFilmByTitle } from "@/lib/actions/film.actions";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const titleToSearch = (Array.isArray(id) ? id[0] : id).replace(/-/g, " ");
  const film = await fetchFilmByTitle(titleToSearch);

  if (!film) {
    return <div>Film not found</div>;
  }

  const sanitizedFilm = {
    ...film,
    _id: film._id.toString(),
    releaseDate: film.releaseDate.toISOString(),
  };

  return (
    <>
      <DetailedFilmCard film={sanitizedFilm} isForAdmin={false} />
      <div></div>
    </>
  );
}
