import React, { useState } from 'react';
import { 
  Paper, 
  Tabs, 
  Tab,
  Box
} from '@mui/material';
import { 
  Assignment as AssignmentIcon,
  StraightenOutlined as MeasureIcon,
  Build as AdjustIcon,
  Error as TroubleshootIcon,
  School as SchoolIcon
} from '@mui/icons-material';
import { useTheme } from '../ThemeContext';
import OverviewPanel from './OverviewPanel';
import FrameMeasurementsPanel from './FrameMeasurementsPanel';
import AdjustmentsPanel from './AdjustmentsPanel';
import TroubleshootingPanel from './TroubleshootingPanel';
import PracticePanel from './PracticePanel';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dispensing-tabpanel-${index}`}
      aria-labelledby={`dispensing-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

const DispensingBasicsContainer: React.FC = () => {
  const { darkMode } = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Paper elevation={3} sx={{ mb: 4 }}>
      <Tabs 
        value={tabValue} 
        onChange={handleTabChange} 
        aria-label="dispensing basics tabs"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ 
          borderBottom: 1, 
          borderColor: 'divider',
          backgroundColor: darkMode ? 'background.paper' : '#f5f5f5' 
        }}
      >
        <Tab icon={<AssignmentIcon />} label="Overview" />
        <Tab icon={<MeasureIcon />} label="Frame Measurements" />
        <Tab icon={<AdjustIcon />} label="Adjustments" />
        <Tab icon={<TroubleshootIcon />} label="Troubleshooting" />
        <Tab icon={<SchoolIcon />} label="Practice" />
      </Tabs>

      <TabPanel value={tabValue} index={0}>
        <OverviewPanel />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <FrameMeasurementsPanel />
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <AdjustmentsPanel />
      </TabPanel>

      <TabPanel value={tabValue} index={3}>
        <TroubleshootingPanel />
      </TabPanel>

      <TabPanel value={tabValue} index={4}>
        <PracticePanel />
      </TabPanel>
    </Paper>
  );
};

export default DispensingBasicsContainer; 