const MainText = () => {
  return (
    <div
      className="space-y-2 phoneL:mb-3 phoneP:mb-1"
      data-aos="fade-up"
      data-aos-delay="600"
    >
      <h1 className="text-5xl  font-bold tracking-tight laptop:text-[2.5rem] tablet:text-[2rem] tablet:leading-[1.7rem] phoneL:text-[1.8rem]  phoneL:leading-[1.3rem] phoneP:text-[1.4rem] phoneP:leading-[1rem]">
        <span className="relative inline-block">
          {/* Glow Effect */}
          <span className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-20"></span>
          {/* Gradient Text */}
          <span className="relative bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent ">
            Frontend
          </span>
        </span>
        <br />
        <span className="relative inline-block mt-2">
          {/* Glow Effect */}
          <span className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-20"></span>
          {/* Gradient Text */}
          <span className="relative bg-gradient-to-r from-cyan-200 to-cyan-500 bg-clip-text text-transparent ">
            Developer
          </span>
        </span>
      </h1>
    </div>
  );
};

export default MainText;
