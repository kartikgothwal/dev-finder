"use client";
import React from "react";
import * as Yup from "yup";
import {
  Formik,
  Form as FormikForm,
  Field,
  ErrorMessage,
  FormikHelpers,
} from "formik";
import { Button } from "@/components/ui/button";

const CreateRoomForm: React.FC<{}> = () => {
  const formSchema = Yup.object({
    name: Yup.string().required(),
    description: Yup.string().required(),
    language: Yup.string().required(),
    githubRepo: Yup.string().required(),
    createdOn: Yup.date().default(() => new Date()),
  });

  type FormValues = Yup.InferType<typeof formSchema>;

  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        language: "",
        githubRepo: "",
        createdOn: new Date(),
      }}
      validationSchema={formSchema}
      onSubmit={(
        values: FormValues,
        { setSubmitting }: FormikHelpers<FormValues>
      ) => {
        console.log("Form submitted with values:", values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <FormikForm>
          <section className="px-12 container my-10">
            <div className="mt-4 flex flex-col rounded-lg p-4">
              <h2 className="text-white font-bold text-4xl my-4">
                Create Room
              </h2>

              <div className="mt-4">
                <label className="text-white font-bold" htmlFor="name">
                  Room Title
                </label>
                <Field
                  className="w-full bg-transparent rounded-md border mt-3 text-white px-2 py-2"
                  type="text"
                  id="name"
                  name="name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mt-5">
                <label className="text-white font-bold" htmlFor="description">
                  Description
                </label>
                <Field
                  className="w-full bg-transparent rounded-md border mt-3 text-white px-2 py-1"
                  as="textarea"
                  id="description"
                  name="description"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mt-5">
                <label className="text-white font-bold" htmlFor="language">
                  Primary Programming Language
                </label>
                <Field
                  className="w-full bg-transparent rounded-md border mt-3 text-white px-2 py-2"
                  type="text"
                  id="language"
                  name="language"
                />
                 <ErrorMessage
                  name="language"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mt-5">
                <label className="text-white font-bold" htmlFor="githubRepo">
                  Github Repo
                </label>
                <Field
                  className="w-full bg-transparent rounded-md border mt-3 text-white px-2 py-2"
                  type="text"
                  id="githubRepo"
                  name="githubRepo"
                />
                 <ErrorMessage
                  name="githubRepo"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mt-5 flex justify-start">
                <Button
                  type="submit"
                  className="py-6 font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating..." : "Create Room"}
                </Button>
              </div>
            </div>
          </section>
        </FormikForm>
      )}
    </Formik>
  );
};

export default CreateRoomForm;
