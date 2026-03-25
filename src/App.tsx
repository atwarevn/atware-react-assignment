import React from 'react';
import Step1 from './components/step-1';
import Step2 from './components/step-2';
import Step3 from './components/step-3';
import Step4 from './components/step-4';
import dishData from './data/dishes.json';
import { useOrder } from './components/context';

const App: React.FC = () => {
  const { step, formData } = useOrder();

  const filteredRestaurants = Array.from(
    new Set(dishData.dishes.filter(d => d.availableMeals.includes(formData.meal)).map(d => d.restaurant))
  );

  const filteredDishes = dishData.dishes.filter(d => d.restaurant === formData.restaurant);

  return (
    <main>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 restaurants={filteredRestaurants} />}
      {step === 3 && <Step3 availableDishes={filteredDishes} />}
      {step === 4 && <Step4 />}
    </main>
  );
};

export default App;
