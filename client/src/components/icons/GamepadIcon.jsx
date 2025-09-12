import React from 'react';
import { motion } from 'framer-motion';

const GamepadIcon = ({ size = 24, className = "" }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <path
        d="M7 6C5.34315 6 4 7.34315 4 9V15C4 16.6569 5.34315 18 7 18H8.5C9.32843 18 10 17.3284 10 16.5V15.5C10 14.6716 10.6716 14 11.5 14H12.5C13.3284 14 14 14.6716 14 15.5V16.5C14 17.3284 14.6716 18 15.5 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6H7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="8" cy="10" r="1" fill="currentColor" />
      <circle cx="16" cy="10" r="1" fill="currentColor" />
      <path
        d="M6 12H10M8 10V14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="12" r="0.5" fill="currentColor" />
      <circle cx="18" cy="10" r="0.5" fill="currentColor" />
    </motion.svg>
  );
};

export default GamepadIcon;
