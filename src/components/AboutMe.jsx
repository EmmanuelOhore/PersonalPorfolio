import Aos from "aos";
import { Snowflake } from "lucide-react";
import { useEffect } from "react";
function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <main className="h-screen pt-[6rem] ">
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
      <div className="maiain content"></div>
    </main>
  );
}

export default AboutMe;
