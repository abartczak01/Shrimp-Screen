"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { screeningValidation } from "@/lib/validations/screening";
import { rooms, audioOptions } from "@/constants";

interface Props {
  date: string;
  audioOption: string;
  roomName: string;
}

export default function AddScreening({ id }: { id: string }) {
  const [msg, setMsg] = useState("");

  const handleSubmit = async (values: Props, resetForm: any) => {
    console.log("submit");
  };

  return (
    <div className="border-4 border-stone-950 py-8 px-12 bg-pearl">
      <Formik
        initialValues={{
          filmId: id,
          date: "",
          audioOption: "",
          roomName: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
        validationSchema={screeningValidation}
      >
        {({ values }) => (
          <Form>
            <div className="grid grid-cols-form gap-y-7 gap-x-4 border-stone-950">
              <label htmlFor="title">Date & Time</label>
              <div className="form-field-div">
                <Field
                  className="form-field"
                  type="datetime-local"
                  name="date"
                />
                <ErrorMessage
                  className="form-error"
                  name="date"
                  component="div"
                />
              </div>
              <label htmlFor="audioOption">Audio Option</label>
              <div className="form-field-div">
                <Field as="select" className="form-field" name="audioOption">
                  <option value="">select an audio option</option>
                  {audioOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  className="form-error"
                  name="audioOption"
                  component="div"
                />
              </div>
              <label htmlFor="roomName">Room Name</label>
              <div className="form-field-div">
                <Field as="select" className="form-field" name="roomName">
                  <option className="" value="">
                    select a room
                  </option>
                  {Object.entries(rooms).map(([key, value]) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  className="form-error"
                  name="roomName"
                  component="div"
                />
              </div>
            </div>
            <div className="flex justify-end items-center gap-8">
              {msg && (
                <div className="border-b-2 border-tomato font-bold text-lg">
                  {msg}
                </div>
              )}
              <button className="blue-btn mt-2" type="submit">
                add a screening
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
