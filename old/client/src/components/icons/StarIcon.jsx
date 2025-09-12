import React from 'react';
import { motion } from 'framer-motion';

const StarIcon = ({ size = 24, className = "" }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      whileHover={{ scale: 1.1, rotate: 15 }}
      transition={{ duration: 0.2 }}
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <motion.path
        d="M12 6L13.5 10.5L18 10.5L14.5 13.5L15.5 18L12 15L8.5 18L9.5 13.5L6 10.5L10.5 10.5L12 6Z"
        fill="currentColor"
        opacity="0.3"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export default StarIcon;
