import { ScrollToSetion } from "../constants";
import { navData } from "../constants";
import { useState } from "react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="flex px-16 flex-wrap items-center  py-4 bg-[#030014] laptop:px-8  tablet:px-4">
        <div className="logo">
          <h1 className="text-[2rem] font-extrabold bg-gradient-to-r from-white via-cyan-200 to-cyan-500 bg-clip-text text-transparent">
            Logo
          </h1>
        </div>
        <div className="navlinks ml-auto mr-[7rem] laptop:mr-[2rem] tablet:mr-0 phoneL:hidden">
          <ul className="flex gap-6 text-white z-30 relative ">
            {navData.map((item) => {
              return (
                <li
                  onClick={() => ScrollToSetion(item.section)}
                  key={item.id}
                  className="bg-gradient-to-t cursor-pointer from-white to-cyan-700 bg-clip-text text-transparent transition duration-300 font-bold tablet:text-[14px]"
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="hamburger hidden ml-auto phoneL:block"
          onClick={toggleNavBar}
        >
          <i className="fa-solid fa-bars cursor-pointer z-30 relative  text-[1.4rem] text-white phoneL:text-[1.2rem] phoneP:text-[1rem] "></i>
        </div>
        {isOpen && (
          <div className=" hidden basis-full mt-6 phoneP:mt-4 phoneL:flex flex-col items-center">
            <ul className=" gap-6 text-white z-30 relative flex flex-col items-center">
              {navData.map((item) => {
                return (
                  <li
                    onClick={() => ScrollToSetion(item.section)}
                    key={item.id}
                    className="bg-gradient-to-t cursor-pointer from-white to-cyan-700 bg-clip-text text-transparent transition duration-300 font-bold phoneL:text-[14px] phoneP:text-[12px]"
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
