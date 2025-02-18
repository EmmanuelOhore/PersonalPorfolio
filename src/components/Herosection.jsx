import Innovate from "./innovate";
import TechStackList from "./Techstack";
import TypeWriterSec from "./TypeWriter";
import MainText from "./mainText";

const MainSection = () => {
  return (
    <main>
      <div className=" mt-[4rem] flex flex-col gap-4">
        <Innovate />
        <MainText />
        <TypeWriterSec />
        <TechStackList />
      </div>
      <div></div>
    </main>
  );
};

export default MainSection;
