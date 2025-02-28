import { ScrollToSetion } from "../constants";
const ProjectsContacts = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="projects-contacts flex gap-8  mt-2 p-1 laptop:mt-1 phoneL:gap-4  phoneP:gap-2"
    >
      <div className="relative group">
        <span className="absolute inset-0 scale-x-0 origin-left bg-gray-500/10 rounded-md  group-hover:scale-x-100 transition-transform duration-300 ease-in-out z-20 "></span>
        <span className="absolute  -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500  opacity-20 blur-[10px] rounded-lg"></span>
        <button
          onClick={() => ScrollToSetion("portfolio")}
          className="text-white relative group-hover:scale-105 cursor-pointer  py-2 px-8 rounded-md bg-[#07041D] z-30  duration-400 !transition-all laptop:text-[.9rem] tablet:px-6 tablet:text-[.8rem] phoneL:text-[.7rem] phoneL:px-4 phoneP:text-[.6rem]"
        >
          Projects
          <i className="fa-solid fa-arrow-up-right-from-square text-[13px] ml-2  group-hover:rotate-45 duration-500 !transition-all laptop:text-[12px] tablet:text-[11px] phoneL:text-[10px] phoneP:text-[8px] phoneP:ml-1"></i>
        </button>
      </div>
      <div className="relative group">
        <span className="absolute inset-0 scale-x-0 origin-left bg-gray-500/10 transition-transform duration-300 ease-in-out rounded-md group-hover:scale-x-100 z-20"></span>
        <span className="absolute  -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500  opacity-20 blur-[10px] rounded-lg"></span>
        <button
          onClick={() => ScrollToSetion("contact")}
          className="text-white relative py-2 px-8 cursor-pointer rounded-md bg-[#07041D] z-30 laptop:text-[.9rem]  tablet:px-6 tablet:text-[.8rem]  phoneL:text-[.7rem] phoneL:px-4 phoneP:text-[.6rem]"
        >
          Contacts
          <i className="fa-solid fa-envelope text-[13px] ml-2  group-hover:pl-2 duration-500 transition-all laptop:text-[12px]  tablet:text-[11px] phoneL:text-[10px] phoneP:text-[8px] phoneP:ml-1"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectsContacts;
