import DetailedFilmCard from "@/components/cards/DetailedFilmCard";
import { fetchFilmById } from "@/lib/actions/film.actions";
import AddScreening from "@/components/forms/AddScreening";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const film = await fetchFilmById(id);

  const sanitizedFilm = {
    ...film,
    _id: film._id.toString(),
    releaseDate: film.releaseDate.toISOString(),
  };

  return (
    <div className="border-b-4 border-stone-950">
      <DetailedFilmCard film={sanitizedFilm} isForAdmin={false} />
      <section className="lg:mx-32 mb-8">
        <div className="py-4 flex flex-col gap-2 items-center justify-center">
          <h1 className="header">ADD A SCREENING</h1>
          <h3 className="text-lg italic">of {film.title}</h3>
        </div>
        <AddScreening id={id} />
      </section>
    </div>
  );
}
