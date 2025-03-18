import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
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
  const theme = createTheme({
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
      h1: { fontSize: '2.5rem' * fontSizeMultiplier },
      h2: { fontSize: '2rem' * fontSizeMultiplier },
      h3: { fontSize: '1.75rem' * fontSizeMultiplier },
      h4: { fontSize: '1.5rem' * fontSizeMultiplier },
      h5: { fontSize: '1.25rem' * fontSizeMultiplier },
      h6: { fontSize: '1rem' * fontSizeMultiplier },
      body1: { fontSize: '1rem' * fontSizeMultiplier },
      body2: { fontSize: '0.875rem' * fontSizeMultiplier },
      button: { 
        fontSize: '0.875rem' * fontSizeMultiplier,
        fontWeight: 500,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: highContrastMode ? 0 : 4,
            textTransform: 'none',
            fontWeight: highContrastMode ? 700 : 500,
            // Increased padding for better touch targets on larger font sizes
            ...(fontSize === 'large' && {
              padding: '8px 16px',
            }),
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
      // Accessibility-focused overrides
      MuiFocusVisible: {
        styleOverrides: {
          root: {
            outline: highContrastMode ? `3px solid ${darkMode ? '#ffffff' : '#000000'}` : undefined,
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default AppThemeProvider; 