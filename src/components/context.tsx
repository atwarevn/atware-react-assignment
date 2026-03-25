import React, { createContext, useContext, useMemo, useState } from 'react';

export interface OrderData {
  meal: string;
  people: number;
  restaurant: string;
  dishes: { id: number; name: string; servings: number }[];
}

interface OrderContextType {
  step: number;
  formData: OrderData;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  updateData: (newData: Partial<OrderData>) => void;
  handleNext: () => void;
  handleBack: () => void;
  resetDependentData: (field: 'meal' | 'restaurant') => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const initialFormData: OrderData = {
  meal: '',
  people: 1,
  restaurant: '',
  dishes: []
};

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<OrderData>(initialFormData);

  const updateData = (newData: Partial<OrderData>) => {
    setFormData(prev => {
      const updated = { ...prev, ...newData };

      // Data consistency:
      // đổi meal -> reset restaurant + dishes
      if (Object.prototype.hasOwnProperty.call(newData, 'meal') && newData.meal !== prev.meal) {
        updated.restaurant = '';
        updated.dishes = [];
      }

      // đổi restaurant -> reset dishes
      if (Object.prototype.hasOwnProperty.call(newData, 'restaurant') && newData.restaurant !== prev.restaurant) {
        updated.dishes = [];
      }

      return updated;
    });
  };

  const resetDependentData = (field: 'meal' | 'restaurant') => {
    setFormData(prev => {
      if (field === 'meal') {
        return {
          ...prev,
          meal: '',
          restaurant: '',
          dishes: []
        };
      }

      return {
        ...prev,
        restaurant: '',
        dishes: []
      };
    });
  };

  const handleNext = () => {
    setStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const value = useMemo(
    () => ({
      step,
      formData,
      setStep,
      updateData,
      handleNext,
      handleBack,
      resetDependentData
    }),
    [step, formData]
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};

export const useOrder = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error('useOrder must be used within OrderProvider');
  }

  return context;
};
