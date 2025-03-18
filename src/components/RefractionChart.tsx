import React, { useRef, useEffect, useState } from 'react';
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
import { Paper, Typography, Box, useTheme as useMuiTheme, useMediaQuery } from '@mui/material';
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
  width,
  height,
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
  
  // Get screen size for responsive adjustments
  const isXsScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const isSmScreen = useMediaQuery(muiTheme.breakpoints.between('sm', 'md'));
  const isMdScreen = useMediaQuery(muiTheme.breakpoints.between('md', 'lg'));
  
  // Calculate responsive dimensions if width/height not specified
  const getResponsiveWidth = () => {
    if (width) return width;
    if (isXsScreen) return '100%';
    if (isSmScreen) return 450;
    if (isMdScreen) return 550;
    return 600; // default for larger screens
  };
  
  const getResponsiveHeight = () => {
    if (height) return height;
    if (isXsScreen) return 300;
    if (isSmScreen) return 350;
    return 400; // default for larger screens
  };
  
  // Calculate responsive point sizes
  const getPointRadius = () => {
    if (isXsScreen) return 6;
    if (isSmScreen) return 7;
    return 8;
  };
  
  const getPointHoverRadius = () => {
    if (isXsScreen) return 8;
    if (isSmScreen) return 10;
    return 12;
  };
  
  // State for responsive dimensions
  const [responsiveWidth, setResponsiveWidth] = useState(getResponsiveWidth());
  const [responsiveHeight, setResponsiveHeight] = useState(getResponsiveHeight());
  
  // Update dimensions on screen size changes
  useEffect(() => {
    setResponsiveWidth(getResponsiveWidth());
    setResponsiveHeight(getResponsiveHeight());
  }, [isXsScreen, isSmScreen, isMdScreen, width, height]);
  
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
  
  // Responsive point radius
  const pointRadius = getPointRadius();
  const pointHoverRadius = getPointHoverRadius();
  
  const data: ChartData<"scatter"> = {
    datasets: [
      {
        label: 'Right Eye',
        data: mainData.filter(p => p.original.eye === 'right'),
        backgroundColor: highContrastMode ? '#ff0000' : 'rgba(255, 99, 132, 0.8)',
        borderColor: highContrastMode ? '#ff0000' : 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        pointRadius: pointRadius,
        pointHoverRadius: pointHoverRadius,
      },
      {
        label: 'Left Eye',
        data: mainData.filter(p => p.original.eye === 'left'),
        backgroundColor: highContrastMode ? '#0000ff' : 'rgba(54, 162, 235, 0.8)',
        borderColor: highContrastMode ? '#0000ff' : 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        pointRadius: pointRadius,
        pointHoverRadius: pointHoverRadius,
      },
      ...(compareData.length > 0 ? [
        {
          label: 'Comparison Right Eye',
          data: compareData.filter(p => p.original.eye === 'right'),
          backgroundColor: highContrastMode ? '#ff7700' : 'rgba(255, 159, 64, 0.8)',
          borderColor: highContrastMode ? '#ff7700' : 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
          pointRadius: pointRadius - 2,
          pointStyle: 'triangle',
          pointHoverRadius: pointHoverRadius - 2,
        },
        {
          label: 'Comparison Left Eye',
          data: compareData.filter(p => p.original.eye === 'left'),
          backgroundColor: highContrastMode ? '#00ffff' : 'rgba(75, 192, 192, 0.8)',
          borderColor: highContrastMode ? '#00ffff' : 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          pointRadius: pointRadius - 2,
          pointStyle: 'triangle',
          pointHoverRadius: pointHoverRadius - 2,
        }
      ] : []),
      ...(currentPoint.length > 0 && testActive ? [
        {
          label: 'Current Position',
          data: currentPoint,
          backgroundColor: highContrastMode ? '#ffff00' : 'rgba(153, 102, 255, 0.8)',
          borderColor: highContrastMode ? '#ffff00' : 'rgba(153, 102, 255, 1)',
          borderWidth: 2,
          pointRadius: pointRadius + 2,
          pointStyle: 'star',
          pointHoverRadius: pointHoverRadius + 2,
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
          display: !isXsScreen,
          text: 'Sphere (D)',
          color: darkMode ? '#e0e0e0' : '#333333',
          font: {
            weight: 'bold' as const,
            size: isXsScreen ? 10 : 12,
          },
        },
        min: -10,
        max: 10,
        ticks: {
          color: darkMode ? '#e0e0e0' : '#333333',
          font: {
            size: isXsScreen ? 8 : 10,
          },
          maxRotation: isXsScreen ? 45 : 0,
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          display: !isXsScreen,
        },
      },
      y: {
        title: {
          display: !isXsScreen,
          text: 'Cylinder (D)',
          color: darkMode ? '#e0e0e0' : '#333333',
          font: {
            weight: 'bold' as const,
            size: isXsScreen ? 10 : 12,
          },
        },
        min: -6,
        max: 6,
        ticks: {
          color: darkMode ? '#e0e0e0' : '#333333',
          font: {
            size: isXsScreen ? 8 : 10,
          },
        },
        grid: {
          color: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
          display: !isXsScreen,
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
        titleFont: {
          size: isXsScreen ? 10 : 12,
        },
        bodyFont: {
          size: isXsScreen ? 10 : 12,
        },
        padding: isXsScreen ? 6 : 10,
      },
      legend: {
        display: isXsScreen ? false : showLegend,
        position: isSmScreen ? 'bottom' : 'top',
        labels: {
          color: darkMode ? '#e0e0e0' : '#333333',
          font: {
            size: isXsScreen ? 10 : 12,
          },
          boxWidth: isXsScreen ? 8 : 12,
          padding: isXsScreen ? 6 : 10,
        },
      },
      title: {
        display: title ? true : false,
        text: title,
        color: darkMode ? '#e0e0e0' : '#333333',
        font: {
          size: isXsScreen ? 14 : 16,
          weight: 'bold' as const,
        },
        padding: { top: 5, bottom: isXsScreen ? 5 : 10 },
      },
    },
  };

  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: { xs: 1, sm: 2 }, 
        bgcolor: darkMode ? muiTheme.palette.background.paper : '#ffffff',
        borderRadius: '8px',
        width: responsiveWidth, 
        height: 'auto',
        maxWidth: '100%',
        overflow: 'hidden',
      }}
    >
      {title && !isXsScreen && (
        <Typography 
          variant={isXsScreen ? "subtitle1" : "h6"} 
          align="center" 
          gutterBottom
          sx={{ fontWeight: 'medium' }}
        >
          {title}
        </Typography>
      )}
      <Box sx={{ width: '100%', height: responsiveHeight }}>
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