import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register required components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PowerGauge = ({ value }) => {
  const data = {
    datasets: [
      {
        data: [value, 100 - value], // Main value and remainder
        backgroundColor: ['green', 'gray'], // Green for actual value, gray for remainder
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}%`, // Show percentage in tooltip
        },
      },
      legend: {
        display: true, // Hide the legend
      },
      datalabels: {
        color: '#fff', // White text for better visibility
        formatter: (value, context) => {
          const index = context.dataIndex;
          return index === 0 ? `${value}%` : ''; // Show percentage only on the green segment
        },
        font: {
          weight: 'bold',
          size: 16,
        },
        anchor: 'center', // Place the label inside the segment
        align: 'center', // Center-align the label
      },
    },
    maintainAspectRatio: true, // Keep chart proportions consistent
    cutout: '70%', // Adjust the inner radius for a more "gauge-like" appearance
  };

  return (
    <div > {/* Center chart */}
      <h3 style={{ textAlign: 'center',color: 'white' }}>Power Gauge</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PowerGauge;
