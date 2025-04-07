import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0f2a] to-[#131a45] overflow-hidden">
      {/* SVG Circuit Overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 z-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="circuitPattern" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 30 H60 M30 0 V60" stroke="#3a3f73" strokeWidth="1" />
            <circle cx="30" cy="30" r="3" fill="#3a3f73" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuitPattern)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">MiroMate</h1>
        <p className="text-blue-300 text-xl max-w-2xl mx-auto">
          Custom AI-powered automation systems engineered for scale, speed, and results.
        </p>
      </div>
    </div>
  );
}
