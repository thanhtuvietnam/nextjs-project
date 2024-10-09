'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
export const TextHoverEffect = ({ text, className }) => {
  const svgRef = useRef(null);
  // const iPosition = text.indexOf('i') / text.length;
  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 180 50"
      // viewBox="0 0 100 30"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
      // className="select-none w-full h-full"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="90%"
          // x2="100%"
          y2="0%"
        >
          {/* Màu 1: Vàng */}
          <stop offset="0%" stopColor="var(--gradient-color-1)">
            <animate
              attributeName="offset"
              values="-1;1;-1"
              // values="-0.5;1.5;-0.5"
              dur="5s" // Thời gian hoàn thành một chu kỳ animation
              repeatCount="indefinite"
            />
          </stop>
          {/* Màu 2: Đỏ */}
          <stop offset="25%" stopColor="var(--gradient-color-2)">
            <animate
              attributeName="offset"
              values="-0.75;1.25;-0.75"
              // values="-0.25;1.75;-0.25"
              dur="5s" // Thời gian hoàn thành một chu kỳ animation
              repeatCount="indefinite"
            />
          </stop>
          {/* Màu 3: Xanh dương */}
          <stop offset="50%" stopColor="var(--gradient-color-3)">
            <animate
              attributeName="offset"
              values="-0.5;1.5;-0.5"
              // values="0;2;0"
              dur="5s" // Thời gian hoàn thành một chu kỳ animation
              repeatCount="indefinite"
            />
          </stop>
          {/* Màu 4: Xanh lam */}
          <stop offset="75%" stopColor="var(--gradient-color-4)">
            <animate
              attributeName="offset"
              values="-0.25;1.75;-0.25"
              // values="0.25;2.25;0.25"
              dur="5s" // Thời gian hoàn thành một chu kỳ animation
              repeatCount="indefinite"
            />
          </stop>
          {/* Màu 5: Tím */}
          <stop offset="100%" stopColor="var(--gradient-color-5)">
            <animate
              attributeName="offset"
              values="0;2;0"
              // values="0.5;2.5;0.5"
              dur="5s" // Thời gian hoàn thành một chu kỳ animation
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <motion.text
        x="0"
        y="50%"
        textAnchor="start"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className={`${className} responsive-text`}
        initial={{
          strokeDashoffset: 1000,
          strokeDasharray: 1000,
          fill: 'url(#textGradient)',
          fillOpacity: 0,
          stroke: 'url(#textGradient)',
        }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
          fill: 'url(#textGradient)',
          fillOpacity: 1,
          stroke: 'url(#textGradient)',
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
      >
        {text.split('').map((char, index) => (
          <tspan key={index} fill="url(#textGradient)" dx="0" dy="0">
            {char}
          </tspan>
        ))}
      </motion.text>
    </svg>
  );
};
TextHoverEffect.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
