const Cards = ({ num, header, text, icon, fade }) => {
  return (
    <div
      data-aos={fade}
      className="card_container group relative  w-[30%] flex flex-col gap-8 rounded-[1rem] px-[1.5rem] py-6 hover:scale-105 duration-300 transition-all "
    >
      <span className=" absolute inset-0 z-0 bg-gradient-to-r from-white to-cyan-700 opacity-20 group-hover:opacity-30  rounded-[1rem] duration-300 transition-all "></span>
      <header className="flex items-center justify-between z-30">
        <div className="rounded-full bg-cyan-700/50 p-4">
          <i className={`fa-solid ${icon} text-[white] text-[28px] `}></i>
        </div>
        <h2
          data-aos="fade-up-left"
          className="text-white text-[38px] font-bold leading-[40px] "
        >
          {num}
        </h2>
      </header>
      <div className="card_content flex flex-col gap-2">
        <h3
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[15px] leading-[20px] font-bold text-[#838996] uppercase"
        >
          {header}
        </h3>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex  justify-between items-center"
        >
          <p className="text-[12px] leading-[12px] font-normal text-[#ffffff]">
            {text}
          </p>
          <i className="fa-solid fa-arrow-up text-[13px] text-[#838996] rotate-45"></i>
        </div>
      </div>
    </div>
  );
};

export default Cards;
