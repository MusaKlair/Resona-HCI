"use client";
import React from 'react';

interface OrbitalLogoProps {
  className?: string;
}

const OrbitalLogo: React.FC<OrbitalLogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Orbits - 4 balanced ellipses for a perfect 8-petal symmetrical look */}
      <g stroke="#0A1128" strokeWidth="2.5" opacity="0.9">
        {/* Horizontal */}
        <ellipse cx="50" cy="50" rx="46" ry="16" />
        {/* Vertical */}
        <ellipse cx="50" cy="50" rx="46" ry="16" transform="rotate(90 50 50)" />
        {/* Diagonal 45 */}
        <ellipse cx="50" cy="50" rx="46" ry="16" transform="rotate(45 50 50)" />
        {/* Diagonal 135 */}
        <ellipse cx="50" cy="50" rx="46" ry="16" transform="rotate(135 50 50)" />
      </g>
      {/* Nucleus */}
      <circle cx="50" cy="50" r="11" fill="#EE7052" />
    </svg>
  );
};

export default OrbitalLogo;
