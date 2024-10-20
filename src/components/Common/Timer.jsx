'use client';
import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      setTimer(Math.floor(Date.now() - startTime) / 1000);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>Time spend on this page: {timer}</div>;
};

export default Timer;
