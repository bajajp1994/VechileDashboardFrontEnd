import React from 'react';
import parkingIndicator from '../../assets/icons/parkingIndicator.png'; 


const ParkingBrakeIndicator = ({ isEngaged }) => {
  return (
    <div>
      {isEngaged && (
        <img src={parkingIndicator} alt="parkingIndicator" style={{ width: '30px', height: '30px' }} />
      )}
      <p>Parking Brake: {isEngaged ? 'Engaged' : 'Disengaged'}</p>
    </div>
  );
};

export default ParkingBrakeIndicator;


