import React from 'react';

const BatteryPercentage = ({ percentage }) => {
  return (
    <div className="info">
      <strong>Battery:</strong> {percentage}%
    </div>
  );
};

export default BatteryPercentage;
