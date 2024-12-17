// ChargingButton.js
import React from 'react';
import charging from '../../assets/icons/charging.png'; 

const ChargingButton = ({ isCharging }) => {
  return (
    <div  style={{ height: '60px' }}>
      {isCharging && (
        <img src={charging} alt="isCharging" style={{ width: '60px', height: '60px' }} />
      )}
    </div>
  );
};

export default ChargingButton;
