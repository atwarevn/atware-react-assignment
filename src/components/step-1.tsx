import React from "react";

interface Step1Props {
  formData: {
    meal: string;
    people: number;
  };
  updateData: (data: Partial<{ meal: string; people: number }>) => void;
  onNext: () => void;
}

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

      <div style={{ marginTop: "40px" }}>
        <p>Please Select a meal</p>
        <select
          value={formData.meal}
          onChange={(e) => updateData({ meal: e.target.value })}
          style={{ width: "150px", padding: "5px", border: "2px solid black" }}
        >
          <option value="">---</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>

      <div>
        <p>Please Enter Number of people</p>
        <input
          type="number"
          value={formData.people}
          onChange={(e) =>
            updateData({ people: parseInt(e.target.value) || 1 })
          }
          min={1}
          max={10}
          style={{ width: "140px", padding: "5px", border: "2px solid black" }}
        />
      </div>

      <div
        style={{
          alignSelf: "flex-end",
          marginTop: "50px",
          marginRight: "100px",
        }}
      >
        <button
          onClick={onNext}
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
    </div>
  );
};

export default Step1;
