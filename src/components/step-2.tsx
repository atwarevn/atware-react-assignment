import React from 'react';
import { useOrder } from './context';

interface Step2Props {
  restaurants: string[];
}

const Step2: React.FC<Step2Props> = ({ restaurants }) => {
  const { formData, updateData, handleNext, handleBack } = useOrder();
  const handleNextStep = () => {
    if (!formData.restaurant) {
      alert('Please select a restaurant');
      return;
    }

    handleNext();
  };
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}
    >
      <div style={{ display: 'flex', border: '1px solid black' }}>
        <div style={{ padding: '5px 15px', borderRight: '1px solid black' }}>Step 1</div>
        <div
          style={{
            padding: '5px 15px',
            backgroundColor: '#89b4fa',
            borderRight: '1px solid black'
          }}
        >
          Step 2
        </div>
        <div style={{ padding: '5px 15px', borderRight: '1px solid black' }}>Step 3</div>
        <div style={{ padding: '5px 15px' }}>Review</div>
      </div>

      <div style={{ marginTop: '60px' }}>
        <p>Please Select a Restaurant</p>
        <select
          value={formData.restaurant}
          onChange={e => updateData({ restaurant: e.target.value })}
          style={{ width: '250px', padding: '5px', border: '2px solid black' }}
        >
          <option value=''>---</option>
          {restaurants.map(r => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '600px',
          marginTop: '100px'
        }}
      >
        <button
          onClick={handleBack}
          style={{
            padding: '5px 20px',
            backgroundColor: 'white',
            border: '2px solid black',
            boxShadow: '3px 3px 0px black',
            cursor: 'pointer'
          }}
        >
          Previous
        </button>

        <button
          onClick={handleNextStep}
          style={{
            padding: '5px 20px',
            backgroundColor: 'white',
            border: '2px solid black',
            boxShadow: '3px 3px 0px black',
            cursor: 'pointer'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
