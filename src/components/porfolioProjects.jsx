import { useState } from "react";
import Projects from "../ui/projects";
import TechStack from "../ui/techStack";

const Certificates = () => <h1 className="text-white">Certificates Section</h1>;
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
      icon: "fa-award",
      text: "Certificates",
    },
    {
      id: 3,
      icon: "fa-cubes",
      text: "Techstack",
    },
  ];
  return (
    <section className="flex flex-col items-center  mt-10  ">
      <nav className="border border-1 border-gray-500/40 flex w-[80%] rounded-[1rem] overflow-hidden">
        <ul className="  w-full py-2 px-4 gap-4  flex justify-between">
          {navData.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => handlechange(`${item.text}`)}
                className=" relative overflow-hidden group  flex-1 h-[6rem] rounded-[1rem] flex flex-col gap-1 justify-center items-center"
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
                  } text-[15px]  group-hover:text-cyan-500  `}
                ></i>{" "}
                <p
                  className={`${
                    item.text === selected ? "text-white " : "text-[#838996]"
                  } text-[16px] capitalize font-normal group-hover:text-white z-20`}
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
        ) : selected === "Certificates" ? (
          <Certificates />
        ) : selected === "Techstack" ? (
          <TechStack />
        ) : null}
      </div>
    </section>
  );
};

export default PortfolioProjects;
