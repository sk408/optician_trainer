import React, { useState, useEffect } from 'react';
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
  ListItemButton,
  useTheme as useMuiTheme,
  Badge
} from '@mui/material';
import { useTheme } from './ThemeContext';
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
  MenuBook as MenuBookIcon,
  EmojiPeople as BeginnerIcon
} from '@mui/icons-material';

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
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const { 
    darkMode, 
    setDarkMode, 
    highContrastMode, 
    setHighContrastMode, 
    fontSize, 
    setFontSize 
  } = useTheme();
  
  // Beginner mode state
  const [beginnerMode, setBeginnerMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('beginnerMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  
  // Save beginner mode preference
  useEffect(() => {
    localStorage.setItem('beginnerMode', JSON.stringify(beginnerMode));
    
    // Update URL with beginner mode parameter
    const url = new URL(window.location.href);
    if (beginnerMode) {
      url.searchParams.set('mode', 'beginner');
    } else {
      url.searchParams.delete('mode');
    }
    
    window.history.replaceState({}, '', url.toString());
  }, [beginnerMode]);
  
  // Toggle beginner mode
  const handleBeginnerModeToggle = () => {
    setBeginnerMode(!beginnerMode);
  };
  
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
  
  // Modified settings menu
  const settingsMenu = (
    <Menu
      anchorEl={settingsAnchorEl}
      open={isSettingsMenuOpen}
      onClose={handleSettingsClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="primary"
            />
          }
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {darkMode ? <DarkModeIcon sx={{ mr: 1 }} /> : <LightModeIcon sx={{ mr: 1 }} />}
              <Typography>{darkMode ? 'Dark Mode' : 'Light Mode'}</Typography>
            </Box>
          }
        />
      </MenuItem>
      
      <MenuItem>
        <FormControlLabel
          control={
            <Switch
              checked={highContrastMode}
              onChange={() => setHighContrastMode(!highContrastMode)}
              color="primary"
            />
          }
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ContrastIcon sx={{ mr: 1 }} />
              <Typography>High Contrast</Typography>
            </Box>
          }
        />
      </MenuItem>
      
      <MenuItem>
        <FormControlLabel
          control={
            <Switch
              checked={beginnerMode}
              onChange={handleBeginnerModeToggle}
              color="secondary"
            />
          }
          label={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <BeginnerIcon sx={{ mr: 1 }} />
              <Typography>Beginner Mode</Typography>
              {beginnerMode && (
                <Badge color="secondary" variant="dot" sx={{ ml: 1 }} />
              )}
            </Box>
          }
        />
      </MenuItem>
      
      <Divider />
      
      <MenuItem>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          Font Size
        </Typography>
      </MenuItem>
      
      <MenuItem onClick={() => handleFontSizeChange('small')}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextFieldsIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography>Small</Typography>
          {fontSize === 'small' && <Typography sx={{ ml: 1 }}>✓</Typography>}
        </Box>
      </MenuItem>
      
      <MenuItem onClick={() => handleFontSizeChange('medium')}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextFieldsIcon sx={{ mr: 1 }} />
          <Typography>Medium</Typography>
          {fontSize === 'medium' && <Typography sx={{ ml: 1 }}>✓</Typography>}
        </Box>
      </MenuItem>
      
      <MenuItem onClick={() => handleFontSizeChange('large')}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextFieldsIcon fontSize="large" sx={{ mr: 1 }} />
          <Typography>Large</Typography>
          {fontSize === 'large' && <Typography sx={{ ml: 1 }}>✓</Typography>}
        </Box>
      </MenuItem>
    </Menu>
  );
  
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar position="sticky" elevation={darkMode ? 2 : 1}>
        <Toolbar sx={{ 
          px: { xs: 1, sm: 2, md: 3 },
          height: { xs: 56, sm: 64, md: 64 },
          transition: 'all 0.3s'
        }}>
          <IconButton
            size={isMobile ? "medium" : "large"}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: isMobile ? 1 : 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography 
            variant={isMobile ? "subtitle1" : "h6"} 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontWeight: 'medium',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            Optician Trainer
          </Typography>
          
          {!isSmallScreen && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button color="inherit" component={RouterLink} to="/">
                Home
              </Button>
              <Button color="inherit" component={RouterLink} to="/patients">
                Patients
              </Button>
            </Box>
          )}
          
          <Box sx={{ display: 'flex', alignItems: 'center', ml: isMobile ? 0.5 : 1 }}>
            <Tooltip title="Toggle Dark Mode">
              <IconButton 
                color="inherit" 
                onClick={() => setDarkMode(!darkMode)}
                size={isMobile ? "small" : "medium"}
              >
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
                size={isMobile ? "small" : "medium"}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Settings Menu */}
      {settingsMenu}
      
      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '85%', sm: 280 },
            maxWidth: 320
          }
        }}
      >
        {drawerContent}
      </Drawer>
      
      {/* Main content */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          pt: { xs: 2, sm: 3, md: 4 },
          pb: { xs: 6, sm: 8, md: 10 },
          px: { xs: 1, sm: 2, md: 3 },
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ 
          width: '100%', 
          maxWidth: '100%', 
          margin: '0 auto',
        }}>
          <Outlet />
        </Box>
      </Box>
      
      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: { xs: 2, sm: 3 },
          px: { xs: 1, sm: 2 },
          mt: 'auto',
          backgroundColor: darkMode 
            ? (muiTheme.palette.mode === 'dark' ? 'background.paper' : '#272727')
            : (muiTheme.palette.mode === 'light' ? 'background.paper' : '#f5f5f5'),
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box sx={{ width: '100%', maxWidth: '100%' }}>
          <Container maxWidth={false}>
            <Typography variant="body2" color="text.secondary" align="center">
              Optician Trainer — Vision Testing & Refraction Training
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              © {new Date().getFullYear()} All Rights Reserved
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
              <Box sx={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: { xs: 1, sm: 2 } 
              }}>
                <RouterLink to="/" style={{ color: 'inherit' }}>
                  Home
                </RouterLink>
                <RouterLink to="/patients" style={{ color: 'inherit' }}>
                  Patients
                </RouterLink>
              </Box>
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;