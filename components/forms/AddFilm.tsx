"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import Image from "next/image";
import { filmValidation } from "@/lib/validations/film";
import { addFilm } from "@/lib/actions/film.actions";
import { MPARatings } from "@/constants";

export default function AddFilm() {
  const [castCount, setCastCount] = useState(1);
  const [msg, setMsg] = useState("");

  interface Props {
    title: string;
    overview: string;
    director: string;
    cast: string[];
    releaseDate: string;
    duration: number;
    trailerUrl?: string;
    MPARating: string;
    poster?: string;
    backdrop?: string;
    isShowing: boolean | string;
  }

  const handleSubmit = async (values: Props) => {
    // TODO: find remove icon
    console.log(values);
    const result = await addFilm({
      ...values,
      releaseDate: new Date(values.releaseDate),
      isShowing: values.isShowing === "true",
      trailerUrl: values.trailerUrl || "",
      poster: values.poster || "",
      backdrop: values.backdrop || "",
    });
    setMsg(result.message);
  };

  return (
    <div className="px-44 pb-4">
      <Formik
        initialValues={{
          title: "",
          overview: "",
          director: "",
          cast: [""],
          releaseDate: "",
          duration: 0,
          trailerUrl: "",
          MPARating: "",
          poster: "",
          backdrop: "",
          isShowing: "true",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={filmValidation}
      >
        {({ values }) => (
          <Form>
            <div className="grid grid-cols-form gap-y-7 gap-x-2">
              <label htmlFor="title">Title</label>
              <div className="form-field-div">
                <Field className="form-field" type="text" name="title" />
                <ErrorMessage
                  className="form-error"
                  name="title"
                  component="div"
                />
              </div>
              <label htmlFor="director">Director</label>
              <div className="form-field-div">
                <Field className="form-field" type="text" name="director" />
                <ErrorMessage
                  className="form-error"
                  name="director"
                  component="div"
                />
              </div>

              {Array.from({ length: castCount }).map((_, i) => (
                <>
                  <label htmlFor={`cast[${i}]`}>Cast Member {`${i + 1}`}</label>
                  <div className="form-field-div">
                    <div className="flex">
                      <Field
                        className={`form-field ${i !== 0 && "border-r-0"}`}
                        type="text"
                        name={`cast[${i}]`}
                      />
                      <div className="flex flex-col items-end">
                        {i !== 0 && (
                          <button
                            className="blue-btn py-0 h-full"
                            type="button"
                            onClick={() => {
                              setCastCount((prev) => prev - 1);
                              values.cast.splice(i, 1);
                            }}
                          >
                            {" "}
                            Remove
                            {/* <Image
                              src="/assets/tickets.svg"
                              alt="delete"
                              width={24}
                              height={24}
                            /> */}
                          </button>
                        )}
                      </div>
                    </div>

                    <ErrorMessage
                      className="form-error"
                      name={`cast[${i}]`}
                      component="div"
                    />
                    {i === castCount - 1 && (
                      <button
                        className="mt-1 blue-btn"
                        type="button"
                        onClick={() => setCastCount((prev) => prev + 1)}
                      >
                        Add Cast Member
                      </button>
                    )}
                  </div>
                </>
              ))}

              <label htmlFor="releaseDate">Release Date</label>
              <div className="form-field-div">
                <Field className="form-field" type="date" name="releaseDate" />
                <ErrorMessage
                  className="form-error"
                  name="releaseDate"
                  component="div"
                />
              </div>
              <label htmlFor="duration">Duration</label>
              <div className="form-field-div">
                <Field className="form-field" type="number" name="duration" />
                <ErrorMessage
                  className="form-error"
                  name="duration"
                  component="div"
                />
              </div>
              <label htmlFor="MPARating">MPA Rating</label>
              <div className="form-field-div">
                <Field as="select" className="form-field" name="MPARating">
                  <option value="">Select Rating</option>{" "}
                  {MPARatings.map((rating) => (
                    <option key={rating} value={rating}>
                      {rating}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  className="form-error"
                  name="MPARating"
                  component="div"
                />
              </div>
              <label htmlFor="poster">Poster</label>
              <div className="form-field-div">
                <Field className="form-field" type="text" name="poster" />
                <ErrorMessage
                  className="form-error"
                  name="poster"
                  component="div"
                />
              </div>
              <label htmlFor="backdrop">Backdrop</label>
              <div className="form-field-div">
                <Field className="form-field" type="text" name="backdrop" />
                <ErrorMessage
                  className="form-error"
                  name="backdrop"
                  component="div"
                />
              </div>
              <label htmlFor="trailerUrl">Trailer URL</label>
              <div className="form-field-div">
                <Field className="form-field" type="text" name="trailerUrl" />
                <ErrorMessage
                  className="form-error"
                  name="trailerUrl"
                  component="div"
                />
              </div>
              <label htmlFor="isShowing">Is Showing</label>
              <div className="flex gap-3 items-center">
                <label className="flex gap-1.5">
                  <Field type="radio" name="isShowing" value="true" />
                  Yes
                </label>
                <label className="flex gap-1.5">
                  <Field type="radio" name="isShowing" value="false" />
                  No
                </label>

                <ErrorMessage
                  className="form-error"
                  name="isShowing"
                  component="div"
                />
              </div>
              <label htmlFor="overview">Overview</label>
              <div className="form-field-div">
                <Field
                  className="form-field"
                  type="text"
                  component="textarea"
                  rows="9"
                  name="overview"
                />
                <ErrorMessage
                  className="form-error"
                  name="overview"
                  component="div"
                />
                {values.overview.length}/900
              </div>
            </div>
            <div className="flex justify-end items-center gap-8">
              {msg && (
                <div className="border-b-2 border-tomato font-bold text-lg">
                  {msg}
                </div>
              )}
              <button className="blue-btn" type="submit">
                Add a Film
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
