'use client';
import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { icons } from '@/utils/icons';

const { IoMoon, IoSunny } = icons;

const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'dark';
    setIsLightMode(theme === 'light');
    document.body.classList.toggle('light-mode', theme === 'light');
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isLightMode ? 'light' : 'dark';
    setIsLightMode(!isLightMode);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('dark-mode', !isLightMode);
    document.body.classList.toggle('light-mode', isLightMode);
  };
  return (
    <>
      <button
        onClick={toggleTheme}
        className={clsx({
          'dark-mode': !isLightMode,
          'light-mode': isLightMode,
        })}
      >
        {isLightMode ? <IoSunny size={30} /> : <IoMoon size={30} />}
      </button>
    </>
  );
};
export default ThemeToggle;
