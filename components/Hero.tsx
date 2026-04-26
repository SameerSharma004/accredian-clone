"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroProps } from "@/types/hero";

const Hero = ({ onEnquire }: HeroProps) => {
  const benefits = [
    "Expert-led sessions",
    "In-house training",
    "Customized for you",
  ];

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#E8F1FE] rounded-full blur-[140px] -z-10 opacity-60 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-40" />
      
      <div className="absolute inset-0 bg-[radial-gradient(#1A73E8_0.5px,transparent_0.5px)] [background-size-[32px_32px] opacity-[0.03] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-6">

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 leading-[0.95]">
                Unlock <span className="text-[#1A73E8]">Enterprise</span> <br />
                Potential with <span className="relative inline-block text-[#1A73E8]">
                  Expertise
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#E8F1FE] -z-10" />
                </span>
              </h1>

              <p className="text-xl text-gray-500 font-bold max-w-xl leading-relaxed">
                Empower your workforce with custom learning solutions designed for the <span className="text-gray-900">global enterprise scale.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <button
                onClick={onEnquire}
                className="w-full sm:w-auto px-10 py-5 bg-[#1A73E8] text-white rounded-2xl font-black text-lg tracking-widest uppercase hover:bg-blue-700 transition-all shadow-[0_20px_50px_rgba(26,115,232,0.3)] hover:shadow-[0_20px_60px_rgba(26,115,232,0.4)] active:scale-95 flex items-center justify-center gap-3 group"
              >
                Enquire Now
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            <div className="pt-8 flex items-center gap-8 border-t border-gray-100">
              <div>
                <p className="text-2xl font-black text-gray-900">10k+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Enrolled</p>
              </div>
              <div className="w-px h-10 bg-gray-100" />
              <div>
                <p className="text-2xl font-black text-gray-900">500+</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Companies</p>
              </div>
              <div className="w-px h-10 bg-gray-100" />
              <div>
                <p className="text-2xl font-black text-gray-900">4.9/5</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Rating</p>
              </div>
            </div>
          </div>
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-50/50 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-blue-50/30 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

            <div className="relative z-10 w-full aspect-square md:aspect-auto md:h-[600px] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] group">
              <Image
                src="/hero-image.png"
                alt="Accredian Training Excellence"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-tr from-[#1A73E8]/20 to-transparent" />
            </div>

            <div className="absolute -top-10 -right-10 p-6 bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl animate-bounce-slow z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-black text-gray-900">Active Talent</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Bridging skill gaps</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 p-6 bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl animate-bounce-slow-reverse z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-[#1A73E8]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-black text-gray-900">Fast Growth</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ROI Driven Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
