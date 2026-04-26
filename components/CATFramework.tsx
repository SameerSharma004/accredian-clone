"use client";

import React from 'react';
import Image from 'next/image';

const CATFramework = () => {
  return (
    <section id="cat" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#1A73E8]/5 rounded-full blur-[80px] -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#1A73E8]/5 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            The <span className="text-[#1A73E8]">CAT</span> Framework
          </h2>
          <p className="text-[#1A73E8] text-sm md:text-base font-bold tracking-[0.2em] uppercase">
            Our Proven Approach to Learning Excellence
          </p>
        </div>

        <div className="relative group perspective-1000">
          <div className="relative w-full aspect-16/6 md:aspect-21/7 max-w-5xl mx-auto transition-all duration-700 group-hover:scale-[1.02] group-hover:drop-shadow-[0_20px_50px_rgba(26,115,232,0.15)]">
            <Image
              src="/catV2.svg"
              alt="CAT Framework: Concept, Application, Tools"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute inset-0 flex justify-between px-[10%] md:px-[15%] items-center pointer-events-none">
          </div>
        </div>
      </div>
    </section>
  );
};

export default CATFramework;