import { Sparkles } from "lucide-react";

const Innovate = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="relative inline-block w-fit border-cyan-400 border p-2 px-4 rounded-[3rem] bg-gradient-to-r from-slate-100/10 to-cyan-400/10  z-10"
    >
      {/* Glow Effect */}
      <span className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 blur-md opacity-20 pointer-events-none"></span>
      {/* Gradient Text */}
      <span className="relative bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent flex gap-2">
        <Sparkles className="text-white" />
        Innovate with me
      </span>
    </div>
  );
};

export default Innovate;
