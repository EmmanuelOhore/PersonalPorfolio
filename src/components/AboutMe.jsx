import Aos from "aos";
import pic from "/public/profile.jpg";
import { useMemo, memo } from "react";
import { Snowflake } from "lucide-react";
import { useEffect } from "react";
import ExpericeCards from "./profilecards";
const ProfileImage = memo(() => (
  <div className="flex justify-end items-center ">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-cyan-400 to-cyan-700 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-500 via-cyan-600 to-cyan-800 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-cyan-300 to-cyan-600 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
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
  return (
    <main className=" pt-[6rem]  ">
      <header className="flex flex-col  text-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[3rem] font-bold tracking-tight"
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
          className="flex justify-center gap-2"
        >
          <Snowflake className="text-cyan-700" />
          <h2 className="text-[18px] text-[#838996]">
            Bridging creativity and code to build interactive experiences
          </h2>
          <Snowflake className="text-cyan-800" />
        </div>
      </header>
      {/* Main Content */}
      <div className="main content py-16 px-[6rem] flex justify-between">
        <div className="text_container w-1/2 flex flex-col gap-8">
          <div className="relative ">
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-[48px] leading-[3.5rem] font-bold tracking-tight text-white"
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
            className="text-[18px] text-[#838996] tracking-wide"
          >
            seorang siswa Teknik Jaringan Komputer dan Telekomunikasi yang
            tertarik dalam pengembangan Front-End. Saya berfokus pada
            menciptakan pengalaman digital yang menarik dan selalu berusaha
            memberikan solusi terbaik dalam setiap proyek.
          </p>
          <div className="btn-container flex gap-6">
            <button
              data-aos="fade-up"
              data-aos-delay="300"
              className=" text-white text-[16px] font-normal  py-2 px-6 rounded-md bg-gradient-to-tr from-cyan-400 to-cyan-800 flex items-center gap-2"
            >
              <i className="fa-regular fa-file-lines"></i>
              Download CV
            </button>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-cyan-600  text-[16px] font-normal  py-3 px-6 rounded-md border border-cyan-500 flex items-center gap-2"
            >
              <i className="fa-solid fa-code"></i>
              Veiw Projects
            </button>
          </div>
        </div>
        <div className="profilepic_container pr-[5rem]">
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
