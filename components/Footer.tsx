"use client";
import Link from "next/link";
import { FooterProps } from "@/types/footer";

const socialLinks = [
  {
    name: "Facebook",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    href: "#",
  },
  {
    name: "Twitter",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    href: "#",
  },
  {
    name: "Instagram",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.584-.069 4.849c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.011-4.849-.07c-3.264-.149-4.771-1.667-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.0 -4.849.07 1.265-.069 1.645-.069 4.849-.148-3.245-1.664-4.771-4.919-4.919-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    href: "#",
  },
];

const Footer = ({ onEnquire }: FooterProps) => {
  return (
    <footer className="bg-[#0F172A] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1A73E8]/10 rounded-full blur-[120px] -z-10 translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-16 border-b border-white/10">
          <div className="space-y-6">
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex flex-col">
                <span className="text-white font-black text-3xl md:text-4xl tracking-tighter transition-transform group-hover:scale-[1.02]">
                  accredian
                </span>
                <span className="text-[#1A73E8] text-[10px] font-black uppercase tracking-[0.4em] mt-1">
                  credentials that matter
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-5">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-[#1A73E8] hover:scale-110 hover:shadow-lg hover:shadow-[#1A73E8]/40 group"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
            <button
              onClick={onEnquire}
              className="bg-[#1A73E8] text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-white hover:text-[#1A73E8] transition-all shadow-xl shadow-[#1A73E8]/20 hover:shadow-[#1A73E8]/40 active:scale-95 leading-none w-full md:w-auto text-center"
            >
              Enquire Now
            </button>
            <p className="text-gray-400 text-sm font-bold tracking-tight">
              Speak with our <span className="text-white">Expert Advisor</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          <div className="space-y-6 col-span-2">
            <h4 className="text-lg font-black text-[#1A73E8] uppercase tracking-widest">
              Accredian
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white font-bold transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white font-bold transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/why"
                  className="text-gray-400 hover:text-white font-bold transition-colors"
                >
                  Why Accredian
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-lg font-black text-[#1A73E8] uppercase tracking-widest">
              Contact Us
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1A73E8]/10 flex items-center justify-center shrink-0 text-[#1A73E8]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">
                    Email Support
                  </p>
                  <a
                    href="mailto:enterprise@accredian.com"
                    className="text-lg md:text-xl font-black text-white hover:text-[#1A73E8] transition-colors"
                  >
                    enterprise@accredian.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#1A73E8]/10 flex items-center justify-center shrink-0 text-[#1A73E8]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">
                    Office Headquarters
                  </p>
                  <p className="text-gray-400 font-bold leading-relaxed max-w-sm">
                    4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram,
                    Haryana, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-bold tracking-tight text-center md:text-left">
            © 2026 Accredian. A Brand of{" "}
            <span className="text-gray-400">FullStack Education Pvt Ltd</span>.
            All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
