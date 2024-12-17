import React from 'react';

const MotorSpeedSetting = ({ motorSpeed, onMotorSpeedChange }) => {
    console.log('speed',motorSpeed);
  // Handle the change in slider value
  const handleSpeedChange = (event) => {
    const newSpeed = event.target.value;
    onMotorSpeedChange(newSpeed); // Update parent component state
  };

  return (
    <div>
      <h3>Motor Speed Setting</h3>
      <label htmlFor="motorSpeed">Speed: {motorSpeed}</label>
      <input
        type="range"
        id="motorSpeed"
        name="motorSpeed"
        min="0"
        max="4"
        step="1"
        value={motorSpeed}
        onChange={handleSpeedChange}
        style={{ width: '100%' }}
      />
      <div>
        <p>Speed Level: {motorSpeed === '1' ? 'Slowest' : motorSpeed === '2' ? 'Slow' : motorSpeed === '3' ? 'Fast' : 'Fastest'}</p>
      </div>
    </div>
  );
};

export default MotorSpeedSetting;
