const LinksCard = ({ title, text, icon, iconColor, gradient }) => {
  return (
    <>
      <div className="flex relative  p-4 w-full group bg-[#353a48]/30  rounded-xl   items-center overflow-hidden gap-4 mt-6">
        <span
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-30 origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-500 `}
        ></span>
        <div className={`relative p-2 rounded-lg `}>
          <span
            className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-lg  opacity-30`}
          ></span>
          <i
            className={`fa-brands ${icon} text-[20px] text-[${iconColor}] relative z-20`}
          ></i>
        </div>

        <div className="z-30">
          <h2 className="text-white text-[18px] font-bold capitalize ">
            {title}
          </h2>
          <p className=" text-[14px] font-normal text-[#838996] capitalize">
            {text}
          </p>
        </div>
      </div>
    </>
  );
};

export default LinksCard;
