"use client";

import React, { useState } from "react";
import { FAQProps, FAQItemProps, FAQData } from "@/types/faq";

const faqCategories = [
  { id: "course", name: "About the Course" },
  { id: "delivery", name: "About the Delivery" },
  { id: "misc", name: "Miscellaneous" },
];

const faqData: FAQData = {
  course: [
    {
      question:
        "What types of corporate training programs does Accredian offer?",
      answer:
        "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
    },
    {
      question: "What domain specializations are available?",
      answer:
        "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
    },
  ],
  delivery: [
    {
      question: "Can the courses be customized for specific industries or teams?",
      answer:
        "Absolutely! Our programs are fully customizable, including content, format, timing, and industry-specific focus, to align with your organization’s goals.",
    },
    {
      question: "Who are the instructors for these programs?",
      answer:
        "Our courses are delivered by industry leaders, experienced mentors, and domain experts with real-world insights.",
    },
    {
      question: "What format are the programs delivered in?",
      answer:
        "Programs can be delivered in various formats, including online, offline, hybrid, and on-demand, based on your team's preferences and requirements.",
    },
  ],
  misc: [
    {
      question: "What is the ideal team size for corporate training?",
      answer:
        "Our programs are flexible and can cater to teams of any size, from small groups to large organizational cohorts.",
    },
    {
      question: "How do we get started with Accredian?",
      answer:
        "Get started with Accredian by contacting us or requesting a quote on our website. Our team will guide you through the process—from skill gap analysis to a custom program tailored to your needs.",
    },
  ],
};

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="mb-4 border-b border-gray-100 pb-4 transition-all overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4 text-left group gap-4"
      >
        <span
          className={`text-lg font-bold transition-colors ${isOpen ? "text-[#1A73E8]" : "text-gray-900"} group-hover:text-[#1A73E8]`}
        >
          {question}
        </span>
        <div
          className={`w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 transition-all ${isOpen ? "bg-[#1A73E8] border-[#1A73E8] rotate-180" : "bg-white"}`}
        >
          <svg
            className={`w-4 h-4 transition-colors ${isOpen ? "text-white" : "text-gray-500"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-2 mb-4" : "max-h-0 opacity-0"}`}
      >
        <p className="text-gray-500 font-medium leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = ({ onEnquire }: FAQProps) => {
  const [activeCategory, setActiveCategory] = useState("course");
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8F1FE]/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Frequently Asked <span className="text-[#1A73E8]">Questions</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#1A73E8] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4 pt-4">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenItemIndex(0);
                }}
                className={`w-full text-left p-6 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#1A73E8] text-white shadow-xl shadow-[#1A73E8]/30 scale-[1.02]"
                    : "bg-white text-gray-400 border border-gray-100 hover:border-[#1A73E8]/30 hover:text-gray-900 shadow-sm"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 bg-white/50 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm">
            {faqData[activeCategory as keyof typeof faqData].map(
              (item, idx) => (
                <FAQItem
                  key={idx}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openItemIndex === idx}
                  onClick={() =>
                    setOpenItemIndex(openItemIndex === idx ? null : idx)
                  }
                />
              ),
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={onEnquire}
            className="bg-[#1A73E8] text-white px-12 py-4 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-[#1A73E8]/40 transition-all hover:-translate-y-1 active:scale-95 shadow-xl shadow-[#1A73E8]/20">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
