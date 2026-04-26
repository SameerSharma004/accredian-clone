"use client";

import { useEffect, useRef, useState } from "react";

const TrackRecordItem = ({
  number,
  title,
  description,
  reverse,
}: {
  number: string;
  title: string;
  description: string;
  reverse: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.2 },
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`flex flex-col md:flex-row items-center justify-between gap-12 py-16 md:py-24 border-b border-gray-100 last:border-0 ${reverse ? "md:flex-row-reverse" : ""}`}
    >
      <div
        className={`flex-1 text-center transition-all duration-1000 ease-out transform ${
          isVisible
            ? "translate-x-0 opacity-100"
            : `${reverse ? "translate-x-32" : "-translate-x-32"} opacity-0`
        }`}
      >
        <div className="bg-[#E8F1FE] inline-block px-12 py-6 rounded-4xl shadow-sm">
          <p className="text-[#1A73E8] text-5xl md:text-7xl font-black">
            {number}
          </p>
        </div>
      </div>

      <div
        className={`flex-1 transition-all duration-1000 ease-out transform delay-300 ${
          isVisible
            ? "translate-x-0 opacity-100"
            : `${reverse ? "-translate-x-32" : "translate-x-32"} opacity-0`
        }`}
      >
        <div
          className={`space-y-4 ${reverse ? "text-left md:text-right" : "text-left"}`}
        >
          <h3 className="text-3xl md:text-5xl font-black text-[#1A202C] leading-tight">
            {title}
          </h3>
          <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed max-w-xl">
            {description}
          </p>
          <div className={`pt-4 ${reverse ? "flex md:justify-end" : ""}`}>
            <div className="w-20 h-1.5 bg-[#1A73E8] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

const TrackRecord = () => {
  const data = [
    {
      number: "10K+",
      title: "Professionals Trained",
      description:
        "Exceptional career success starts with industry-leading training programs designed for modern enterprises.",
    },
    {
      number: "200+",
      title: "Sessions Delivered",
      description:
        "Unmatched learning excellence through thousands of hours of high-impact mentoring and curriculum delivery.",
    },
    {
      number: "5K+",
      title: "Active Learners",
      description:
        "Engaged in dynamic courses that adapt to real-world challenges, fostering a culture of continuous growth.",
    },
  ];

  return (
    <section id="stats" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Our <span className="text-[#1A73E8]">Track Record</span>
          </h2>
          <p className="text-lg text-[#1A73E8] font-bold tracking-widest uppercase">
            The Numbers Behind Our Success
          </p>
        </div>

        <div className="flex flex-col">
          {data.map((item, index) => (
            <TrackRecordItem key={index} {...item} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
