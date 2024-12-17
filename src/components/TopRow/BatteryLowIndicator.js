import React from 'react';
import { FaBatteryFull, FaBatteryHalf, FaBatteryQuarter, FaBatteryEmpty } from 'react-icons/fa';

const BatteryLowIndicator = ({ batteryPercentage }) => {
  console.log('batteryPercentage',batteryPercentage);
  const getBatteryIcon = (batteryPercentage) => {
    if (batteryPercentage >= 75) {
      return <FaBatteryFull style={{ color: 'green', fontSize: '30px' }} />;
    } else if (batteryPercentage >= 50) {
      return <FaBatteryHalf style={{ color: 'yellow', fontSize: '30px' }} />;
    } else if (batteryPercentage >= 25) {
      return <FaBatteryQuarter style={{ color: 'orange', fontSize: '30px' }} />;
    } else {
      return <FaBatteryEmpty style={{ color: 'red', fontSize: '30px' }} />;
    }
  };

  return (
    <div>
      {getBatteryIcon(batteryPercentage)}
      <p>Battery: {batteryPercentage}%</p>
    </div>
  );
};

export default BatteryLowIndicator;

