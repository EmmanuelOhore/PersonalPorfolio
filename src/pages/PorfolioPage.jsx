import PortfolioProjects from "../components/porfolioProjects";

function PorfolioHeader() {
  return (
    <main id="portfolio" className="pt-[6rem] flex flex-col ">
      <section data-aos="fade-up" className="flex flex-col ">
        <header className=" text-center">
          <h1 className=" inline-block text-[48px] font-bold leading-[45px] relative laptop:text-[2.5rem] phoneL:text-[1.8rem] phoneP:text-[1.4rem]  ">
            <span className="bg-gradient-to-t from-white to-cyan-500 absolute -inset-5 opacity-30 blur-xl"></span>
            <span className="bg-gradient-to-t  from-cyan-200 to-cyan-500 bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
          </h1>
        </header>
        <p className="text-[18px] w-1/2 mx-auto mt-6 text-[#838996] tracking-wide  text-center laptop:text-[15px] laptop:w-[60%] tablet:w-[70%] tablet:text-[14px] phoneL:mt-2  phoneL:w-[90%] phoneL:text-[12px] phoneP:w-full phoneP:px-2 phoneP:text-[9px] ">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path
        </p>
      </section>
      {/* portfolio section */}

      <PortfolioProjects />
    </main>
  );
}

export default PorfolioHeader;
