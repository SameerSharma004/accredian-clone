import React, { useState } from 'react';
import Image from 'next/image';
import { TestimonialProps } from '@/types/testimonials';

const testimonials = [
  {
    logo: "/adp.svg",
    name: "ADP",
    quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication.",
    author: "Enterprise Solutions Team"
  },
  {
    logo: "/bayer.svg",
    name: "Bayer",
    quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded.",
    author: "Global Operations Lead"
  },
  {
    logo: "/ibm.svg",
    name: "IBM",
    quote: "The pedagogical approach and the depth of industry knowledge at Accredian are truly world-class. A transformative experience for our workforce.",
    author: "L&D Director"
  },
  {
    logo: "/crif.png",
    name: "CRIF",
    quote: "Strategic partnership with Accredian has allowed us to bridge the skills gap effectively. Highly recommended for executive education.",
    author: "Operation Strategy Head"
  }
];

const TestimonialCard = ({ logo, name, quote, author, isActive }: TestimonialProps & { isActive: boolean }) => {
  return (
    <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${
      isActive ? "opacity-100 translate-x-0 scale-100 z-10" : "opacity-0 translate-x-12 scale-95 -z-10"
    }`}>
      <div className="h-full group bg-white rounded-[2.5rem] p-10 md:p-14 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#1A73E8]/10 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute -top-6 -right-6 text-gray-50 opacity-10 group-hover:opacity-20 transition-opacity">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L14.017 3H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3L3.017 3H10.017V15C10.017 18.3137 7.33072 21 4.017 21H3.017Z" />
          </svg>
        </div>
        <div className="space-y-8 relative z-10">
          <div className="relative w-24 h-12 grayscale group-hover:grayscale-0 transition-all duration-500">
            <Image
              src={logo}
              alt={`${name} logo`}
              fill
              className="object-contain object-left"
            />
          </div>

          <p className="text-xl md:text-3xl font-black text-gray-900 leading-tight italic">
            "{quote}"
          </p>
        </div>

        <div className="mt-10 flex items-center gap-4 relative z-10">
          <div className="w-12 h-1.5 bg-[#1A73E8] rounded-full" />
          <span className="text-sm font-black uppercase tracking-widest text-[#1A73E8]">
            {author}
          </span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-[#F8FBFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
              Partner <span className="text-[#1A73E8]">Stories</span>
            </h2>
            <p className="text-lg text-gray-500 font-bold uppercase tracking-[0.2em]">
              Trusted by <span className="text-[#1A73E8]">Global Leaders</span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={prev}
              className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#1A73E8] hover:border-[#1A73E8]/30 hover:shadow-xl transition-all active:scale-95 group"
            >
              <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={next}
              className="w-16 h-16 rounded-2xl bg-[#1A73E8] text-white flex items-center justify-center hover:bg-blue-700 hover:shadow-2xl hover:shadow-[#1A73E8]/40 transition-all active:scale-95 group shadow-xl shadow-[#1A73E8]/20"
            >
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative h-[450px] md:h-[400px]">
          {testimonials.map((testi, idx) => (
            <TestimonialCard 
              key={idx} 
              {...testi} 
              isActive={idx === activeIndex} 
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === activeIndex ? "w-10 bg-[#1A73E8]" : "w-3 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;