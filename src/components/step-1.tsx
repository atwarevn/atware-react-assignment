import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

interface Step1Props {
  formData: {
    meal: string;
    people: number;
  };
  updateData: (data: Partial<{ meal: string; people: number }>) => void;
  onNext: () => void;
}

const step1ValidationSchema = Yup.object().shape({
  meal: Yup.string().required("Meal is required"),
  people: Yup.number()
    .min(1, "Please provide at least 1 people")
    .max(10, "Please provide at most 10 people"),
});

const Step1: React.FC<Step1Props> = ({ formData, updateData, onNext }) => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", border: "1px solid black" }}>
        <div
          style={{
            padding: "5px 15px",
            backgroundColor: "#89b4fa",
            borderRight: "1px solid black",
          }}
        >
          Step 1
        </div>
        <div style={{ padding: "5px 15px", borderRight: "1px solid black" }}>
          Step 2
        </div>
        <div style={{ padding: "5px 15px", borderRight: "1px solid black" }}>
          Step 3
        </div>
        <div style={{ padding: "5px 15px" }}>Review</div>
      </div>

      <Formik
        initialValues={{
          meal: formData.meal,
          people: formData.people,
        }}
        onSubmit={(values) => {
          updateData({
            meal: values.meal,
            people: values.people,
          });
          onNext();
        }}
        validationSchema={step1ValidationSchema}
      >
        <Form className="grid grid-cols-1">
          <Field name="meal">
            {({ field, meta }) => (
              <div className="mt-10 grid grid-cols-2 gap-4">
                <label htmlFor="meal">Please Select a meal</label>
                <select
                  {...field}
                  style={{
                    width: "250px",
                    padding: "5px",
                    border: "2px solid black",
                  }}
                >
                  <option value="">---</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                </select>

                {meta.touched && meta.error && (
                  <span className="text-red-500">{meta.error}</span>
                )}
              </div>
            )}
          </Field>
          <Field name="people">
            {({ field, meta }) => (
              <div className="mt-10 grid grid-cols-2 gap-4">
                <label htmlFor="people">Please Enter Number of people</label>
                <input {...field} />
                {meta.touched && meta.error && (
                  <span className="text-red-500">{meta.error}</span>
                )}
              </div>
            )}
          </Field>

          <button
            className="place-self-end"
            type="submit"
            // className="px-5 py-1.25 bg-white border-2 border-black shadow-[3px_3px_0px_black] cursor-pointer"
            style={{
              padding: "5px 20px",
              backgroundColor: "white",
              border: "2px solid black",
              boxShadow: "3px 3px 0px black",
              cursor: "pointer",
            }}
          >
            Next
          </button>
          <div
            style={{
              alignSelf: "flex-end",
              marginTop: "50px",
              marginRight: "100px",
            }}
          ></div>
        </Form>
      </Formik>
    </div>
  );
};

export default Step1;
