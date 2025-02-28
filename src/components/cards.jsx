const Cards = ({ num, header, text, icon, fade }) => {
  const handlescroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      onClick={() => handlescroll("portfolio")}
      data-aos={fade}
      className="card_container group relative  w-[30%] flex flex-col gap-8 rounded-[1rem] px-[1.5rem] py-6 hover:scale-105 duration-300 transition-all laptop:gap-4 laptop:px-[1rem] tablet:gap-2 tablet:px-[.9rem] tablet:py-5 phoneL:w-full  phoneP:p-4 "
    >
      <span className=" absolute inset-0 z-0 bg-gradient-to-r from-white to-cyan-700 opacity-20 group-hover:opacity-30  rounded-[1rem] duration-300 transition-all "></span>
      <header className="flex items-center justify-between z-30">
        <div className="rounded-full bg-cyan-700/50 p-4 tablet:p-3 tablet:py-2 phoneL:p-3 phoneP:py-2 phoneP:px-3 ">
          <i
            className={`fa-solid ${icon} text-[white] text-[28px] laptop:text-[20px] tablet:text-[18px] phoneL:text-[19px] phoneP:text-[17px]`}
          ></i>
        </div>
        <h2
          data-aos="fade-up-left"
          className="text-white text-[38px] font-bold leading-[40px]  laptop:text-[30px] tablet:text-[25px] phoneL:text-[30px] phoneP:text-[25px]"
        >
          {num}
        </h2>
      </header>
      <div className="card_content flex flex-col gap-2 phoneP:gap-1">
        <h3
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-[15px] leading-[20px] font-bold text-[#838996] uppercase laptop:text-[13px] laptop:leading-[17px] phoneL:text-[14px] phoneP:text-[12px]"
        >
          {header}
        </h3>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex  justify-between items-center"
        >
          <p className="text-[12px] leading-[12px] font-normal text-[#ffffff] phoneL:text-[13px] phoneP:text-[11px]">
            {text}
          </p>
          <i className="fa-solid fa-arrow-up text-[13px] text-[#838996] rotate-45 laptop:text-[12px]"></i>
        </div>
      </div>
    </div>
  );
};

export default Cards;
