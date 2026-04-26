"use client";

import React from "react";
import Image from "next/image";

const Partnerships = () => {
  const partners = [
    { name: "Reliance", logo: "/rel.png" },
    { name: "HCL", logo: "/hcl.png" },
    { name: "IBM", logo: "/ibm.png" },
    { name: "CRIF", logo: "/crif.png" },
    { name: "ADP", logo: "/adp.svg" },
    { name: "Bayer", logo: "/bayer.svg" },
  ];

  const allPartners = [...partners, ...partners];

  return (
    <section id="clients" className="py-20 bg-white overflow-hidden relative border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
          Our Trusted <span className="text-[#1A73E8]">Partnerships</span>
        </h2>
        <p className="text-[#1A73E8] text-sm md:text-base font-bold tracking-[0.2em] uppercase">
          Collaborating with Global leaders to deliver excellence
        </p>
      </div>

      <div className="md:hidden grid grid-cols-2 gap-x-8 gap-y-12 px-8 mb-12">
        {partners.map((partner, index) => (
          <div key={index} className="flex items-center justify-center h-12 relative opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <Image
              src={partner.logo}
              alt={`${partner.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="hidden md:block relative group/scroll">
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap py-8 items-center cursor-default group-hover/scroll:pause-animation">
            {allPartners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-12 md:mx-20 shrink-0"
              >
                <div className="relative w-32 md:w-40 h-10 md:h-12 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partnerships;
