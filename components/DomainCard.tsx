import { DomainCardProps } from "@/types/domainCard";

const DomainCard = ({ icon, title, className = "" }: DomainCardProps) => {
  return (
    <div
      className={`group relative bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1A73E8]/10 hover:-translate-y-2 cursor-pointer flex flex-col items-center justify-center gap-6 text-center ${className}`}
    >
      <div className="absolute inset-0 bg-[#1A73E8]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl -z-10" />

      <div className="w-16 h-16 bg-[#E8F1FE] text-[#1A73E8] rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-[#1A73E8] group-hover:text-white group-hover:scale-110 shadow-sm group-hover:shadow-lg group-hover:shadow-[#1A73E8]/30">
        {icon}
      </div>

      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#1A73E8] transition-colors">
        {title}
      </h3>

      <div className="w-12 h-1 bg-gray-100 rounded-full group-hover:w-20 group-hover:bg-[#1A73E8] transition-all duration-500" />
    </div>
  );
};

export default DomainCard;


