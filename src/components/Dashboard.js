import React, { useState, useEffect } from 'react';
import {getAllDashboardData} from '../services/dashboardService'; // Import API service
import ParkingBrakeIndicator from './TopRow/ParkingBrakeIndicator';
import CheckEngineIndicator from './TopRow/CheckEngineIndicator';
import MotorStatusIndicator from './TopRow/MotorStatusIndicator';
import BatteryLowIndicator from './TopRow/BatteryLowIndicator';
import PowerGauge from './Gauges/PowerGauge';
import MotorRPMGauge from './Gauges/MotorRPMGauge';
import GearRatio from './MiddleRow/GearRatio';
import BatteryPercentage from './MiddleRow/BatteryPercentage';
import BatteryTemperature from './MiddleRow/BatteryTemperature';
import MotorRPM from './MiddleRow/MotorRPM';
import ChargingButton from './BottomRow/ChargingButton';
import './Dashboard.css';
import MotorSpeedSetting from './MiddleRow/MotorSpeedSetting';

const Dashboard = () => {
  // Define state for backend data
  const [dashboardData, setDashboardData] = useState({
    motorRPM: 0,
    batteryPercentage: 0,
    batteryTemperature: 0,
    chargingState: false,
    gearRatio: '',
    parkingBrakeEngaged:false,
    checkEngine:false,
    motorHighSpeed:false,
    batteryLow:false,
    motorSpeed: 1,
  });

   // Example: Function to update motor speed
   const handleMotorSpeedChange = (newSpeed) => {
    setDashboardData(prevState => ({
      ...prevState,
      motorSpeed: newSpeed,
    }));
  };

  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const data = await getAllDashboardData();
        if (data.length > 0) {
          setDashboardData(data[0]); // Assuming you want the first item
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load dashboard data.');
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="dashboard">
      {/* Top Row */}
      <div className="topRow">
      <ParkingBrakeIndicator isEngaged={dashboardData.parkingBrakeEngaged} />
      <CheckEngineIndicator isOn={dashboardData.checkEngine} />
      <MotorStatusIndicator isRunning={dashboardData.motorHighSpeed} />
      <BatteryLowIndicator batteryPercentage={dashboardData.batteryPercentage} />
      </div>

      {/* Gauges */}
      <div className="gauges">
        <PowerGauge value={dashboardData.batteryPercentage} />
       <MotorRPMGauge value={dashboardData.motorRPM} />
      </div>

      {/* Middle Row */}
      <div className="middle-row">
        <GearRatio gearRatio={dashboardData.gearRatio} />
       <BatteryPercentage percentage={dashboardData.batteryPercentage} />
        <BatteryTemperature temperature={dashboardData.batteryTemperature} />
        <MotorRPM rpm={dashboardData.motorRPM} />
        <MotorSpeedSetting motorSpeed={dashboardData.motorSpeed} onMotorSpeedChange={handleMotorSpeedChange} />
      </div>

      {/* Bottom Row */}
      <div className="bottom-row">
        <ChargingButton isCharging={dashboardData.chargingState}/>
      </div>
    </div>
  );
};

export default Dashboard;
