import AnimatedBackground from "../AnimimatedBackgrounmd";
import task from "../../assets/projectpreview/taskMananger.png";
import waether from "../../assets/projectpreview/wetherapp.png";
import { useParams } from "react-router-dom";
import ScrollToTop from "../scrolltotop";
import NavHeader from "./porfolionavHeader";

const SelectedPorfolio = () => {
  const { id } = useParams();
  const content = {
    weatherapp: {
      title: "Weather App",
      description:
        "The Weather App is a modern and interactive web application that provides real-time weather updates for different locations. Users can search for cities, view temperature details, and check weather conditions using a clean and user-friendly interface.",
      live_demo: "https://emmanuelohore.github.io/WeatherApp/",
      github_link: "https://github.com/EmmanuelOhore/WeatherApp",
      tech_summary: { total_tech: 6, main_features: 4 },
      port_img: waether,
      tech_stack: ["HTML", "CSS", "JavaScript", "React", "API", "axios"],
      key_features: [
        "Search for any city and get real-time weather updates",
        " Interactive map integration – click on any location to fetch weather details.",
        " Displays current temperature, weather conditions, and icons",
        "Dynamic weather updates with API integration",
      ],
    },
    taskmanager: {
      title: "Task Management App",
      description:
        "The Task Management App is a simple yet efficient tool designed to help users organize, track, and manage their daily tasks. It provides a clean interface for adding, editing, and deleting tasks, ensuring productivity and seamless workflow management.",
      live_demo: "https://taskhivetracker.netlify.app/",
      github_link: "https://github.com/EmmanuelOhore/TaskManagement-WebAPP",
      tech_summary: { total_tech: 4, main_features: 4 },
      port_img: task,
      tech_stack: ["HTML", "CSS", "JavaScript", "React"],
      key_features: [
        "Add, edit, and delete tasks with ease",
        "Mark tasks as completed to track progress",
        "User-friendly interface with smooth interactions",
        "Custom 404: redirection for seamless navigation. -Error boundary: to ensure app stability. -Sticky notes: feature for quick reminders. -Additional tools: to enhance productivity.",
      ],
    },
  };

  const details = content[id];
  const headertitle = details.title;
  return (
    <main className="bg-[#030014]  p-[5rem]">
      <ScrollToTop />
      <NavHeader title={headertitle} />
      <AnimatedBackground />
      <div className="main_content flex flex-col gap-[3rem] ">
        <section className="projet_description justify-between   flex flex-1">
          {/* porfolio description */}
          <header className="flex w-[50%]  flex-col gap-7">
            <div className="flex flex-col ">
              <h1 className="text-[60px] font-bold bg-gradient-to-r from-[#2563eb] via-[#6ac8ed] to-[#67e8f9] bg-clip-text text-transparent">
                {details.title}
              </h1>
              <span className="-mt-1 h-1 w-[20%] rounded-lg bg-gradient-to-r from-white via-cyan-500 to-cyan-700"></span>
            </div>
            <p className="text-[18px] font-normal text-[#BDC0C8]">
              {details.description}
            </p>
          </header>

          {/* porfolio_preview img container */}
          <div className="img_container   overflow-hidden  w-[45%] outline outline-1 outline-white rounded-2xl">
            <img
              src={details.port_img}
              alt="porfolio_preview"
              className=" object-cover  z-30 relative h-full w-full m-auto"
            />
          </div>
        </section>

        {/* section for the imag and the key featurs  */}
        <section className="project_preview_img_cotainer justify-between flex-1 flex  gap-4">
          {/* project tech summary */}
          <div className="w-[50%]">
            <div className=" p-4 flex gap-4    bg-gradient-to-r from-[#0C0B1E] to-cyan-700/20 rounded-2xl">
              {/* tech total */}
              <div className="total z-30 flex-1 rounded-xl bg-black/30 border-cyan-700 border hover:scale-105 transition-all duration-300 flex gap-4 p-3 items-center">
                <div className="icon bg-cyan-700/50 p-2 rounded-full">
                  <i className="fa-solid fa-code text-[white] "></i>
                </div>
                <div>
                  <h2 className="text-white text-[20px] font-bold">
                    {details.tech_summary.total_tech}
                  </h2>
                  <p className="text-[12px] font-normal text-[#6D7281] capitalize">
                    Total technologies
                  </p>
                </div>
              </div>
              {/* text stack */}
              <div className="total border z-30 border-blue-700  bg-black/30 flex-1 rounded-xl hover:scale-105 transition-all duration-300 flex gap-4 p-3 items-center">
                <div className="icon bg-blue-700/50 p-2 rounded-full">
                  <i className="fa-solid fa-layer-group text-[white] "></i>
                </div>
                <div>
                  <h2 className="text-white text-[20px] font-bold">
                    {details.tech_summary.main_features}
                  </h2>
                  <p className="text-[12px] font-normal text-[#6D7281] capitalize">
                    main features
                  </p>
                </div>
              </div>
            </div>
            {/* project links btn */}
            <div className="project_link mt-6 flex gap-4  py-4">
              <a href={details.live_demo} target="_blank" rel="noreferrer">
                <button className="text-[16px] bg-gradient-to-r from-blue-700/40 to-[#93C5FD]/10  z-30 relative group overflow-hidden text-[#93C5FD] font-semibold  w-[9rem] py-3 rounded-lg">
                  <span className="absolute inset-0 scale-y-0 bg-[#93C5FD]/20 origin-bottom group-hover:scale-y-100 transition-all duration-300"></span>
                  <i className="fa-solid text-[14px] group-hover:rotate-45 transition-all duration-300 text-white pr-2 fa-arrow-up-right-from-square"></i>{" "}
                  Live Demo
                </button>
              </a>
              <a href={details.github_link} target="_blank" rel="noreferrer">
                <button className="text-[16px] bg-gradient-to-r from-black to-cyan-700/20  z-30 relative group overflow-hidden text-cyan-500 font-semibold  w-[9rem] py-3 rounded-lg">
                  <span className="absolute inset-0 scale-y-0 bg-cyan-700/20 origin-bottom group-hover:scale-y-100 transition-all duration-300"></span>
                  <i className="fa-brands text-[18px] group-hover:rotate-45 transition-all duration-300 text-white  pr-2 fa-github"></i>{" "}
                  Github
                </button>
              </a>
            </div>

            {/* technology used  */}
            <div className="tech_used mt-8 flex flex-col gap-7">
              <header className="flex gap-3 items-center">
                <i className="fa-solid fa-code text-[20px] text-[#93C5FD] "></i>
                <h2 className="text-white capitalize text-[20px] font-semibold">
                  technoologies used
                </h2>
              </header>
              {/* technologies */}
              <div className="flex gap-4 flex-wrap z-30">
                {details.tech_stack.map((tech, index) => {
                  return (
                    <button
                      key={index}
                      className="text-[#93C5FD] capitalize relative  px-5 py-3 group rounded-xl bg-gradient-to-r from-gray-500/30 to-[#93C5FD]/20  "
                    >
                      <span className="absolute inset-0 scale-x-0 bg-blue-700/20 origin-left group-hover:scale-x-100 transition-all duration-500"></span>

                      <span className="pr-3 ">
                        <i className="fa-solid text-[14px] pr-[1px] fa-angle-left"></i>
                        <i className="fa-solid text-[14px] fa-angle-right"></i>
                      </span>
                      {tech}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* key features  */}
          <div className="key_faute_container border  bg-gradient-to-r from-[#0C0B1E] to-cyan-700/20 border-cyan-700 w-[45%] p-8  h-1/2 rounded-2xl hover:border-white z-20 group transition-all duration-300">
            <h1 className=" text-[20px] text-white font-semibold capitalize">
              <i className="fa-regular group-hover:rotate-45  transition-all duration-300 text-[#D9B016] pr-2 fa-star"></i>
              key features
            </h1>
            <ul className="mt-2 flex flex-col gap-4 z-30 relative">
              {details.key_features.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex cursor-pointer  p-5 rounded-xl hover:bg-cyan-700/20 transition-all duration-300 gap-2"
                  >
                    <i className="fa-solid text-[10px] text-cyan-700 fa-circle pt-2"></i>
                    <p className="text-[14px] font-normal   text-[#F2F2F3]">
                      {item}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SelectedPorfolio;
