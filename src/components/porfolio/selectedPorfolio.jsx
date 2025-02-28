import AnimatedBackground from "../AnimimatedBackgrounmd";
import task from "../../assets/projectpreview/taskMananger.png";
import todo from "../../assets/projectpreview/todo.png";
import africa from "../../assets/projectpreview/africa.png";
import clip from "../../assets/projectpreview/clip.png";
import pro1 from "../../assets/projectpreview/pro1.png";
import port from "../../assets/projectpreview/port.png";
import ballot from "../../assets/projectpreview/ballot.png";
import card from "../../assets/projectpreview/card.png";
import waether from "../../assets/projectpreview/wetherapp.png";
import { useParams } from "react-router-dom";
import ScrollToTop from "../scrolltotop";
import NavHeader from "./porfolionavHeader";

const SelectedPorfolio = () => {
  const { id } = useParams();
  const content = {
    clipboard: {
      title: "Clipboard Landing Page",
      description:
        "The Clipboard Landing Page is a sleek and responsive website that showcases the features of a clipboard application. It emphasizes seamless text storage and synchronization across multiple devices while maintaining an elegant and modern design.",
      live_demo: "https://clip-board-land-page.netlify.app/",
      github_link:
        "https://github.com/EmmanuelOhore/Html-CSS_Projects/tree/main/clipboard-landing-page-master-project",
      tech_summary: { total_tech: 3, main_features: 4 },
      port_img: clip,
      tech_stack: ["HTML", "CSS", "JavaScript"],
      key_features: [
        "Responsive Design – Fully optimized for different screen sizes, ensuring smooth accessibility on desktops, tablets, and mobile devices.",
        "Modern and Clean UI – Uses a minimalist approach with smooth transitions and visually appealing layouts.",
        "Feature Highlight Sections – Displays key functionalities of the Clipboard app using well-structured content blocks and eye-catching visuals.",
        "Call-to-Action Buttons – Includes clear CTA buttons to guide users towards app downloads or further engagement.",
      ],
    },
    smilingHandsNGO: {
      title: "Smiling Hands NGO Website",
      description:
        "The Smiling Hands NGO Website is a well-structured platform that highlights the mission, vision, and impact of the organization. It provides clear insights into various initiatives, ongoing projects, and ways for visitors to contribute or get involved. The website features an intuitive layout with engaging visuals to ensure a seamless user experience.",
      live_demo:
        "https://smiling-hands-website-2gj93vxbe-ohore-emmanuels-projects.vercel.app/",
      github_link: "https://github.com/EmmanuelOhore/smilingHandsWebsite",
      tech_summary: { total_tech: 7, main_features: 4 },
      port_img: africa,
      tech_stack: [
        "HTML",
        "AOS",
        "tailnwind",
        "JavaScript",
        "vercel",
        "React",
        "Responsive Design",
      ],
      key_features: [
        "Comprehensive NGO Overview – Showcases the organization's mission, vision, and core values.",
        "Project and Initiative Showcase – Highlights past and ongoing humanitarian projects with detailed descriptions.",
        "Volunteer & Donation Sections – Provides easy access to volunteer sign-ups and donation options.",
        "Fully Responsive Design – Optimized for both desktop and mobile users, ensuring accessibility across all devices.",
      ],
    },
    altSchoolProject1: {
      title: "AltSchool Project 1 ",
      description:
        "This project is a refined clone of the AltSchool login page, created as part of an assignment to practice authentication UI design and form handling. It incorporates essential login functionalities while maintaining a clean, user-friendly interface. The project also explores responsive design and validation techniques to enhance the user experience.",
      live_demo: "https://alt-school-project1-assignment.netlify.app/",
      github_link:
        "https://github.com/EmmanuelOhore/AltSchool-Africa/tree/main/Assignment-1",
      tech_summary: { total_tech: 4, main_features: 5 },
      port_img: pro1,
      tech_stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      key_features: [
        "Login Page Recreation – A fully styled login page inspired by AltSchool's design, featuring form validation and structured input fields.",
        "Media Showcase Page – A dedicated page displaying various media elements, including images, videos, and audio, using pure HTML.",
        "AltSchool Schools Page – A page listing all the schools within AltSchool Africa, structured for easy readability and accessibility.",
        "Form Validation – Ensures users input valid information in the login fields before submission.",
        "Responsive Design – Optimized for different screen sizes to provide a seamless user experience on both mobile and desktop devices.",
      ],
    },
    ballotAuthPage: {
      title: "Ballot Dashboard Auth",
      description:
        "This project is a simple yet functional authentication system for a ballot dashboard. It features a clean and user-friendly login and signup interface, designed for seamless user access. Built with HTML, CSS, and JavaScript, the authentication pages ensure smooth navigation while maintaining a responsive design for various screen sizes.",
      live_demo: "https://ballot-dash-reg.netlify.app/",
      github_link: "https://github.com/EmmanuelOhore/ballotProject",
      tech_summary: { total_tech: 3, main_features: 3 },
      port_img: ballot,
      tech_stack: ["HTML", "CSS", "JavaScript"],
      key_features: [
        "Login & Signup Pages – Provides a structured interface for user authentication.",
        "Responsive Design – Optimized for both desktop and mobile users.",
        "Smooth User Experience – Minimalistic design ensuring easy navigation and usability.",
      ],
    },

    onePagePortfolio: {
      title: "One-Page Portfolio",
      description:
        "This project is a modern, visually appealing one-page portfolio website designed to showcase personal or professional work. Built with HTML, CSS, and JavaScript, it features smooth scrolling, interactive animations, and a fully responsive layout. The portfolio presents sections for an introduction, skills, projects, and contact information, making it an excellent template for developers and designers looking to establish an online presence.",
      live_demo: "https://preview-one-page.netlify.app/",
      github_link: "https://github.com/EmmanuelOhore/porfolioV1",
      tech_summary: { total_tech: 3, main_features: 4 },
      port_img: port,
      tech_stack: ["HTML", "CSS", "JavaScript"],
      key_features: [
        "Smooth Scrolling – Implements a seamless scrolling experience for easy navigation across sections.",
        "Responsive Design – Fully optimized for desktops, tablets, and mobile devices.",
        "Interactive Animations – Subtle animations enhance the user experience and engagement.",
        "Contact Section – Includes a  contact form or social media links for easy communication.",
      ],
    },

    todolist: {
      title: "To-Do List App",
      description:
        "The To-Do List App is a simple and interactive web application that helps users manage their daily tasks efficiently. Users can add, delete, and mark tasks as completed while enjoying a clean and responsive interface.",
      live_demo: "https://emmanuelohore.github.io/todolist/",
      github_link: "https://github.com/EmmanuelOhore/todolist",
      tech_summary: { total_tech: 4, main_features: 5 },
      port_img: todo,
      tech_stack: ["React", "HTML", "CSS", "JavaScript"],
      key_features: [
        "Add New Tasks Dynamically – Users can input tasks and see them appear instantly in the list, ensuring a smooth and interactive experience.",
        "Mark Tasks as Completed – Tasks can be checked off when completed, improving task tracking and productivity.",
        "Delete  Tasks – Users can either remove tasks they no longer need or edit them if they need modifications.",
        "Pagination for Task Management – If a user has multiple tasks, they are divided into pages to avoid clutter and enhance readability.",
        "Simple and User-Friendly UI – Designed with a minimalist approach, offering smooth transitions and a visually appealing experience.",
      ],
    },
    interactiveCard: {
      title: "Interactive Card Details Form",
      description:
        "The Interactive Card Details Form is a sleek and dynamic web application that allows users to input and preview their card details in real-time. With smooth animations and a responsive design, it enhances the user experience while practicing form validation and interactive UI design.",
      live_demo: "https://interactive-card-deatails.netlify.app/",
      github_link:
        "https://github.com/EmmanuelOhore/Html-CSS_Projects/tree/main/interactive-card-details-form-main-project",
      tech_summary: { total_tech: 4, main_features: 3 },
      port_img: card,
      tech_stack: ["HTML", "CSS", "JavaScript", "Form Validation"],
      key_features: [
        "Real-Time Card Preview – Users can enter their card details, and the virtual card updates dynamically to reflect the information.",
        "Form Validation – Ensures correct formatting for card numbers, expiration dates, and CVC codes to prevent errors.",
        "Responsive Design – Works smoothly across different screen sizes, making it mobile-friendly and accessible.",
      ],
    },

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
          <div className="img_container   overflow-hidden  w-[45%]  rounded-2xl">
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
                    <p className="text-[15px] font-normal   text-[#F2F2F3]">
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
