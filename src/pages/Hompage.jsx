import AnimatedBackground from "../components/AnimimatedBackgrounmd";
import MainSection from "../components/Herosection";
import NavBar from "../components/NavBar";
function Hompage() {
  return (
    <div className="bg-[#030014] h-screen">
      <NavBar />
      <MainSection />
      <AnimatedBackground />
    </div>
  );
}

export default Hompage;
