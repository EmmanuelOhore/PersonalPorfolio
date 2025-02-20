import AboutMe from "../components/AboutMe";
import AnimatedBackground from "../components/AnimimatedBackgrounmd";
import MainSection from "../components/Herosection";
import NavBar from "../components/NavBar";
function Hompage() {
  return (
    <div className=" bg-[#030014] ">
      <AnimatedBackground />
      <NavBar />
      <MainSection />
      <AboutMe />
    </div>
  );
}

export default Hompage;
