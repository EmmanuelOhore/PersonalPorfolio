import place from "../assets/place.png";
import task from "../assets/projectpreview/taskMananger.png";
import todo from "../assets/projectpreview/todo.png";
import clip from "../assets/projectpreview/clip.png";
import africa from "../assets/projectpreview/africa.png";
import card from "../assets/projectpreview/card.png";
import pro1 from "../assets/projectpreview/pro1.png";
import ballot from "../assets/projectpreview/ballot.png";
import port from "../assets/projectpreview/port.png";
import weather from "../assets/projectpreview/wetherapp.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const [show, setShow] = useState(3);
  const projectDta = [
    {
      title: "Weather App",
      desc: "The Weather App is a modern and interactive web application that provides real-time weather updates",
      details_link: "weatherapp",
      imge: weather,
      live_demo: "https://emmanuelohore.github.io/WeatherApp/",
    },
    {
      title: "Task Management App",
      desc: "The Task Management App is a simple yet efficient tool designed to help users",
      details_link: "taskmanager",
      imge: task,
      live_demo: "https://taskhivetracker.netlify.app/",
    },
    {
      title: "Smiling Hands NGO Website",
      desc: "Smiling Hands NGO Website is a beautifully designed platform that showcases the mission, vision, and impact of the organization",
      details_link: "smilingHandsNGO",
      imge: africa,
      live_demo:
        "https://smiling-hands-website-2gj93vxbe-ohore-emmanuels-projects.vercel.app/",
    },
    {
      title: "TodoList",
      desc: "This is a simple and interactive To-Do List web app designed to help users organize tasks efficiently",
      details_link: "todolist",
      imge: todo,
      live_demo: "https://emmanuelohore.github.io/todolist/",
    },
    {
      title: "One-Page Portfolio",
      desc: "A sleek and modern one-page portfolio website built with HTML, CSS, and JavaScript. This project features smooth scrolling, responsive design",
      imge: port,
      details_link: "onePagePortfolio",
      live_demo: "https://preview-one-page.netlify.app/",
    },
    {
      title: "Landing Page",
      desc: "The Clipboard Landing Page is a modern and responsive webpage designed to showcase the features of a clipboard application",
      imge: clip,
      details_link: "clipboard",
      live_demo: "https://clip-board-land-page.netlify.app/",
    },
    {
      title: "Interactive Card Details Form",
      desc: "The Interactive Card Details Form is a sleek and user-friendly web application that allows users to input and preview their credit or debit card details",
      imge: card,
      details_link: "interactiveCard",
      live_demo: "https://interactive-card-deatails.netlify.app/",
    },
    {
      title: "AltSchool Project 1 ",
      desc: "The AltSchool Project 1 Assignment is a recreated version of the AltSchool login page, built to practice authentication UI design and form validation.",
      imge: pro1,
      details_link: "altSchoolProject1",
      live_demo: "https://alt-school-project1-assignment.netlify.app/",
    },
    {
      title: "Ballot Dashboard",
      desc: "Ballot Dashboard Auth is a simple and responsive authentication interface featuring login and signup pages for accessing a ballot dashboard.",
      imge: ballot,
      details_link: "ballotAuthPage",
      live_demo: "https://ballot-dash-reg.netlify.app/",
    },
  ];

  const handleshowmore = () => {
    setShow((prev) => Math.min(prev + 3, projectDta.length));
  };
  const handleShowLess = () => {
    setShow(3);
  };

  return (
    <>
      <section
        className="w-[80%] p-4 mx-auto grid gap-6 
        wide:grid-cols-3 laptop:w-[98%]  laptop:grid-cols-3 tablet:grid-cols-2 phoneL:grid-cols-1 phoneP:p-1"
      >
        {projectDta.slice(0, show).map((item, index) => (
          <div
            data-aos="fade-right"
            data-aos-delay={index * 50}
            key={index}
            className="z-20 relative flex p-5 justify-center group flex-col gap-4 
              items-center rounded-2xl cursor-pointer shadow-lg 
              hover:scale-105 hover:border-cyan-800 border border-transparent 
              transition-all duration-500 phoneP:p-3 "
          >
            <span
              className="absolute inset-0 bg-gradient-to-br from-cyan-800 via-[#050215]  
              rounded-2xl opacity-50 group-hover:opacity-80 transition-all 
              duration-300 -z-10"
            ></span>

            <header className="w-full h-[13rem]">
              <img
                data-aos="zoom-in"
                data-aos-delay={index * 50}
                src={item.imge || place}
                className="w-full h-full object-cover group-hover:scale-105 
                  transition-all duration-500 rounded-md"
              />
            </header>

            <div className="content flex flex-col gap-5">
              <h1
                className="bg-gradient-to-tr font-bold text-[19px] from-white to-cyan-600 
                bg-clip-text text-transparent phoneP:text-[17px]"
              >
                {item.title}
              </h1>

              <p className="text-[14px] leading-[18px] text-[#838996] phoneP:text-[12px] phoneP:leading-[15px]">
                {item.desc}
              </p>

              <div className="flex justify-between items-center w-full">
                <h2 className="text-[12px] text-[#93C5FD]">
                  <a href={item.live_demo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[11px] pl-2"></i>
                </h2>
                <Link
                  to={`/select/${item.details_link}`}
                  className="text-[12px] px-6 py-2 rounded-md 
                    text-white bg-gray-600/40"
                >
                  Details
                  <i className="fa-solid pl-2 text-[11px] fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="w-full flex justify-center mt-6">
        {show < projectDta.length ? (
          <button
            onClick={handleshowmore}
            className="text-white z-30 text-[16px] capitalize cursor-pointer 
              px-6 py-3 border-cyan-400/30 border hover:scale-105 
              hover:bg-cyan-700/40 hover:border-cyan-300 transition-all 
              duration-300 rounded-lg bg-cyan-700/20 phoneP:text-[12px]  phoneP:px-4"
          >
            Show more
            <i className="fa-solid pl-2 fa-chevron-down"></i>
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="text-white z-30 text-[16px] capitalize cursor-pointer 
              px-6 py-3 border-cyan-400/30 border hover:scale-105 
              hover:bg-cyan-700/40 hover:border-cyan-300 transition-all 
              duration-300 rounded-lg bg-cyan-700/20 phoneP:text-[12px]  phoneP:px-4"
          >
            Show less
            <i className="fa-solid pl-2 fa-chevron-up"></i>
          </button>
        )}
      </div>
    </>
  );
};

export default Projects;
