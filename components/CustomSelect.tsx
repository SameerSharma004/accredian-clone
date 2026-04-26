"use client";

import React, { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const CustomSelect = ({
  options,
  placeholder,
  label,
  value,
  onChange,
  required,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-1.5 relative w-full" ref={containerRef}>
      <label className="text-[10px] font-black uppercase tracking-widest text-[#1A73E8] ml-1">
        {label} {required && "*"}
      </label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-gray-50 border-2 rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between transition-all duration-300 ${
          isOpen ? "border-[#1A73E8] bg-white shadow-lg shadow-blue-50" : "border-gray-100"
        }`}
      >
        <span className={`font-bold text-sm sm:text-base truncate mr-2 ${selectedOption ? "text-gray-900" : "text-gray-400"}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180 text-[#1A73E8]" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-110 left-0 right-0 mt-2 p-2 bg-white border border-gray-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] animate-in fade-in zoom-in-95 duration-200 overflow-hidden max-h-60 sm:max-h-64 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 gap-1">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3.5 sm:py-3 rounded-xl font-bold text-sm transition-all duration-200 active:scale-[0.98] ${
                  value === option.value
                    ? "bg-[#1A73E8] text-white"
                    : "text-gray-600 hover:bg-[#F8FBFF] hover:text-[#1A73E8]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default CustomSelect;
