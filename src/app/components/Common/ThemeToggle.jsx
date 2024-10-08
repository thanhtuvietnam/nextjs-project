'use client';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '@/lib/features/theme/theme.slice';
import { icons } from '@/utils/icons';
import { clsx } from 'clsx';

const { IoMoon, IoSunny } = icons;

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme') || 'dark';
    dispatch(setTheme(storedTheme));
  }, [dispatch]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
      applyTheme(theme);
    }
  }, [theme, mounted]);

  const applyTheme = currentTheme => {
    if (typeof document !== 'undefined') {
      document.body.classList.remove('light-mode', 'dark-mode');
      document.body.classList.add(`${currentTheme}-mode`);

      const header = document.querySelector('header');
      if (header) {
        header.classList.remove('light-head', 'dark-head');
        header.classList.add(`${currentTheme}-head`);
      }
      const lineEffect = document.querySelector('.line-effect');
      if (lineEffect) {
        lineEffect.classList.remove('light-line', 'dark-line');
        lineEffect.classList.add(`${currentTheme}-line`);
      }
    }
  };

  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleToggleTheme}
      className={clsx({
        'dark-mode': theme === 'dark',
        'light-mode': theme === 'light',
      })}
    >
      {theme === 'light' ? <IoMoon size={30} /> : <IoSunny size={30} />}
    </button>
  );
};

export default ThemeToggle;
