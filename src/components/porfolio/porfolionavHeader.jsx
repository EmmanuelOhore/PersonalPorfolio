import { useNavigate } from "react-router-dom";

const NavHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center gap-8 pb-8">
      <button
        onClick={() => navigate("/")}
        className="text-[white] text-[16px] z-30 py-3 px-8 rounded-lg bg-gradient-to-r from-[#030014] to-cyan-700/20 border border-cyan-500/20 hover:scale-105 hover:border-cyan-500/40 transition-all duration-300"
      >
        <i className="fa-solid fa-arrow-left pr-2"></i>Back
      </button>
      <div className="flex gap-4 items-center">
        <h2 className="text-[16px] font-normal text-[#878292] capitalize">
          Projects
        </h2>
        <i className="fa-solid fa-angle-right text-[14px] text-[#878292]"></i>
        <h2 className="text-[18px] font-normal text-white capitalize">
          {title}
        </h2>
      </div>
    </header>
  );
};

export default NavHeader;
