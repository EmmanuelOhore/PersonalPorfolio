import { Sparkles } from "lucide-react";

const Innovate = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="relative flex items-center w-fit border-cyan-400 border p-2 px-4 rounded-[3rem] bg-gradient-to-r from-slate-100/10 to-cyan-400/10  z-10 tablet:py-1 tablet:px-5 laptop:mb-4 phoneL:py-0.5 phoneL:px-4 phoneP:py-0 phoneP:mb-2"
    >
      {/* Glow Effect */}
      <span className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 blur-md opacity-20 pointer-events-none"></span>
      {/* Gradient Text */}
      <span className="relative bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent flex gap-2 laptop:text-[.8rem] items-center phoneL:text-[.7rem] phoneP:text-[.6rem]">
        <Sparkles className="text-white tablet:w-4 table:h-4 phoneL:w-3" />
        Innovate with me
      </span>
    </div>
  );
};

export default Innovate;
