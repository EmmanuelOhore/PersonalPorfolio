const LinksCard = ({ title, text, icon, iconColor, gradient, link }) => {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="flex relative  p-4 w-full group bg-[#353a48]/30  rounded-xl   items-center overflow-hidden gap-4 mt-6 phoneL:py-2">
          <span
            className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-30 origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-500 `}
          ></span>
          <div className={`relative p-2 rounded-lg phoneL:p-1 phoneL:px-2`}>
            <span
              className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-lg  opacity-30`}
            ></span>
            <i
              className={`fa-brands  ${icon} text-[20px] text-[${iconColor}] relative z-20 phoneL:text-[15px]`}
            ></i>
          </div>

          <div className="z-30">
            <h2 className="text-white text-[18px] font-bold capitalize phoneL:text-[15px] ">
              {title}
            </h2>
            <p className=" text-[14px] font-normal text-[#838996] capitalize phoneL:text-[12px]">
              {text}
            </p>
          </div>
        </div>
      </a>
    </>
  );
};

export default LinksCard;
