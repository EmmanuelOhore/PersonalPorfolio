import Innovate from "./innovate";
import TechStackList from "./Techstack";
import TypeWriterSec from "./TypeWriter";
import MainText from "./mainText";
import AnimateDo from "./DoLitteanimate";
import ProjectsContacts from "./ProjectsContactys";
import Socails from "./socailslinks";

const MainSection = () => {
  return (
    <main
      id="home"
      className=" flex  justify-between realtive phoneL:flex-col phoneL:gap-4 "
    >
      <div className=" mt-[4rem] flex flex-col gap-4 tablet:mt-[2.5rem] phoneL:gap-2 phoneL:mt-[1.5rem]">
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
        className="w-[60%] mt-[2rem]  items-center  flex justify-center laptop:w-[55%] tablet:items-start tablet:w-[60%] phoneL:w-[100%] phoneL:h-[100%]  "
      >
        <AnimateDo />
      </div>
    </main>
  );
};

export default MainSection;
