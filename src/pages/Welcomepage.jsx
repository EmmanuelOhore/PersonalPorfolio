import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Aos from "aos";
import PropTypes from "prop-types";
import TypewriteText from "../components/TypewriterText";
import BackgroundEffect from "../components/BackgroundEffect";
import IconButton from "../components/IconButton";

// WelcomePage Component
const WelcomePage = ({ onLoadComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
    const timeout = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onLoadComplete();
      }, 1000);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [onLoadComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 bg-[#030014]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit="exit"
            variants={containerVariants}
          >
            <main className="h-screen flex justify-center items-center relative bg-custom-bg ">
              <BackgroundEffect />
              <section className="">
                {/* icon container start */}
                <motion.div
                  variants={childVariants}
                  className="icon_container relative flex justify-center gap-7 phoneP:gap-4"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-white/50 animate-pulse  to-cyan-500/50 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
                  <IconButton delay="200" icon={"fa-solid fa-link"} />
                  <IconButton delay="400" icon={"fa-regular fa-user"} />
                  <IconButton delay="600" icon={"fa-brands fa-github"} />
                </motion.div>

                {/* welcome text start */}
                <motion.div variants={childVariants}>
                  <div className="p-8 text-center flex flex-col gap-4 laptop:gap-1 phoneL:p-6">
                    <div
                      data-aos="fade-right"
                      className="text-5xl laptop:text-4xl tablet:text-3xl phoneL:text-2xl phoneP:text-xl font-extrabold text-cyan-50 drop-shadow-lg"
                    >
                      <span
                        data-aos="fade-right"
                        data-aos-delay="200"
                        className="inline-block px-2 phoneL:px-1 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent"
                      >
                        Welcome
                      </span>

                      <span
                        data-aos="fade-right"
                        data-aos-delay="400"
                        className="inline-block px-2 phoneL:px-1 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent"
                      >
                        To
                      </span>
                      <span
                        data-aos="fade-right"
                        data-aos-delay="600"
                        className="inline-block px-2  phoneL:px-1  bg-gradient-to-r from-white via-blue-100 to-cyan-2300 bg-clip-text text-transparent"
                      >
                        My
                      </span>
                    </div>
                    <div className="text-5xl laptop:text-4xl tablet:text-3xl phoneL:text-2xl phoneP:text-xl font-extrabold bg-gradient-to-r from-cyan-200 to-cyan-400/20 bg-clip-text text-transparent drop-shadow-lg">
                      <span
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="inline-block px-2  phoneL:px-1  bg-gradient-to-r from-cyan-100  to-cyan-700/40 bg-clip-text text-transparent"
                      >
                        Portfolio
                      </span>

                      <span
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="inline-block px-2  phoneL:px-1  bg-gradient-to-r from-cyan-100  to-cyan-700/40 bg-clip-text text-transparent"
                      >
                        Website
                      </span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={childVariants}
                  exit="exit"
                  data-aos="fade-up"
                  className="icon_container relative flex justify-center gap-7 w-fit mx-auto"
                >
                  <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/30 animate-pulse to-cyan-700/50 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
                  <TypewriteText
                    input={"https://personal-porfolio-xb9t.vercel.app/"}
                  />
                </motion.div>
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

WelcomePage.propTypes = {
  onLoadComplete: PropTypes.func,
};

export default WelcomePage;
