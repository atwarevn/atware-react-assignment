import React from "react";
import { useOrder } from "./context";

interface Dish {
  id: number;
  name: string;
  servings: number;
}

interface AvailableDish {
  id: number;
  name: string;
  restaurant: string;
  availableMeals: string[];
}

interface Step3Props {
  availableDishes: AvailableDish[];
}

const Step3: React.FC<Step3Props> = ({ availableDishes }) => {
  const { formData, updateData, handleNext, handleBack } = useOrder();

  const handleAddDish = () => {
    const newDishes = [
      ...formData.dishes,
      { id: Date.now(), name: "", servings: 1 },
    ];
    updateData({ dishes: newDishes });
  };

  const handleUpdateDish = (index: number, field: string, value: any) => {
    const updated = [...formData.dishes];

    // nếu chọn dish name → set luôn id đúng
    if (field === "name") {
      const selected = availableDishes.find((d) => d.name === value);

      if (selected) {
        updated[index] = {
          ...updated[index],
          name: selected.name,
          id: selected.id,
        };
      }
    } else {
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
    }

    updateData({ dishes: updated });

    if (field === "name") {
      const isDuplicate = formData.dishes.some(
        (d, i) => d.name === value && i !== index,
      );

      if (isDuplicate) {
        alert("Dish already selected, increase servings instead");
        return;
      }
    }
  };

  const getTotalServings = () => {
    return formData.dishes.reduce((sum, d) => sum + d.servings, 0);
  };

  const handleNextStep = () => {
    if (formData.dishes.length === 0) {
      alert("Please select at least one dish");
      return;
    }

    const total = getTotalServings();

    if (total > 10) {
      alert("Maximum total servings is 10");
      return;
    }

    if (total < formData.people) {
      alert("Total servings must be >= number of people");
      return;
    }

    handleNext();
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
        {formData.dishes.length === 0 && <p>Bấm dấu + để thêm món ăn</p>}

        {formData.dishes.map((item: any, index: any) => (
          <div
            key={index}
            style={{ display: "flex", gap: "50px", marginBottom: "20px" }}
          >
            <div>
              <p style={{ fontWeight: "bold" }}>Please Select a Dish</p>
              <select
                value={item.name}
                onChange={(e) =>
                  handleUpdateDish(index, "name", e.target.value)
                }
                style={{
                  width: "250px",
                  padding: "8px",
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
            </div>
            <div>
              <p style={{ fontWeight: "bold" }}>Please enter no. of servings</p>
              <input
                type="number"
                value={item.servings}
                onChange={(e) =>
                  handleUpdateDish(
                    index,
                    "servings",
                    parseInt(e.target.value) || 1,
                  )
                }
                style={{
                  width: "80px",
                  padding: "8px",
                  border: "2px solid black",
                }}
              />
            </div>
          </div>
        ))}

        <button
          onClick={handleAddDish}
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
      </div>

      <div style={{ display: "flex", gap: "400px", marginTop: "100px" }}>
        <button
          onClick={handleBack}
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
          onClick={handleNextStep}
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
