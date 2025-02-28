import Commects from "./comments";
import GetInTouch from "./getinTouch";

const ContactContent = () => {
  return (
    <>
      <div className="p-4 mt-[2rem] flex gap-10">
        <GetInTouch />
        <Commects />
      </div>
    </>
  );
};

export default ContactContent;
