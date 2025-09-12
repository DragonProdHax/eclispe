import React from 'react';
import { motion } from 'framer-motion';

const BoltIcon = ({ size = 24, className = "" }) => {
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
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <motion.path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        fill="currentColor"
        opacity="0.2"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="12"
        cy="12"
        r="1"
        fill="currentColor"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export default BoltIcon;
