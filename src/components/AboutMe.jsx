import Aos from "aos";
import pic from "/public/profile.jpg";
import { useMemo, memo, useRef } from "react";
import { Snowflake } from "lucide-react";
import { useEffect } from "react";
import ExpericeCards from "./profilecards";
const ProfileImage = memo(() => (
  <div className="flex justify-end items-center ">
    <div
      className="relative group "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-cyan-400 to-cyan-700 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-500 via-cyan-600 to-cyan-800 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-cyan-300 to-cyan-600 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 phoneP:w-[10rem] phoneP:h-[10rem] sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

          {/* Optimized overlay effects - disabled on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

          <img
            src={pic}
            alt="Profile"
            className="w-full h-full object-cover  transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          {/* Advanced hover effects - desktop only */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));
function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const handlescroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main id="about" className=" pt-[6rem]  ">
      <header className="flex flex-col  text-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[3rem] font-bold tracking-tight laptop:text-[2.5rem] phoneL:text-[1.8rem] phoneP:text-[1.4rem]"
        >
          <span className="relative inline-block mt-2">
            {/* Glow Effect */}
            <span className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-20"></span>
            {/* Gradient Text */}
            <span className="relative bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </span>
          </span>
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex justify-center gap-2 items-center"
        >
          <Snowflake className="text-cyan-700 tablet:w-4 table:h-4 phoneL:w-3" />
          <h2 className="text-[18px] text-[#838996] laptop:text-[17px] phoneL:text-[13px] phoneP:text-[9px]">
            Bridging creativity and code to build interactive experiences
          </h2>
          <Snowflake className="text-cyan-800 tablet:w-4 table:h-4 phoneL:w-3" />
        </div>
      </header>
      {/* Main Content */}
      <div className="main content py-16 px-[6rem] flex justify-between laptop:py-13 laptop:px-10 tablet:flex-col tablet:gap-10 phoneL:py-8 phoneL:px-5 phoneP:py-4 phoneP:px-3 phoneP:flex-col-reverse">
        <div className="text_container w-1/2 flex flex-col gap-8  tablet:w-full phoneL:gap-4">
          <div className="relative ">
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-[48px] leading-[3.5rem] font-bold tracking-tight text-white laptop:text-[40px] laptop:leading-[3rem] phoneL:text-[30px] phoneL:leading-[2.5rem] phoneP:text-[23px] phoneP:leading-[1.6rem]"
            >
              <span className=" bg-gradient-to-b from-white to-cyan-500 bg-clip-text text-transparent">
                {" "}
                Hello I'm,
              </span>
              <br />
              Ohore Emmanuel
            </h1>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-[18px] text-[#838996] tracking-wide laptop:text-[17px] phoneL:text-[14px] phoneP:text-[12px] phoneP:tracking-normal"
          >
            A Frontend Developer passionate about crafting interactive and
            user-friendly digital experiences. I specialize in React,
            JavaScript, and Tailwind CSS, constantly learning and refining my
            skills to build seamless and efficient web applications
          </p>
          <div className="btn-container z-30 relative flex gap-6 phoneP:gap-3 phoneP:mt-3">
            <a
              href="/Ohore Emmanuel FrontEnd Devloper CV.pdf"
              download="Ohore_Emmanuel_CV.pdf"
            >
              <button
                data-aos="fade-up"
                data-aos-delay="300"
                className=" text-white text-[16px] font-normal  py-2 px-6 rounded-md bg-gradient-to-tr from-cyan-400 to-cyan-800 flex items-center gap-2 laptop:py-3 laptop:px-4 laptop:text-[14px] phoneL:text-[13px] phoneP:p-2 phoneP:text-[12px] "
              >
                <i className="fa-regular fa-file-lines laptop:text-[15px] phoneL:text-[13px]"></i>
                Download CV
              </button>
            </a>

            <button
              onClick={() => handlescroll("portfolio")}
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-cyan-600  text-[16px] font-normal  py-3 px-6 rounded-md border border-cyan-500 flex items-center gap-2 laptop:py-3 laptop:px-4 laptop:text-[14px]  phoneL:text-[13px] phoneP:p-2 phoneP:text-[12px]"
            >
              <i className="fa-solid fa-code laptop:text-[15px] phoneL:text-[13px]"></i>
              Veiw Projects
            </button>
          </div>
        </div>
        <div className="profilepic_container pr-[5rem] laptop:pr-[1rem] tablet:flex tablet:justify-start tablet:items-start phoneP:justify-center">
          <ProfileImage />
        </div>
      </div>
      {/* experices card content  */}
      <div>
        <ExpericeCards />
      </div>
    </main>
  );
}

export default AboutMe;
