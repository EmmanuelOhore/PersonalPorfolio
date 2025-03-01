import { useState } from "react";
import Projects from "../ui/projects";
import TechStack from "../ui/techStack";
import Services from "../ui/services";

const PortfolioProjects = () => {
  const [selected, setselcted] = useState("Projects");
  const handlechange = (text) => {
    selected === text ? setselcted(null) : setselcted(text);
  };
  const navData = [
    {
      id: 1,
      icon: "fa-code",
      text: "Projects",
    },
    {
      id: 2,
      icon: "fa-server",
      text: "Services",
    },
    {
      id: 3,
      icon: "fa-cubes",
      text: "Techstack",
    },
  ];
  return (
    <section className="flex flex-col items-center  mt-10 phoneL:px-2  phoneL:mt-7 phoneP:mt-5 ">
      <nav className="border border-1 border-gray-500/40 flex w-[80%] rounded-[1rem] overflow-hidden laptop:w-[90%] tablet:w-[95%] phoneL:w-[100%] phoneP:rounded-[.5rem]">
        <ul className="  w-full py-2 px-4 gap-4  flex justify-between laptop:px-3 laptop:gap-3 tablet:gap-2 phoneL:p-2 phoneP:gap-1 phoneP:p-1.5">
          {navData.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => handlechange(`${item.text}`)}
                className=" relative overflow-hidden group  flex-1 h-[6rem] rounded-[1rem] flex flex-col gap-1 justify-center items-center laptop:h-[5rem] tablet:h-[4rem] phoneL:h-[3rem] phoneP:h-[2.5rem] phoneL:rounded-[.5rem] phoneP:gap-0"
              >
                <span
                  className={` ${
                    item.text === selected ? "opacity-40" : "opacity-0"
                  } absolute  inset-0 bg-gradient-to-l  from-white via-cyan-800 to-cyan-600 group-hover:opacity-10 transition-all duration-500`}
                ></span>
                <i
                  className={` ${
                    item.text === selected ? "text-cyan-500 " : "text-[#838996]"
                  } fa-solid ${
                    item.icon
                  } text-[15px]  group-hover:text-cyan-500 laptop:text-[15px] tablet:text-[13px]  phoneL:text-[11px] phoneP:text-[9px] `}
                ></i>{" "}
                <p
                  className={`${
                    item.text === selected ? "text-white " : "text-[#838996]"
                  } text-[16px] capitalize font-normal group-hover:text-white z-20 laptop:text-[14px] tablet:text-[13px] phoneL:text-[11px] phoneP:text-[9px]`}
                >
                  {item.text}
                </p>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* porflion and other stuff */}
      <div className="mt-10 w-full">
        {selected === "Projects" ? (
          <Projects />
        ) : selected === "Services" ? (
          <Services />
        ) : selected === "Techstack" ? (
          <TechStack />
        ) : null}
      </div>
    </section>
  );
};

export default PortfolioProjects;
