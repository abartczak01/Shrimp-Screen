"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
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

  const handleSubmit = async (values: Props, resetForm: any) => {
    // TODO: find remove icon
    console.log(values);
    setMsg("Adding film...");
    const result = await addFilm({
      ...values,
      releaseDate: new Date(values.releaseDate),
      isShowing: values.isShowing === "true",
      trailerUrl: values.trailerUrl || "",
      poster: values.poster || "",
      backdrop: values.backdrop || "",
    });
    setMsg(result.message);
    if (result.success) {
      resetForm();
      setCastCount(1);
    }
  };
  return (
    <div className="border-4 border-stone-950 py-8 px-12 bg-pearl">
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
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
        validationSchema={filmValidation}
      >
        {({ values }) => (
          <Form>
            <div className="grid grid-cols-form gap-y-7 gap-x-4 border-stone-950">
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
                            Remove
                          </button>
                        )}
                      </div>
                    </div>

                    <ErrorMessage
                      className={`form-error`}
                      name={`cast[${i}]`}
                      component="div"
                    />
                    {i === castCount - 1 && (
                      <div className="flex justify-end">
                        <button
                          className="mt-1 blue-btn"
                          type="button"
                          onClick={() => setCastCount((prev) => prev + 1)}
                        >
                          add a cast member
                        </button>
                      </div>
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
                  className="form-error pl-12"
                  name="overview"
                  component="div"
                />
                <div className="">{values.overview.length}/900</div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-8">
              {msg && (
                <div className="border-b-2 border-tomato font-bold text-lg">
                  {msg}
                </div>
              )}
              <button className="blue-btn" type="submit">
                add a film
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
