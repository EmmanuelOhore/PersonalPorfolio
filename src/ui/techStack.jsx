import { techStack } from "../constants";
const TechStack = () => {
  return (
    <section className=" w-[70%] p-4 mx-auto grid grid-cols-5 grid-rows-2 gap-5">
      {techStack.map((item, index) => {
        return (
          <div
            data-aos="fade-left"
            data-aos-delay={index * 50}
            key={index}
            className=" w-[9.5rem] z-20 relative flex justify-center group  bg-slate-800/50 flex-col gap-4 items-center h-[10rem] rounded-2xl cursor-pointer shadow-lg hover:scale-105 transition-all duration-300 "
          >
            <span className="bg-gradient-to-t from-cyan-500 to-cyan-800 absolute  rounded-full inset-8 translate-y-[-21%] translate-x-[-5%] opacity-0 blur-lg group-hover:opacity-80 transition-all duration-500"></span>
            <img src={item.icons} alt="html" className="w-[5rem] z-30" />
            <h1 className="text-[16px] leadng-[24px] font-bold text-[#838996] uppercase group-hover:text-white transition-all duration-500">
              {item.Language}
            </h1>
          </div>
        );
      })}
    </section>
  );
};

export default TechStack;
