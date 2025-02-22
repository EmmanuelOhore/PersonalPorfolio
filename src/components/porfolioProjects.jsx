import { useState } from "react";

const Projects = () => <h1 className="text-white">Projectes</h1>;
const Certificates = () => <h1 className="text-white">Certificates Section</h1>;
const TechStack = () => <h1 className="text-white">Tech Stack Section</h1>;
const PortfolioProjects = () => {
  const [selected, setselcted] = useState(null);
  const handlechange = (text) => {
    selected === text ? setselcted(null) : setselcted(text);
  };
  return (
    <section className="flex flex-col items-center  mt-10 ">
      <nav className="border border-1 border-gray-500/40 flex w-[80%] rounded-[1rem] overflow-hidden">
        <ul className="  w-full py-2 px-4  flex justify-between">
          <li
            to="projects"
            onClick={() => handlechange("projects")}
            className=" relative overflow-hidden group  flex-1 h-[6rem] rounded-[1rem] flex flex-col gap-1 justify-center items-center"
          >
            <span className="absolute  inset-0 bg-gradient-to-l  from-white via-cyan-800 to-cyan-600 opacity-0 group-hover:opacity-20 transition-all duration-500"></span>
            <i className="fa-solid fa-code text-[15px] text-[#838996] group-hover:text-cyan-500  "></i>{" "}
            <p className="text-[#838996] text-[16px] capitalize font-normal group-hover:text-white z-20">
              Projects
            </p>
          </li>

          <li
            onClick={() => handlechange("certificates")}
            className=" relative overflow-hidden group flex-1 h-[6rem] rounded-[1rem] flex flex-col gap-1 justify-center items-center"
          >
            <span className="absolute  inset-0 bg-gradient-to-l from-white via-cyan-800 to-cyan-600 opacity-0 group-hover:opacity-20 transition-all duration-500"></span>
            <i className="fa-solid fa-award text-[15px] text-[#838996] group-hover:text-cyan-500  "></i>{" "}
            <p className="text-[#838996] text-[16px] capitalize font-normal group-hover:text-white z-20">
              certificates
            </p>
          </li>
          <li
            onClick={() => handlechange("techstack")}
            className=" relative overflow-hidden group  flex-1 h-[6rem] rounded-[1rem] flex flex-col gap-1 justify-center items-center"
          >
            <span className="absolute  inset-0 bg-gradient-to-l from-white via-cyan-800 to-cyan-600 opacity-0 group-hover:opacity-20 transition-all duration-500"></span>
            <i className="fa-solid fa-cubes text-[15px] text-[#838996] group-hover:text-cyan-500 "></i>{" "}
            <p className="text-[#838996] text-[16px] capitalize font-normal group-hover:text-white z-20">
              Tech stack
            </p>
          </li>
        </ul>
      </nav>
      {/* porflion and other stuff */}
      <div className="mt-10">
        {selected === "projects" ? (
          <Projects />
        ) : selected === "certificates" ? (
          <Certificates />
        ) : selected === "techstack" ? (
          <TechStack />
        ) : null}
      </div>
    </section>
  );
};

export default PortfolioProjects;
