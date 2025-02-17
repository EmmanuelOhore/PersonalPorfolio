import PropTypes from "prop-types";

// icon container
const IconButton = ({ icon, delay }) => (
  <div className="relative hover:scale-125 w-fit flex transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-white to-cyan-900 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div
      data-aos="fade-down"
      data-aos-delay={delay}
      className="relative p-4  bg-black/50 backdrop-blur-sm rounded-full border border-white/10"
    >
      <i
        className={`${icon} text-[24px]  bg-gradient-to-tr from-white to-cyan-900 bg-clip-text text-transparent`}
      ></i>
    </div>
  </div>
);

IconButton.propTypes = {
  icon: PropTypes.string,
  delay: PropTypes.string,
};
export default IconButton;
