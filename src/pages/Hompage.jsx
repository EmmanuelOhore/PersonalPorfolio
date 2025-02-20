import AnimatedBackground from "../components/AnimimatedBackgrounmd";
import MainSection from "../components/Herosection";
// import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
function Hompage() {
  return (
    <div
      // initial={{ opacity: 0, filter: "blur(10px)" }}
      // animate={{ opacity: 1, filter: "blur(0px)" }}
      // exit="exit"
      className="bg-[#030014] h-screen"
    >
      <NavBar />
      <MainSection />
      <AnimatedBackground />
    </div>
  );
}

export default Hompage;
