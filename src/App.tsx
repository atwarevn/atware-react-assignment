import React, { useState } from "react";
import Step1 from "./components/step-1";
import Step2 from "./components/step-2";
import Step3 from "./components/step-3";
import Step4 from "./components/step-4";

interface OrderData {
  meal: string;
  people: number;
  restaurant: string;
  dishes: { id: number; name: string; servings: number }[];
}

const App: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<OrderData>({
    meal: "", people: 1, restaurant: "", dishes: []
  });

  const updateData = (newData: Partial<OrderData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (<div style={{ fontFamily: "sans-serif" }}>
    {step === 1 && (<Step1
      formData={formData}
      updateData={updateData}
      onNext={handleNext}
    />)}
    {step === 2 && (<Step2

    />)}
    {step === 3 && (<Step3

    />)}
    {step === 4 && (<Step4

    />)}
  </div>);
};

export default App;
