// src/components/ParallaxHorizontal.jsx
import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const ParallaxHorizontal = () => {
  return (
    <ParallaxProvider>
      <div>
        {/* Container für den Parallax-Effekt */}
        <div className="h-screen bg-gray-100 flex items-center justify-center">
          {/* Erste Box - bewegt sich nach links */}
          <Parallax translateX={[-50, 50]}>
            <div className="bg-blue-500 text-white p-8 shadow-lg w-1/3 text-center">
              <h2 className="text-xl font-bold">Bewegt sich nach links</h2>
              <p>Diese Box bewegt sich horizontal nach links.</p>
            </div>
          </Parallax>

          {/* Zweite Box - bewegt sich nach rechts */}
          <Parallax translateX={[50, -50]}>
            <div className="bg-red-500 text-white p-8 shadow-lg w-1/3 text-center ml-8">
              <h2 className="text-xl font-bold">Bewegt sich nach rechts</h2>
              <p>Diese Box bewegt sich horizontal nach rechts.</p>
            </div>
          </Parallax>
        </div>

        {/* Normaler Inhalt */}
        <div className="p-16 text-center bg-gray-200">
          <p className="text-lg">
            Hier bewegen sich zwei Boxen horizontal (seitwärts), wenn du scrollst.
          </p>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxHorizontal;
