import { Github, Linkedin, Instagram } from "lucide-react";

const Socails = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="flex gap-6 mt-6 laptop:mt-4 phoneL:gap-3 phoneP:mt-2"
    >
      <a
        href="https://github.com/EmmanuelOhore"
        target="_blank"
        rel="noreferrer"
      >
        <div className=" border-gray-400 border-1 border relative  p-2 rounded-lg group  bg-[#01070a] flex items-center  ">
          <span className="absolute -inset-1 bg-gradient-to-r from-white to-blue-400 -z-20 opacity-30 blur-xl transition duration-300 group-hover:opacity-80 group-hover:-inset-1"></span>
          <Github className="text-gray-400 w-6 h-6 group-hover:text-white transition-all duration-200  laptop:w-5  laptop:h-5 tablet:w-4 tablet:h-4 phoneL:w-3 phoneL:h-3" />
        </div>
      </a>

      <a
        href="https://www.instagram.com/emmanuelohore/"
        target="_blank"
        rel="noreferrer"
      >
        <div className=" border-gray-400 border-1 border relative  p-2 rounded-lg group  bg-[#01070a] flex items-center ">
          <span className="absolute -inset-2 bg-gradient-to-r from-white to-blue-400 -z-20 opacity-30  blur-xl  transition duration-300 group-hover:opacity-80 group-hover:-inset-1"></span>
          <Instagram className="text-gray-400 group-hover:text-white transition-all duration-200  laptop:w-5  laptop:h-5 tablet:w-4 tablet:h-4 phoneL:w-3 phoneL:h-3" />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/emmanuel-ohore/"
        target="_blank"
        rel="noreferrer"
      >
        <div className=" border-gray-400 border-1 border relative  p-2 rounded-lg group  bg-[#01070a] flex items-center ">
          <span className="absolute -inset-1 bg-gradient-to-r from-white to-blue-400 -z-20 opacity-30 blur-xl transition duration-300 group-hover:opacity-80 group-hover:-inset-1"></span>
          <Linkedin className="text-gray-400 group-hover:text-white transition-all duration-200  laptop:w-5  laptop:h-5 tablet:w-4 tablet:h-4 phoneL:w-3 phoneL:h-3" />
        </div>
      </a>
    </div>
  );
};

export default Socails;
