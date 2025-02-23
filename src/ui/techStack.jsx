import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import vite from "../assets/vite.png";
import tailwind from "../assets/tailwind.png";
const TechStack = () => {
  const techStack = [
    {
      icons: html,
      Language: "html",
    },
    {
      icons: css,
      Language: "css",
    },
    {
      icons: js,
      Language: "js",
    },
    {
      icons: react,
      Language: "react",
    },
    {
      icons: vite,
      Language: "vite",
    },
    {
      icons: tailwind,
      Language: "tailwind",
    },
    {
      icons: html,
      Language: "html",
    },
    {
      icons: html,
      Language: "html",
    },
    {
      icons: html,
      Language: "html",
    },
    {
      icons: html,
      Language: "html",
    },
    {
      icons: html,
      Language: "html",
    },
    {
      icons: html,
      Language: "html",
    },
  ];
  return (
    <section className=" w-[70%] p-4 mx-auto grid grid-cols-6 grid-rows-2 gap-5">
      {techStack.map((item, index) => {
        return (
          <div
            key={index}
            className=" w-[9.5rem] relative flex justify-center group z-20 bg-slate-800/50 flex-col gap-4 items-center h-[10rem] rounded-2xl cursor-pointer shadow-lg "
          >
            <span className="bg-gradient-to-t from-white to-cyan-500 absolute  rounded-full inset-8 translate-y-[-21%] translate-x-[-5%] opacity-0 blur-lg group-hover:opacity-80 transition-all duration-500"></span>
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
