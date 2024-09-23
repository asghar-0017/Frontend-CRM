import React from 'react';
import useThemeStore from '../../Zunstand/themeStore';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};

export default ThemeToggleButton;
