import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from './ThemeContext';

interface AppThemeProviderProps {
  children: ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const { darkMode, highContrastMode, fontSize } = useTheme();

  // Define font size scales based on the selected fontSize
  const fontSizeMultiplier = 
    fontSize === 'small' ? 0.85 : 
    fontSize === 'large' ? 1.2 : 
    1;

  // Define theme based on current settings
  let theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: highContrastMode ? '#ffee00' : '#3f51b5',
      },
      secondary: {
        main: highContrastMode ? '#ff0066' : '#f50057',
      },
      background: {
        default: darkMode 
          ? (highContrastMode ? '#000000' : '#121212') 
          : (highContrastMode ? '#ffffff' : '#f5f5f5'),
        paper: darkMode 
          ? (highContrastMode ? '#111111' : '#1e1e1e') 
          : (highContrastMode ? '#ffffff' : '#ffffff'),
      },
      text: {
        primary: darkMode
          ? (highContrastMode ? '#ffffff' : '#e0e0e0')
          : (highContrastMode ? '#000000' : '#212121'),
        secondary: darkMode
          ? (highContrastMode ? '#eeeeee' : '#b0b0b0')
          : (highContrastMode ? '#222222' : '#757575'),
      },
      // Additional color settings for high contrast mode
      ...(highContrastMode && {
        divider: darkMode ? '#ffffff' : '#000000',
        action: {
          active: darkMode ? '#ffffff' : '#000000',
          hover: darkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
          selected: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
        },
      }),
    },
    typography: {
      fontSize: 14 * fontSizeMultiplier,
      fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: { 
        fontSize: '2.5rem',
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h2: { 
        fontSize: '2rem',
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h3: { 
        fontSize: '1.75rem',
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h4: { 
        fontSize: '1.5rem',
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h5: { 
        fontSize: '1.25rem',
        fontWeight: 500,
        lineHeight: 1.2,
      },
      h6: { 
        fontSize: '1rem',
        fontWeight: 500,
        lineHeight: 1.2,
      },
      body1: { 
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      body2: { 
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },
      button: { 
        fontSize: '0.875rem',
        fontWeight: 500,
        textTransform: 'none',
      },
      subtitle1: {
        fontSize: '1rem',
        lineHeight: 1.5,
        fontWeight: 500,
      },
      subtitle2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
        fontWeight: 500,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            WebkitFontSmoothing: 'auto',
          },
          body: {
            overflow: 'auto',
          },
          // Ensure proper viewport settings for mobile
          '@viewport': {
            width: 'device-width',
            initialScale: 1,
          },
          // Touch enhancements
          '@media (pointer: coarse)': {
            'button, [role="button"]': {
              minHeight: '44px',
              minWidth: '44px',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: highContrastMode ? 0 : 4,
            textTransform: 'none',
            fontWeight: highContrastMode ? 700 : 500,
            // Responsive padding for touch devices
            '@media (pointer: coarse)': {
              padding: '10px 16px',
              minHeight: '44px',
            },
            // Increased padding for larger font sizes
            ...(fontSize === 'large' && {
              padding: '10px 20px',
            }),
          },
          sizeLarge: {
            padding: '12px 24px',
            fontSize: '1rem',
          },
          sizeSmall: {
            padding: '6px 12px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: highContrastMode ? 0 : 8,
            ...(highContrastMode && {
              border: `2px solid ${darkMode ? '#ffffff' : '#000000'}`,
            }),
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: false,
          disableGutters: false
        },
        styleOverrides: {
          root: {
            width: '100%',
            margin: '0 auto',
            '@media (max-width: 600px)': {
              padding: '0 12px',
            },
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            '@media (max-width: 600px)': {
              minHeight: 56,
              paddingLeft: 12,
              paddingRight: 12,
            },
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            // Better touch targets on mobile
            '@media (pointer: coarse)': {
              paddingTop: 8,
              paddingBottom: 8,
            },
          },
        },
      },
      // Accessibility-focused overrides
      MuiButtonBase: {
        defaultProps: {
          disableRipple: highContrastMode,
        },
        styleOverrides: {
          root: {
            '&.Mui-focusVisible': {
              outline: highContrastMode ? `3px solid ${darkMode ? '#ffffff' : '#000000'}` : undefined,
            },
          },
        },
      },
    },
    // Add responsive breakpoints
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    // Responsive spacing
    spacing: (factor: number) => `${0.25 * factor}rem`,
  });

  // Apply responsive font sizing
  theme = responsiveFontSizes(theme, {
    breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
    factor: 2, // Stronger scaling factor
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default AppThemeProvider; 