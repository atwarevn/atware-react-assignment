import React from 'react';
import { useOrder } from './context';

const Step4: React.FC = () => {
  const { formData, handleBack } = useOrder();

  const handleSubmit = () => {
    console.log('Final Submission Data:', formData);
    alert('Check console for submitted data!');
  };

  return (
    <div
      style={{
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          border: '2px solid black',
          boxShadow: '4px 4px 0px black'
        }}
      >
        <div style={{ padding: '5px 15px', borderRight: '2px solid black' }}>Step 1</div>
        <div style={{ padding: '5px 15px', borderRight: '2px solid black' }}>Step 2</div>
        <div style={{ padding: '5px 15px', borderRight: '2px solid black' }}>Step 3</div>
        <div style={{ padding: '5px 15px', backgroundColor: '#89b4fa' }}>Review</div>
      </div>

      <div
        style={{
          marginTop: '80px',
          width: '100%',
          maxWidth: '600px',
          textAlign: 'left'
        }}
      >
        <h3 style={{ marginBottom: '20px' }}>Current Form Data:</h3>
        <pre
          style={{
            backgroundColor: '#f4f4f4',
            padding: '20px',
            border: '2px dashed black',
            fontSize: '14px',
            overflowX: 'auto'
          }}
        >
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>

      <div style={{ display: 'flex', gap: '400px', marginTop: '100px' }}>
        <button
          onClick={handleBack}
          style={{
            padding: '8px 20px',
            border: '2px solid black',
            boxShadow: '4px 4px 0px black',
            fontWeight: 'bold'
          }}
        >
          Previous
        </button>
        <button
          onClick={handleSubmit}
          style={{
            padding: '8px 25px',
            backgroundColor: 'white',
            border: '2px solid black',
            boxShadow: '4px 4px 0px black',
            fontWeight: 'bold'
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
