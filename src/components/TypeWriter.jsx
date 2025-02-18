import Typewriter from "typewriter-effect";
import Aos from "aos";
import { useEffect } from "react";
function TypeWriterSec() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="inline-block mt-2 ">
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-[1.5rem] text-white"
      >
        <Typewriter
          options={{
            strings: [
              "Tech Enthusiast",
              "Building the Web",
              "Creative Problem Solver",
              "Tailwind CSS Fan",
              "Learning Every Day",
            ],
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 30,
          }}
        />
      </h1>
    </div>
  );
}

export default TypeWriterSec;
