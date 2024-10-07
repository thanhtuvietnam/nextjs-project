'use client';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
export const TextHoverEffect = ({ text }) => {
  const svgRef = useRef(null);
  //   const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' });
  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 200 50"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="var(--yellow-500)" />
          <stop offset="25%" stopColor="var(--red-500)" />
          <stop offset="50%" stopColor="var(--blue-500)" />
          <stop offset="75%" stopColor="var(--cyan-500)" />
          <stop offset="100%" stopColor="var(--violet-500)" />
        </linearGradient>
      </defs>
      <motion.text
        x="45%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-bold text-3xl stroke-[#0cc2ff]"
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
};
