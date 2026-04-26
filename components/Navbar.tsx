"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full font-sans transition-all duration-300">
      <div className="bg-[#1A73E8]/10 backdrop-blur-sm text-[#1A202C] py-2.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <p className="text-xs md:text-sm font-medium tracking-tight">
            Navigate your ideal career path with Accredian
          </p>
          <Link
            href="/refer"
            className="text-[#1A73E8] text-xs md:text-sm font-bold hover:underline underline-offset-4 decoration-2 transition-all flex items-center gap-1"
          >
            Refer Now
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div
        className={`bg-white transition-all duration-300 ${isScrolled ? "py-2 shadow-xl shadow-black/5" : "py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 md:h-14">
            <div className="flex items-center gap-6 lg:gap-10">
              <Link href="/" className="group flex items-center gap-2">
                <div className="flex flex-col">
                  <div className="flex items-center gap-0.5">
                    <span className="text-[#1A73E8] font-black text-xl md:text-2xl tracking-tighter transition-transform group-hover:scale-[1.02]">
                      accredian
                    </span>
                    <svg
                      className="w-4 h-4 mb-3 text-[#FFA000]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 3L1 9L12 15L23 9L12 3Z" />
                      <path
                        d="M23 9V15M12 15L23 9L12 3L1 9L12 15ZM12 15V21M12 15H12.01"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              {[
                { name: "Home", href: "#home" },
                { name: "Stats", href: "#stats" },
                { name: "Clients", href: "#clients" },
                { name: "Accredian Edge", href: "#benefits" },
                { name: "CAT", href: "#cat" },
                { name: "How It Works", href: "#process" },
                { name: "FAQs", href: "#faq" },
                { name: "Testimonials", href: "#testimonials" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-gray-600 hover:text-[#1A73E8] font-bold text-[10px] uppercase tracking-widest transition-all"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1A73E8] transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-900 p-2 hover:bg-gray-100 rounded-xl transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`lg:hidden fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-out transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[#1A73E8] font-black text-xl tracking-tighter">
                accredian
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "Stats", href: "#stats" },
                { name: "Clients", href: "#clients" },
                { name: "Accredian Edge", href: "#benefits" },
                { name: "CAT", href: "#cat" },
                { name: "How It Works", href: "#process" },
                { name: "FAQs", href: "#faq" },
                { name: "Testimonials", href: "#testimonials" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-4 rounded-2xl hover:bg-[#E8F1FE] hover:text-[#1A73E8] text-gray-900 font-black text-xs uppercase tracking-[0.2em] transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
