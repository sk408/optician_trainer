import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { ThemeContextProps } from '../interfaces';

const defaultThemeContext: ThemeContextProps = {
  darkMode: false,
  setDarkMode: () => {},
  highContrastMode: false,
  setHighContrastMode: () => {},
  fontSize: 'medium',
  setFontSize: () => {},
  includeSphereCorrection: true,
  setIncludeSphereCorrection: () => {},
  includeCylinderCorrection: true,
  setIncludeCylinderCorrection: () => {},
};

const ThemeContext = createContext<ThemeContextProps>(defaultThemeContext);

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Load settings from localStorage if available
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [highContrastMode, setHighContrastMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem('highContrastMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [fontSize, setFontSize] = useState<string>(() => {
    const savedSize = localStorage.getItem('fontSize');
    return savedSize || 'medium';
  });

  const [includeSphereCorrection, setIncludeSphereCorrection] = useState<boolean>(() => {
    const savedSetting = localStorage.getItem('includeSphereCorrection');
    return savedSetting ? JSON.parse(savedSetting) : true;
  });

  const [includeCylinderCorrection, setIncludeCylinderCorrection] = useState<boolean>(() => {
    const savedSetting = localStorage.getItem('includeCylinderCorrection');
    return savedSetting ? JSON.parse(savedSetting) : true;
  });

  // Persist settings to localStorage when they change
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('highContrastMode', JSON.stringify(highContrastMode));
  }, [highContrastMode]);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('includeSphereCorrection', JSON.stringify(includeSphereCorrection));
  }, [includeSphereCorrection]);

  useEffect(() => {
    localStorage.setItem('includeCylinderCorrection', JSON.stringify(includeCylinderCorrection));
  }, [includeCylinderCorrection]);

  // Apply body class for global styling
  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('high-contrast', highContrastMode);
    document.body.classList.remove('font-small', 'font-medium', 'font-large');
    document.body.classList.add(`font-${fontSize}`);
  }, [darkMode, highContrastMode, fontSize]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
        highContrastMode,
        setHighContrastMode,
        fontSize,
        setFontSize,
        includeSphereCorrection,
        setIncludeSphereCorrection,
        includeCylinderCorrection,
        setIncludeCylinderCorrection,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext; 