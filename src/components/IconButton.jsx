import PropTypes from "prop-types";

// icon container
const IconButton = ({ icon, delay }) => (
  <div className="relative hover:scale-125 w-fit flex transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-white to-cyan-700 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div
      data-aos="fade-down"
      data-aos-delay={delay}
      className="relative p-4  bg-black/50 backdrop-blur-sm rounded-full border border-white/10 laptop:p-[.9rem] tablet:p-[.6rem] phoneL:p-[.5rem] phoneL:px-[.8rem] phoneP:p-[.4rem] phoneP:px-[.7rem]"
    >
      <i
        className={`${icon} text-[24px]  bg-gradient-to-tr from-white to-cyan-700 bg-clip-text text-transparent laptop:text-[20px] tablet:text-[17px] phoneL:text-[15px] phoneP:text-[13px]`}
      ></i>
    </div>
  </div>
);

IconButton.propTypes = {
  icon: PropTypes.string,
  delay: PropTypes.string,
};
export default IconButton;
