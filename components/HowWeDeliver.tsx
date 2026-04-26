"use client";
const steps = [
  {
    number: "1",
    title: "Skill Gap Analysis",
    description: "Assess team skill gaps and developmental needs through our proprietary evaluation framework.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    number: "2",
    title: "Customized Training Plan",
    description: "Create a tailored roadmap addressing organizational goals and specific team requirements.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: "3",
    title: "Flexible Program Delivery",
    description: "Deliver adaptable programs aligned with industry standards and organizational project timelines.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  }
];

const HowWeDeliver = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#E8F1FE_1px,transparent_1px)] [background-size-[40px_40px] opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            How We <span className="text-[#1A73E8]">Deliver Results</span>
          </h2>
          <p className="text-[#1A73E8] text-sm md:text-base font-bold tracking-[0.2em] uppercase">
            A Structured Three-Step Approach to Skill Development
          </p>
        </div>

        <div className="flex md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-12 md:pb-0 -mx-4 md:mx-0 px-4 md:px-0 snap-x snap-mandatory scroll-smooth hide-scrollbar relative">
          
          <div className="hidden md:block absolute top-[40%] left-[10%] right-[10%] h-0.5 bg-gray-100 -z-10" />

          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center group relative bg-[#F8FBFF] rounded-[2.5rem] p-10 pt-16 border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A73E8]/15 hover:-translate-y-2"
            >
              <div className="absolute top-6 left-10 w-10 h-10 border-2 border-gray-100 rounded-full flex items-center justify-center font-black text-gray-300 group-hover:border-[#1A73E8] group-hover:text-[#1A73E8] transition-all duration-500">
                {step.number}
              </div>
              <div className="absolute left-0 top-1/4 bottom-1/4 w-1.5 bg-[#1A73E8]/20 group-hover:bg-[#1A73E8] transition-all duration-500 rounded-r-full" />

              <div className="mb-8 relative mx-auto w-20 h-20">
                <div className="absolute inset-0 bg-[#E8F1FE] rounded-4xl rotate-45 group-hover:rotate-90 group-hover:bg-[#1A73E8] transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center text-[#1A73E8] group-hover:text-white transition-colors duration-700">
                  {step.icon}
                </div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-[#1A73E8] transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
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

export default HowWeDeliver;