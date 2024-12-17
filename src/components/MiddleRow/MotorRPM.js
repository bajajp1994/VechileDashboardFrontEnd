import React from 'react';

const MotorRPMText = ({ rpm }) => {
  return (
    <div className="info">
      <strong>Motor RPM:</strong> {rpm} RPM
    </div>
  );
};

export default MotorRPMText;
