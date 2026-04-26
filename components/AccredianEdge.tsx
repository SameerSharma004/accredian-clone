"use client";

import React from "react";
import Image from "next/image";

const AccredianEdge = () => {
  return (
    <section
      id="benefits"
      className="py-12 md:py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1A73E8_0.5px,transparent_0.5px)] [background-size-[24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            The <span className="text-[#1A73E8]">Accredian Edge</span>
          </h2>
          <p className="text-[#1A73E8] text-sm md:text-base font-bold tracking-[0.2em] uppercase">
            Key Aspects of Innovation Our Strategic Training
          </p>
        </div>

        <div className="hidden md:block relative w-full aspect-21/9 max-w-6xl mx-auto group">
          <div className="absolute inset-0 bg-[#E8F1FE]/30 rounded-full blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <Image
            src="/accredian-edge-usp-v3.svg"
            alt="The Accredian Edge Framework"
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            priority
          />
        </div>

        <div className="md:hidden relative w-full aspect-9/16 max-w-md mx-auto">
          <Image
            src="/accredian-edge-usp-mobile.svg"
            alt="Accredian Edge Framework Mobile"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AccredianEdge;
