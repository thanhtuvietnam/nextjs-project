'use client';
import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(theme === 'dark');
    document.body.classList.toggle('dark-mode', theme === 'dark');
    document.body.classList.toggle('light-mode', theme === 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-mode', !isDarkMode);
    document.body.classList.toggle('light-mode', isDarkMode);
  };
  return (
    <>
      <button
        onClick={toggleTheme}
        className={clsx({ 'dark-mode': isDarkMode, 'ligh-mode': !isDarkMode })}
      >
        Toggle Theme
      </button>
    </>
  );
};
export default ThemeToggle;
