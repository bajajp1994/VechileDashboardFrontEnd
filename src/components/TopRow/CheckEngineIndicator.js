import React from 'react';
import engineStatus from '../../assets/icons/engineStatus.png'; 

const CheckEngineIndicator = ({ isOn }) => {
  console.log('isOn',isOn);
  return (
    <div>
      {isOn && (
        <img src={engineStatus} alt="engineStatus" style={{ width: '30px', height: '30px' }} />
      )}
      <p>Engine Indicator: {isOn ? 'isOn' : 'isOff'}</p>
    </div>
  );
};

export default CheckEngineIndicator;
