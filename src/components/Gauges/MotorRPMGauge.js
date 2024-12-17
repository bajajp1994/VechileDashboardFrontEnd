import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels); // Register the plugin

const MotorRpmGauge = ({ value }) => {
  // Define the data for the RPM gauge
  const maxRpm = 1000; // Define the maximum RPM
  const remaining = maxRpm - value;

  const data = {
    datasets: [
      {
        data: [value, remaining], // Actual RPM value and the remainder
        backgroundColor: ['green', 'gray'], // Green for RPM, gray for the rest
      },
    ],
    labels: [`${value} RPM`, `${remaining} RPM`], // Labels for each segment
  };

  // Options for the chart
  const options = {
    plugins: {
      tooltip: {
        enabled: true, // Enable tooltips
        callbacks: {
          label: (tooltipItem) => {
            const dataValue = tooltipItem.raw; // Access the raw value
            return `${dataValue} RPM`;
          },
        },
      },
      legend: {
        display: false, // Hide the default legend
      },
      datalabels: {
        color: '#fff', // Text color
        formatter: (value, context) => {
          // Only show the actual RPM value on the green segment
          const index = context.dataIndex;
          return index === 0 ? `${value} RPM` : '';
        },
        font: {
          weight: 'bold',
          size: 14,
        },
        anchor: 'end',
        align: 'end',
      },
    },
  };

  return (
    <div>
      <h3 style={{ color: 'white' }}>Motor RPM Gauge</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default MotorRpmGauge;



