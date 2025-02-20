import Innovate from "./innovate";
import TechStackList from "./Techstack";
import TypeWriterSec from "./TypeWriter";
import MainText from "./mainText";
import AnimateDo from "./DoLitteanimate";
import ProjectsContacts from "./ProjectsContactys";
import Socails from "./socailslinks";

const MainSection = () => {
  return (
    <main className=" flex  justify-between realtive ">
      <div className=" mt-[4rem] flex flex-col gap-4">
        <Innovate />
        <MainText />
        <TypeWriterSec />
        <TechStackList />
        <ProjectsContacts />
        <Socails />
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="400"
        className="w-[60%] mt-[2rem] "
      >
        <AnimateDo />
      </div>
    </main>
  );
};

export default MainSection;
