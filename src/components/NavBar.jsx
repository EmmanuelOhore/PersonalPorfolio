const NavBar = () => {
  return (
    <>
      <nav className="flex px-16 items-center  py-4 bg-[#030014] ">
        <div className="logo">
          <h1 className="text-[2rem] font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-500 bg-clip-text text-transparent">
            Logo
          </h1>
        </div>
        <div className="navlinks ml-auto mr-[7rem]">
          <ul className="flex gap-6 text-white">
            <li className="bg-gradient-to-t from-white to-cyan-700 bg-clip-text text-transparent transition duration-300 font-bold">
              Home
            </li>
            <li className="bg-gradient-to-t from-white to-cyan-700 bg-clip-text text-transparent hover:text-cyan-400 transition duration-300 font-bold">
              About
            </li>
            <li className="bg-gradient-to-t from-white to-cyan-700 bg-clip-text text-transparent hover:text-cyan-400 transition duration-300 font-bold">
              Potfolio
            </li>
            <li className="bg-gradient-to-t from-white to-cyan-700 bg-clip-text text-transparent hover:text-cyan-400 transition duration-300 font-bold">
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
