import Innovate from "./innovate";
import TechStackList from "./Techstack";
import TypeWriterSec from "./TypeWriter";
import MainText from "./mainText";
import AnimateDo from "./DoLitteanimate";
import ProjectsContacts from "./ProjectsContactys";

const MainSection = () => {
  return (
    <main className=" flex  justify-between realtive ">
      <div className=" mt-[4rem] flex flex-col gap-4">
        <Innovate />
        <MainText />
        <TypeWriterSec />
        <TechStackList />

        <ProjectsContacts />
      </div>
      <div className="w-[60%] mt-[2rem] ">
        <AnimateDo />
      </div>
    </main>
  );
};

export default MainSection;
