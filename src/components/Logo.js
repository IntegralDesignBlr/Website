import React from 'react';

const Logo = ({ size = 38 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="StealthAI Logo">
    <circle cx="24" cy="24" r="22" stroke="#00cec8" strokeWidth="4" fill="#0e2235"/>
    <path d="M18 24L24 12L30 24" stroke="#10e37f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="20" y="26" width="8" height="10" rx="2" fill="#02aab0"/>
  </svg>
);

export default Logo;
