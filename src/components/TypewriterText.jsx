import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// type writer component
const TypewriteText = ({ input }) => {
  const [displayText, setDisplayText] = useState(input);

  useEffect(() => {
    let index = 0;
    if (input) {
      const Timer = setInterval(() => {
        if (index <= input.length) {
          setDisplayText(input.slice(0, index));
          index++;
        }
      }, 200);
      return () => clearInterval(Timer);
    }
  }, [input]);

  return (
    <div className="flex items-center  justify-center gap-2 ">
      <i className="fa-solid fa-globe text-[19px]  bg-gradient-to-tr from-white to-cyan-900 bg-clip-text text-transparent"></i>
      <span className="  bg-gradient-to-t  from-white  to-cyan-100/20 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
        <h1 className="   font-semibold leading-[32px] text-[20px] capitalize laptop:text-[18px] tablet:tablet:text-[16px] phoneL:text-[14px] phoneP:text-[12px]">
          {displayText}
        </h1>
      </span>
    </div>
  );
};

TypewriteText.propTypes = {
  input: PropTypes.string,
  onloadcomplete: PropTypes.func,
};
export default TypewriteText;
