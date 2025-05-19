import React, { useState } from 'react';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      let resultCategory = '';
      if (bmiValue < 18.5) resultCategory = 'Underweight';
      else if (bmiValue < 24.9) resultCategory = 'Normal weight';
      else if (bmiValue < 29.9) resultCategory = 'Overweight';
      else resultCategory = 'Obesity';

      setCategory(resultCategory);
    } else {
      alert('Please enter valid weight and height.');
    }
  };

  return (
     <div>
      <h2>BMI Calculator</h2>
      <input
        type="number"
        placeholder="Weight in kg"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Height in cm"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
          <p>Your BMI: {bmi}</p>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;
