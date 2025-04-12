
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeColor = 'blue' | 'purple' | 'green' | 'orange';

interface ThemeContextType {
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>('blue');
  
  useEffect(() => {
    const storedTheme = localStorage.getItem('themeColor') as ThemeColor;
    if (storedTheme) {
      setThemeColor(storedTheme);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('themeColor', themeColor);
    
    // Remove all theme classes
    document.documentElement.classList.remove('theme-blue', 'theme-purple', 'theme-green', 'theme-orange');
    
    // Add the current theme class
    if (themeColor !== 'blue') {
      document.documentElement.classList.add(`theme-${themeColor}`);
    }
  }, [themeColor]);
  
  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
