import React, { useState } from 'react';
import { Outlet, Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Container,
  useMediaQuery,
  Tooltip,
  Switch,
  FormControlLabel,
  Menu,
  MenuItem,
  ListItemButton
} from '@mui/material';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  School as SchoolIcon,
  Person as PatientIcon,
  RemoveRedEye as EyeIcon,
  ContactPage as ContactLensIcon,
  CameraAlt as SlitLampIcon,
  GridOn as VisualFieldIcon,
  Build as TroubleshootingIcon,
  Assignment as FollowUpIcon,
  Settings as SettingsIcon,
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
  Contrast as ContrastIcon,
  TextFields as TextFieldsIcon,
  MenuBook as MenuBookIcon
} from '@mui/icons-material';
import { useTheme } from './ThemeContext';

interface LayoutProps {
  children?: React.ReactNode;
}

// Navigation items configuration
const NAVIGATION_ITEMS = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />
  },
  {
    title: 'Tutorial',
    path: '/tutorial',
    icon: <SchoolIcon />
  },
  {
    title: 'Study',
    path: '/study',
    icon: <MenuBookIcon />
  },
  {
    title: 'Patients',
    path: '/patients',
    icon: <PatientIcon />
  },
  {
    title: 'Eye Anatomy',
    path: '/eye-anatomy',
    icon: <EyeIcon />
  },
  {
    title: 'Contact Lens Fitting',
    path: '/contact-lens-fitting',
    icon: <ContactLensIcon />
  },
  {
    title: 'Troubleshooting Guide',
    path: '/troubleshooting-guide',
    icon: <TroubleshootingIcon />
  },
  {
    title: 'Follow-up Recommendations',
    path: '/follow-up',
    icon: <FollowUpIcon />
  }
];

const Layout: React.FC<LayoutProps> = () => {
  const location = useLocation();
  const muiTheme = useMuiTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('md'));
  const { 
    darkMode, 
    setDarkMode, 
    highContrastMode, 
    setHighContrastMode, 
    fontSize, 
    setFontSize 
  } = useTheme();
  
  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // Settings menu state
  const [settingsAnchorEl, setSettingsAnchorEl] = useState<null | HTMLElement>(null);
  const isSettingsMenuOpen = Boolean(settingsAnchorEl);
  
  // Toggle drawer
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  
  // Handle settings menu
  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setSettingsAnchorEl(event.currentTarget);
  };
  
  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
  };
  
  // Handle font size change
  const handleFontSizeChange = (size: string) => {
    setFontSize(size);
    handleSettingsClose();
  };
  
  // Drawer content
  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 2,
          backgroundColor: darkMode ? 'primary.dark' : 'primary.main',
          color: 'primary.contrastText'
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Optician Trainer
        </Typography>
        <Typography variant="subtitle2">
          Vision Testing & Refraction
        </Typography>
      </Box>
      
      <Divider />
      
      <List>
        {NAVIGATION_ITEMS.map((item) => (
          <ListItem 
            key={item.title} 
            disablePadding 
            component={RouterLink} 
            to={item.path}
            sx={{ 
              color: 'inherit', 
              textDecoration: 'none',
              backgroundColor: location.pathname === item.path 
                ? (darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)')
                : 'transparent'
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider />
      
      <Box sx={{ p: 2 }}>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
              color="primary"
            />
          }
          label="Dark Mode"
        />
        
        <FormControlLabel
          control={
            <Switch
              checked={highContrastMode}
              onChange={(e) => setHighContrastMode(e.target.checked)}
              color="primary"
            />
          }
          label="High Contrast"
        />
      </Box>
    </Box>
  );
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Optician Trainer
          </Typography>
          
          {!isSmallScreen && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color="inherit" component={RouterLink} to="/">
                Home
              </Button>
              <Button color="inherit" component={RouterLink} to="/tutorial">
                Tutorial
              </Button>
              <Button color="inherit" component={RouterLink} to="/patients">
                Patients
              </Button>
            </Box>
          )}
          
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
            <Tooltip title="Toggle Dark Mode">
              <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Settings">
              <IconButton
                color="inherit"
                onClick={handleSettingsClick}
                aria-controls={isSettingsMenuOpen ? 'settings-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isSettingsMenuOpen ? 'true' : undefined}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Settings Menu */}
      <Menu
        id="settings-menu"
        anchorEl={settingsAnchorEl}
        open={isSettingsMenuOpen}
        onClose={handleSettingsClose}
        MenuListProps={{
          'aria-labelledby': 'settings-button',
        }}
      >
        <MenuItem onClick={() => setHighContrastMode(!highContrastMode)}>
          <ListItemIcon>
            <ContrastIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            {highContrastMode ? 'Disable' : 'Enable'} High Contrast
          </ListItemText>
        </MenuItem>
        
        <Divider />
        
        <MenuItem disabled>
          <ListItemIcon>
            <TextFieldsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Font Size</ListItemText>
        </MenuItem>
        
        <MenuItem 
          onClick={() => handleFontSizeChange('small')}
          selected={fontSize === 'small'}
        >
          <ListItemText inset>Small</ListItemText>
        </MenuItem>
        
        <MenuItem 
          onClick={() => handleFontSizeChange('medium')}
          selected={fontSize === 'medium'}
        >
          <ListItemText inset>Medium</ListItemText>
        </MenuItem>
        
        <MenuItem 
          onClick={() => handleFontSizeChange('large')}
          selected={fontSize === 'large'}
        >
          <ListItemText inset>Large</ListItemText>
        </MenuItem>
      </Menu>
      
      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
      
      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      
      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: darkMode 
            ? (muiTheme.palette.mode === 'dark' ? 'background.paper' : '#272727')
            : (muiTheme.palette.mode === 'light' ? 'background.paper' : '#f5f5f5')
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            Optician Trainer — Vision Testing & Refraction Training
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} All Rights Reserved
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
            <RouterLink to="/" style={{ color: 'inherit', marginRight: '16px' }}>
              Home
            </RouterLink>
            <RouterLink to="/tutorial" style={{ color: 'inherit', marginRight: '16px' }}>
              Tutorial
            </RouterLink>
            <RouterLink to="/patients" style={{ color: 'inherit' }}>
              Patients
            </RouterLink>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;