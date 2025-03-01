import { useNavigate } from "react-router-dom";

const NavHeader = ({ title }) => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center gap-8 pb-8 phoneL:gap-4 phoneP:pt-4">
      <button
        onClick={() => navigate("/")}
        className="text-[white] text-[16px] z-30 py-3 px-8 rounded-lg bg-gradient-to-r from-[#030014] to-cyan-700/20 border border-cyan-500/20 hover:scale-105 hover:border-cyan-500/40 transition-all duration-300 laptop:px-7 laptop:py-2 laptop:text-[14px] tablet:text-[12px] phoneL:px-5 phoneL:py-1 phoneL:text-[11px] phoneP:text-[10px] phoneP:px-4 phoneP:py-1"
      >
        <i className="fa-solid fa-arrow-left pr-2"></i>Back
      </button>
      <div className="flex gap-4 items-center laptop:gap-3 phoneL:gap-2">
        <h2 className="text-[16px] font-normal text-[#878292] capitalize laptop:text-[14px] tablet:text-[13px] phoneL:text-[12px] phoneP:text-[11px]">
          Projects
        </h2>
        <i className="fa-solid fa-angle-right text-[14px] text-[#878292] laptop:text-[12px] tablet:text-[10px] phoneP:text-[9px]"></i>
        <h2 className="text-[18px] font-normal text-white capitalize laptop:text-[14px] tablet:text-[13px] phoneL:text-[12px] phoneP:text-[11px]">
          {title}
        </h2>
      </div>
    </header>
  );
};

export default NavHeader;
