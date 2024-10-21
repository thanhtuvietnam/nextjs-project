'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
function SideMenuBtn() {
  const [crossed, setCrossed] = useState(false);
  return (
    <button
      aria-expanded={crossed}
      onClick={() => setCrossed(e => !e)}
      className={
        'flex aspect-square h-fit select-none flex-col items-center justify-center rounded-full'
      }
    >
      <motion.div
        style={{
          width: '20px',
          borderTop: '2px solid white',
          transformOrigin: 'center',
        }}
        initial={{ translateY: '-3px' }}
        animate={
          crossed
            ? { rotate: '45deg', translateY: '1px' }
            : { translateY: '-3px', rotate: '0deg' }
        }
        transition={{ bounce: 0, duration: 0.1 }}
      />
      <motion.div
        transition={{ bounce: 0, duration: 0.1 }}
        style={{
          width: '20px',
          borderTop: '2px solid white',
          transformOrigin: 'center',
        }}
        initial={{ translateY: '3px' }}
        animate={
          crossed
            ? { rotate: '-45deg', translateY: '-1px' }
            : { translateY: '3px', rotate: '0deg', scaleX: 1 }
        }
      />
    </button>
  );
}
export default SideMenuBtn;
