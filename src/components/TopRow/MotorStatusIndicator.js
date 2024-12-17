import React from 'react';
import battery from '../../assets/icons/battery.png'; 

const MotorStatusIndicator = ({ isRunning }) => {
  return (
    <div>
      {isRunning && (
        <img src={battery} alt="battery" style={{ width: '30px', height: '30px' }} />
      )}
      <p>Motor Status: {isRunning ? 'isRunning' : 'isOff'}</p>
    </div>
  );
};

export default MotorStatusIndicator;
