import Link from "next/link";

export default function ScreeningCard({ filmId }: { filmId: string }) {
  return (
    <div className="border-t-4 border-stone-950 font-bold">
      Screenings {filmId}
      <Link href="/">
        <p className="text-lg flex items-center  gap-2">
          <span className="text-tomato text-3xl font-bold">+</span>
          SHOW ALL SCREENINGS
        </p>
      </Link>
    </div>
  );
}
