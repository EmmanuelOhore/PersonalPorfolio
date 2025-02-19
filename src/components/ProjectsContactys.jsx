const ProjectsContacts = () => {
  return (
    <div className="projects-contacts flex gap-10  mt-6 p-1 ">
      <div className="relative">
        <span className="absolute inset-0 bg-gray-500 scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        <span className="absolute  -inset-3 bg-gradient-to-r from-cyan-400 to-blue-500  opacity-20 blur-[10px] rounded-lg"></span>
        <button className="text-white relative outline outline-1 outline-white  py-2 px-8 rounded-md bg-[#07041D] ">
          Projects
        </button>
      </div>
      <div className="relative">
        <span className="absolute  -inset-3 bg-gradient-to-r from-cyan-400 to-blue-500  opacity-20 blur-[10px] rounded-lg"></span>
        <button className="text-white relative outline outline-1 outline-white  py-2 px-8 rounded-md bg-[#07041D] z-30">
          Contacts
        </button>
      </div>
    </div>
  );
};

export default ProjectsContacts;
