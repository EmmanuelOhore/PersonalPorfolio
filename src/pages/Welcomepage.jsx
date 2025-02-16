import { useEffect, useState } from "react";

import PropTypes from "prop-types";

// Welcompage Component
const WelcomePage = ({ onloadcomplete }) => {
  return (
    <>
      <main className="h-screen flex justify-center items-center relative bg-custom-bg ">
        <BackgroundEffect />
        <section className="">
          <div className="text">
            <div className=" p-10 text-center">
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-white via-[#1E40AF] to-[#6A5ACD] bg-clip-text text-transparent drop-shadow-lg">
                Welcome To My
                <h1 className="font-bold">Portfolio Website</h1>
              </h1>
            </div>
          </div>
          <TypewriteText
            onloadcomplete={onloadcomplete}
            input={"this is my porfolio"}
          />
        </section>
      </main>
    </>
  );
};

// type writer component
const TypewriteText = ({ input, onloadcomplete }) => {
  const [displayText, setDisplayText] = useState(input);

  useEffect(() => {
    let index = 0;
    if (input) {
      const Timer = setInterval(() => {
        if (index <= input.length) {
          setDisplayText(input.slice(0, index));
          index++;
        }
      }, 200);
      return () => clearInterval(Timer);
    }
  }, [input, onloadcomplete]);

  return <h1 className="text-[3rem ] text-white">{displayText}</h1>;
};

// background effect component
const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* First Layer: Soft Blue Gradient with Subtle Transparency */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-3xl animate-pulse" />

    {/* Second Layer: Softer Gradient with Even More Transparency */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-transparent to-teal-300/10 blur-2xl animate-float" />
  </div>
);

TypewriteText.propTypes = {
  input: PropTypes.string,
  onloadcomplete: PropTypes.func,
};
WelcomePage.propTypes = {
  onloadcomplete: PropTypes.func,
};
export default WelcomePage;
