import AboutMe from "../components/AboutMe";
import AnimatedBackground from "../components/AnimimatedBackgrounmd";
import MainSection from "../components/Herosection";
import NavBar from "../components/NavBar";
import ContactsPage from "./ContactsPage";
import PorfolioPage from "./PorfolioPage";
function Hompage() {
  return (
    <div className=" bg-[#030014] ">
      <AnimatedBackground />
      <NavBar />
      <MainSection />
      <AboutMe />
      <PorfolioPage />
      <ContactsPage />
    </div>
  );
}

export default Hompage;
