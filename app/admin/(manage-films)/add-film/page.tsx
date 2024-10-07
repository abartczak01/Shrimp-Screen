"use client";
import AddFilm from "@/components/forms/AddFilm";
export default function page() {
  return (
    <>
      <div className="py-4 flex justify-center">
        <h1 className="header">ADD A NEW FILM</h1>
      </div>
      <AddFilm />
    </>
  );
}
