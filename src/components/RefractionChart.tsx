import React, { useRef, useEffect } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  ScatterController,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { Paper, Typography, Box, useTheme as useMuiTheme } from '@mui/material';
import { useTheme } from './ThemeContext';
import { RefractionChartProps, PrescriptionData } from '../interfaces';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ScatterController
);

const RefractionChart: React.FC<RefractionChartProps> = ({
  prescription,
  width = 600,
  height = 400,
  showLegend = true,
  title = 'Refraction Chart',
  comparePrescription,
  currentSphere,
  currentCylinder,
  currentAxis,
  testActive = false,
  onPositionClick,
  interactive = false,
}) => {
  const chartRef = useRef<ChartJS<"scatter">>(null);
  const { darkMode, highContrastMode } = useTheme();
  const muiTheme = useMuiTheme();
  
  const convertToCartesian = (data: PrescriptionData[]) => {
    return data.map(p => {
      // Convert cylinder and axis to cartesian coordinates
      // Cylinder length represents the magnitude, axis angle represents the direction
      const radians = (p.axis * Math.PI) / 180;
      const x = p.cylinder * Math.cos(radians);
      const y = p.cylinder * Math.sin(radians);
      
      return {
        x: p.sphere,
        y: x, // Using x-coordinate of cylinder as y-axis value
        z: y, // Using y-coordinate of cylinder as z-axis value (for radius)
        eye: p.eye,
        original: p,
      };
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!interactive || !onPositionClick || !chartRef.current) return;
    
    const chart = chartRef.current;
    const rect = chart.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Convert click coordinates to chart data values
    const xScale = chart.scales.x;
    const yScale = chart.scales.y;
    
    if (!xScale || !yScale) return;
    
    const sphereValue = xScale.getValueForPixel(x);
    const cylinderValue = yScale.getValueForPixel(y);
    
    // For simplicity, we'll use a default axis value
    // In a real app, you might want to calculate this based on the click position
    const axisValue = 90; // Default axis
    
    if (onPositionClick && sphereValue !== undefined && cylinderValue !== undefined) {
      onPositionClick(
        parseFloat(sphereValue.toFixed(2)), 
        parseFloat(cylinderValue.toFixed(2)), 
        axisValue
      );
    }
  };

  // Prepare chart data
  const mainData = convertToCartesian(prescription);
  const compareData = comparePrescription ? convertToCartesian(comparePrescription) : [];
  
  // Current position for active testing
  const currentPoint = currentSphere !== undefined && 
    currentCylinder !== undefined && 
    currentAxis !== undefined ? 
    convertToCartesian([{
      sphere: currentSphere,
      cylinder: currentCylinder,
      axis: currentAxis,
      eye: 'right', // Default, will be colored differently
    }]) : [];
  
  const data: ChartData<"scatter"> = {
    datasets: [
      {
        label: 'Right Eye',
        data: mainData.filter(p => p.original.eye === 'right'),
        backgroundColor: highContrastMode ? '#ff0000' : 'rgba(255, 99, 132, 0.8)',
        borderColor: highContrastMode ? '#ff0000' : 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        pointRadius: 8,
        pointHoverRadius: 12,
      },
      {
        label: 'Left Eye',
        data: mainData.filter(p => p.original.eye === 'left'),
        backgroundColor: highContrastMode ? '#0000ff' : 'rgba(54, 162, 235, 0.8)',
        borderColor: highContrastMode ? '#0000ff' : 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        pointRadius: 8,
        pointHoverRadius: 12,
      },
      ...(compareData.length > 0 ? [
        {
          label: 'Comparison Right Eye',
          data: compareData.filter(p => p.original.eye === 'right'),
          backgroundColor: highContrastMode ? '#ff7700' : 'rgba(255, 159, 64, 0.8)',
          borderColor: highContrastMode ? '#ff7700' : 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
          pointRadius: 6,
          pointStyle: 'triangle',
          pointHoverRadius: 10,
        },
        {
          label: 'Comparison Left Eye',
          data: compareData.filter(p => p.original.eye === 'left'),
          backgroundColor: highContrastMode ? '#00ffff' : 'rgba(75, 192, 192, 0.8)',
          borderColor: highContrastMode ? '#00ffff' : 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          pointRadius: 6,
          pointStyle: 'triangle',
          pointHoverRadius: 10,
        }
      ] : []),
      ...(currentPoint.length > 0 && testActive ? [
        {
          label: 'Current Position',
          data: currentPoint,
          backgroundColor: highContrastMode ? '#ffff00' : 'rgba(153, 102, 255, 0.8)',
          borderColor: highContrastMode ? '#ffff00' : 'rgba(153, 102, 255, 1)',
          borderWidth: 2,
          pointRadius: 10,
          pointStyle: 'star',
          pointHoverRadius: 14,
        }
      ] : []),
    ],
  };

  const options: ChartOptions<"scatter"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Sphere (D)',
          color: darkMode ? '#e0e0e0' : '#333333',
          font: {
            weight: 'bold' as const,
          },
        },
        min: -10,
        max: 10,
        ticks: {
          color: darkMode ? '#e0e0e0' : '#333333',
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Cylinder (D)',
          color: darkMode ? '#e0e0e0' : '#333333',
          font: {
            weight: 'bold' as const,
          },
        },
        min: -6,
        max: 6,
        ticks: {
          color: darkMode ? '#e0e0e0' : '#333333',
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const { original } = context.raw;
            return `${original.eye === 'right' ? 'OD' : 'OS'}: Sphere ${original.sphere}D, Cylinder ${original.cylinder}D, Axis ${original.axis}°`;
          },
        },
      },
      legend: {
        display: showLegend,
        labels: {
          color: darkMode ? '#e0e0e0' : '#333333',
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: title ? true : false,
        text: title,
        color: darkMode ? '#e0e0e0' : '#333333',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
    },
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 2, 
        bgcolor: darkMode ? muiTheme.palette.background.paper : '#ffffff',
        borderRadius: '8px',
        width: width, 
        height: height + 50, // Adding space for the title and legend
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ width: '100%', height }}>
        <Scatter 
          ref={chartRef}
          data={data} 
          options={options} 
          onClick={interactive ? handleClick : undefined}
        />
      </Box>
    </Paper>
  );
};

export default RefractionChart; 