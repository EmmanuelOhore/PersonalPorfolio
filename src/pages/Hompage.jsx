import AnimatedBackground from "../components/AnimimatedBackgrounmd";
import BackgroundEffect from "../components/BackgroundEffect";
import MainSection from "../components/Herosection";
import NavBar from "../components/NavBar";
function Hompage() {
  return (
    <div className="bg-[#030014] h-screen">
      <NavBar />
      <MainSection />
      <BackgroundEffect />
      <AnimatedBackground />
    </div>
  );
}

export default Hompage;
