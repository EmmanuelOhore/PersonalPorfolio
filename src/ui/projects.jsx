import place from "../assets/place.png";
import task from "../assets/projectpreview/taskMananger.png";
import todo from "../assets/projectpreview/todo.png";
import clip from "../assets/projectpreview/clip.png";
import card from "../assets/projectpreview/card.png";
import weather from "../assets/projectpreview/wetherapp.png";
import { Link } from "react-router-dom";
const Projects = () => {
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
      title: "TodoList",
      desc: "This is a simple and interactive To-Do List web app designed to help users organize tasks efficiently",
      details_link: "todolist",
      imge: todo,
      live_demo: "https://emmanuelohore.github.io/todolist/",
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
  ];
  return (
    <>
      <section className=" w-[80%] p-4 mx-auto   gap-[20px]  justify-between flex flex-wrap ">
        {projectDta.map((item, index) => {
          return (
            <div
              data-aos="fade-right"
              data-aos-delay={index * 50}
              key={index}
              style={{ width: "calc(33.33% - 20px)" }}
              className="z-20  relative flex p-5 justify-center group    flex-col gap-4 items-center rounded-2xl  cursor-pointer shadow-lg hover:scale-105 hover:border-cyan-800 border border-transparent transition-all duration-500  "
            >
              <span className="absolute inset-0 bg-gradient-to-br from-cyan-800 via-[#050215]  rounded-2xl opacity-50 group-hover:opacity-80 transition-all  duration-300 -z-10"></span>
              <header className="w-[100%] h-[13rem]">
                <img
                  src={item.imge || place}
                  className="w-full h-full object-cover"
                />
              </header>
              <div className="content  flex flex-col gap-5">
                <div className="relative">
                  <h1 className="absolute bg-gradient-to-tr font-bold text-[19px] from-white to-cyan-600 bg-clip-text text-transparent">
                    {item.title}
                  </h1>
                  <br />
                </div>

                <p className="text-[14px] leading-[18px] text-[#838996]">
                  {item.desc}
                </p>
                <div className="flex justify-between items-center">
                  <h2 className="text-[12px] text-[#93C5FD]">
                    <a href={item.live_demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>

                    <i className="fa-solid fa-arrow-up-right-from-square text-[11px] pl-2"></i>
                  </h2>
                  <Link
                    to={`/select/${item.details_link}`}
                    className=" text-[12px] px-6 py-2 rounded-md text-[white] bg-gray-600/40"
                  >
                    Details
                    <i className="fa-solid pl-2 text-[11px] fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Projects;
