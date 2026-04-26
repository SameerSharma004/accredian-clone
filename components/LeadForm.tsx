"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { LeadFormProps, LeadFormData } from "@/types/leadForm";
import CustomSelect from "./CustomSelect";
import { DOMAINS, DELIVERY_MODES } from "./DomainList";

const LeadForm = ({ onClose }: LeadFormProps) => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    deliveryMode: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setResponseMessage(data.message);
        setTimeout(() => {
          if (onClose) onClose();
        }, 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-0 sm:p-4 overflow-y-auto">
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />

      <div className="relative w-full max-w-5xl bg-white sm:rounded-4xl shadow-[0_32px_64px_rgba(0,0,0,0.2)] flex flex-col md:flex-row animate-in zoom-in-95 duration-300 min-h-screen sm:min-h-0">
        <div className="hidden md:block w-5/12 relative rounded-l-4xl overflow-hidden">
          <Image
            src="/hero-image.png"
            alt="Corporate Training"
            fill
            className="object-cover opacity-100"
          />
          <div className="absolute inset-0 p-12 flex flex-col justify-end text-white space-y-6">
            <h3 className="text-3xl font-black leading-tight">
              Transform Your <br />
              <span className="text-[#E8F1FE]">Workforce</span> Today.
            </h3>
            <p className="text-sm font-bold text-white/80 leading-relaxed uppercase tracking-widest">
              Join 500+ enterprises <br /> Scaling with Accredian.
            </p>
            <div className="w-16 h-1.5 bg-white rounded-full" />
          </div>
        </div>

        <div className="flex-1 p-6 sm:p-8 md:p-12 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 text-gray-400 hover:text-gray-900 transition-colors z-10 bg-gray-50 p-2 rounded-full sm:bg-transparent sm:p-0"
          >
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {!success ? (
            <div className="max-w-md mx-auto space-y-6 sm:space-y-8">
              <div className="space-y-1 mt-4 sm:mt-0">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                  Enquire Now
                </h2>
                <p className="text-[10px] sm:text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Fill in the details to get started
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1A73E8] ml-1">
                      Enter Name
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 focus:border-[#1A73E8] focus:bg-white outline-none transition-all font-bold text-gray-900 text-sm sm:text-base"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1A73E8] ml-1">
                      Enter Email
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 focus:border-[#1A73E8] focus:bg-white outline-none transition-all font-bold text-gray-900 text-sm sm:text-base"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#1A73E8] ml-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                      <span className="text-lg sm:text-xl">🇮🇳</span>
                      <span className="text-gray-400 font-bold text-sm sm:text-base">
                        +91
                      </span>
                    </div>
                    <input
                      required
                      name="phone"
                      type="tel"
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl pl-16 sm:pl-20 pr-4 sm:pr-5 py-3 sm:py-4 focus:border-[#1A73E8] focus:bg-white outline-none transition-all font-bold text-gray-900 text-sm sm:text-base"
                      placeholder="98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#1A73E8] ml-1">
                    Company Information
                  </label>
                  <input
                    required
                    name="company"
                    type="text"
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 focus:border-[#1A73E8] focus:bg-white outline-none transition-all font-bold text-gray-900 text-sm sm:text-base"
                    placeholder="Enter company name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1A73E8] ml-1">
                      No. of candidates
                    </label>
                    <input
                      name="candidates"
                      type="number"
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 focus:border-[#1A73E8] focus:bg-white outline-none transition-all font-bold text-gray-900 text-sm sm:text-base"
                      placeholder="e.g. 50"
                    />
                  </div>
                  <div className="space-y-1.5 overflow-visible">
                    <CustomSelect
                      label="Select Domain"
                      placeholder="Choose Domain"
                      options={DOMAINS}
                      value={formData.domain}
                      onChange={(val) => handleSelectChange("domain", val)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-1.5 overflow-visible">
                    <CustomSelect
                      label="Mode of Delivery"
                      placeholder="Select Mode"
                      options={DELIVERY_MODES}
                      value={formData.deliveryMode}
                      onChange={(val) =>
                        handleSelectChange("deliveryMode", val)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#1A73E8] ml-1">
                      Location
                    </label>
                    <input
                      name="location"
                      type="text"
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl px-4 py-3 sm:px-5 sm:py-4 focus:border-[#1A73E8] focus:bg-white outline-none transition-all font-bold text-gray-900 text-sm sm:text-base"
                      placeholder="e.g. Gurgaon, Delhi, India"
                    />
                  </div>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className="w-full bg-[#1A73E8] text-white py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg tracking-widest uppercase hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 sm:w-6 sm:h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="min-h-[400px] sm:h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-in zoom-in duration-500">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
                  Thank You!
                </h2>
                <p className="text-gray-500 font-bold px-4">
                  {responseMessage || "Your inquiry has been received."}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
