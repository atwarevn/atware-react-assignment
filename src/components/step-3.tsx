import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

interface Dish {
  id: number;
  name: string;
  servings: number;
}

interface Step3Props {
  formData: { dishes: Dish[] };
  updateData: (data: { dishes: Dish[] }) => void;
  onNext: () => void;
  onBack: () => void;
  availableDishes: any[];
}

const step3SchemaValidation = (people: number) => {
  return Yup.object().shape({
    dishes: Yup.array()
      .of(
        Yup.object().shape({
          id: Yup.number(),
          name: Yup.string(),
          servings: Yup.number(),
        }),
      )
      .test(
        "total-servings",
        "Total servings must be greater than people",
        (values: { id: number; name: string; servings: number }[]) => {
          const totalServings = values.reduce(
            (prev, curr) => prev + curr.servings,
            0,
          );
          return totalServings >= people;
        },
      ),
  });
};

const Step3: React.FC<Step3Props> = ({
  formData,
  updateData,
  onNext,
  onBack,
  availableDishes,
}) => {
  const handleAddDish = () => {
    const newDishes = [
      ...formData.dishes,
      { id: Date.now(), name: "", servings: 1 },
    ];
    updateData({ dishes: newDishes });
  };

  const handleUpdateDish = (index: number, field: string, value: any) => {
    const updated = [...formData.dishes];
    updated[index] = { ...updated[index], [field]: value };
    updateData({ dishes: updated });
  };

  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          border: "2px solid black",
          boxShadow: "4px 4px 0px black",
        }}
      >
        <div style={{ padding: "5px 15px", borderRight: "2px solid black" }}>
          Step 1
        </div>
        <div style={{ padding: "5px 15px", borderRight: "2px solid black" }}>
          Step 2
        </div>
        <div
          style={{
            padding: "5px 15px",
            backgroundColor: "#89b4fa",
            borderRight: "2px solid black",
          }}
        >
          Step 3
        </div>
        <div style={{ padding: "5px 15px" }}>Review</div>
      </div>

      <div style={{ marginTop: "80px", width: "100%", maxWidth: "600px" }}>
        <Formik
          initialValues={{ dishes: formData.dishes }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="dishes">
                {({ push, remove }) => (
                  <>
                    {values.dishes.length === 0 && (
                      <p>Bấm dấu + để thêm món ăn</p>
                    )}

                    {values.dishes.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          gap: "50px",
                          marginBottom: "20px",
                        }}
                      >
                        <Field name={`items.${index}.name`}>
                          {({ field, meta }) => (
                            <div>
                              <label htmlFor="meal">Please Select a Dish</label>
                              <select
                                {...field}
                                style={{
                                  width: "250px",
                                  padding: "5px",
                                  border: "2px solid black",
                                }}
                              >
                                <option value="">---</option>
                                {availableDishes.map((d) => (
                                  <option key={d.id} value={d.name}>
                                    {d.name}
                                  </option>
                                ))}
                              </select>

                              {meta.touched && meta.error && (
                                <span className="text-red-500">
                                  {meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>

                        <Field name={`items.${index}.servings`}>
                          {({ field, meta }) => (
                            <div>
                              <label htmlFor="meal">
                                Please enter no. of servings
                              </label>
                              <input
                                type="number"
                                {...field}
                                style={{
                                  width: "80px",
                                  padding: "8px",
                                  border: "2px solid black",
                                }}
                              />
                              {meta.touched && meta.error && (
                                <span className="text-red-500">
                                  {meta.error}
                                </span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => {
                        push({ id: 1, name: "", servings: 1 });
                      }}
                      style={{
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        border: "3px solid black",
                        fontSize: "24px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>
                  </>
                )}
              </FieldArray>
            </Form>
          )}
        </Formik>
      </div>

      <div style={{ display: "flex", gap: "400px", marginTop: "100px" }}>
        <button
          onClick={onBack}
          style={{
            padding: "8px 20px",
            border: "2px solid black",
            boxShadow: "4px 4px 0px black",
            fontWeight: "bold",
          }}
        >
          Previous
        </button>
        <button
          onClick={onNext}
          style={{
            padding: "8px 25px",
            border: "2px solid black",
            boxShadow: "4px 4px 0px black",
            fontWeight: "bold",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;
