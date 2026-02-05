import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

interface Step2Props {
  formData: {
    meal: string;
    restaurant: string;
  };
  updateData: (data: Partial<{ restaurant: string }>) => void;
  onNext: () => void;
  onBack: () => void;
  restaurants: string[];
}

const step2ValidationSchema = Yup.object().shape({
  restaurant: Yup.string().required("Restaurant is required"),
});

const Step2: React.FC<Step2Props> = ({
  formData,
  updateData,
  onNext,
  onBack,
  restaurants,
}) => {
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
        <div style={{ padding: "5px 15px", borderRight: "1px solid black" }}>
          Step 1
        </div>
        <div
          style={{
            padding: "5px 15px",
            backgroundColor: "#89b4fa",
            borderRight: "1px solid black",
          }}
        >
          Step 2
        </div>
        <div style={{ padding: "5px 15px", borderRight: "1px solid black" }}>
          Step 3
        </div>
        <div style={{ padding: "5px 15px" }}>Review</div>
      </div>

      <Formik
        initialValues={{
          restaurant: formData.restaurant,
        }}
        validationSchema={step2ValidationSchema}
        onSubmit={(values) => {
          updateData({ restaurant: values.restaurant });
          onNext();
        }}
      >
        <Form>
          <div style={{ marginTop: "60px" }}>
            <Field name="restaurant">
              {({ field, meta }) => (
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <label htmlFor="restaurant">Please Select a Restaurant</label>
                  <select
                    {...field}
                    style={{
                      width: "250px",
                      padding: "5px",
                      border: "2px solid black",
                    }}
                  >
                    <option value="">---</option>
                    {restaurants.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>

                  {meta.touched && meta.error && (
                    <span className="text-red-500">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "600px",
              marginTop: "100px",
            }}
          >
            <button
              type="button"
              onClick={onBack}
              style={{
                padding: "5px 20px",
                backgroundColor: "white",
                border: "2px solid black",
                boxShadow: "3px 3px 0px black",
                cursor: "pointer",
              }}
            >
              Previous
            </button>

            <button
              type="submit"
              // onClick={onNext}
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
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Step2;
