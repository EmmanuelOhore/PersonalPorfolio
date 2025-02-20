const ProjectsContacts = () => {
  return (
    <div className="projects-contacts flex gap-8  mt-4 p-1  ">
      <div className="relative group">
        <span className="absolute inset-0 scale-x-0 origin-left bg-gray-500/10 rounded-md  group-hover:scale-x-100 transition-transform duration-300 ease-in-out z-40 "></span>
        <span className="absolute  -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500  opacity-20 blur-[10px] rounded-lg"></span>
        <button className="text-white relative group-hover:scale-105  py-2 px-8 rounded-md bg-[#07041D] z-30  duration-400 !transition-all ">
          Projects
          <i className="fa-solid fa-arrow-up-right-from-square text-[13px] ml-2  group-hover:rotate-45 duration-500 !transition-all"></i>
        </button>
      </div>
      <div className="relative group">
        <span className="absolute inset-0 scale-x-0 origin-left bg-gray-500/10 transition-transform duration-300 ease-in-out rounded-md group-hover:scale-x-100 z-40"></span>
        <span className="absolute  -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500  opacity-20 blur-[10px] rounded-lg"></span>
        <button className="text-white relative py-2 px-8 rounded-md bg-[#07041D] z-30">
          Contacts
          <i className="fa-solid fa-envelope text-[13px] ml-2  group-hover:pl-2 duration-500 transition-all"></i>
        </button>
      </div>
    </div>
  );
};

export default ProjectsContacts;
