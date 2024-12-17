import React from 'react';

const BatteryTemperature = ({ temperature }) => {
  return (
    <div className="info">
      <strong>Battery Temperature:</strong> {temperature}°C
    </div>
  );
};

export default BatteryTemperature;
