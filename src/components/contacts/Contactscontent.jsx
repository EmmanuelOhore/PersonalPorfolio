import Commects from "./comments";
import GetInTouch from "./getinTouch";

const ContactContent = () => {
  return (
    <>
      <div className="p-4 mt-[2rem] flex gap-10 laptop:gap-5 laptop:p-3 laptop:mt-[1.5rem] tablet:flex-col">
        <GetInTouch />
        <Commects />
      </div>
    </>
  );
};

export default ContactContent;
