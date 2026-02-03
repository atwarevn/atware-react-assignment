import React from "react";

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
        {formData.dishes.length === 0 && <p>Bấm dấu + để thêm món ăn</p>}

        {formData.dishes.map((item, index) => (
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
