"use client";
import Image from 'next/image';
import { CourseProps, CourseCardProps } from '@/types/course';

const CourseCard = ({ image, title, description, category, onEnquire }: CourseCardProps) => {
  return (
    <div className="group relative flex flex-col justify-between  bg-white rounded-[2.5rem] h-full overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A73E8]/10 hover:-translate-y-2">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-[#1A73E8] shadow-lg">
            {category}
          </span>
        </div>
      </div>

      <div className="p-8 space-y-4">
        <h3 className="text-2xl font-black text-gray-900 group-hover:text-[#1A73E8] transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-sm font-medium text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="p-8">
        <div className="pt-4 flex items-center gap-2 text-[#1A73E8] font-bold text-sm cursor-pointer group/link">
          Explore Courses
          <svg
            className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Course = ({ onEnquire }: CourseProps) => {
  const courseSegments = [
    {
      category: "Specialized",
      title: "Program Specific",
      description: "Certificate, Executive, and Post Graduate Programs tailored for academic and professional excellence.",
      image: "/courses/program.png"
    },
    {
      category: "Verticals",
      title: "Industry Specific",
      description: "IT, Healthcare, Retail, Finance, and Manufacturing focused curriculums for sector-specific mastery.",
      image: "/courses/industry.png"
    },
    {
      category: "Domains",
      title: "Topic Specific",
      description: "Machine Learning, Design, Analytics, Cybersecurity, and Cloud Computing deep-dives.",
      image: "/courses/topic.png"
    },
    {
      category: "Expertise",
      title: "Level Specific",
      description: "Customized learning paths for Senior Leadership, Mid-Career Professionals, and Freshers.",
      image: "/courses/level.png"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight">
            Tailored <span className="text-[#1A73E8]">Course Segmentation</span>
          </h2>
          <p className="text-[#1A73E8] text-sm md:text-base font-bold tracking-[0.2em] uppercase">
            Custom-fit Courses Designed for Every Career Stage
          </p>

          <button 
            onClick={onEnquire}
            className="mt-8 bg-[#1A73E8] text-white px-10 py-4 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-[#1A73E8]/40 transition-all active:scale-95 shadow-xl shadow-[#1A73E8]/20"
          >
            Enquire Now
          </button>
        </div>

        <div className="flex lg:grid lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto lg:overflow-x-visible pb-12 lg:pb-0 -mx-4 lg:mx-0 px-4 lg:px-0 snap-x snap-mandatory scroll-smooth hide-scrollbar">
          {courseSegments.map((segment, index) => (
            <div key={index} className="min-w-[85vw] sm:min-w-[60vw] lg:min-w-0 snap-center">
              <CourseCard {...segment} />
            </div>
          ))}
        </div>

        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Course;