import Cards from "./cards";

const ExpericeCards = () => {
  return (
    <section className="flex  gap-6 px-[6rem] py-8 laptop:px-[1rem] justify-center tablet:py-3 tablet:px-[0.5rem] phoneL:flex-col phoneL:px-[1rem] phoneL:gap-3 phoneP:mt-5">
      <Cards
        num={9}
        header="total projects"
        text="innovative web solutions crafted"
        icon=" fa-code"
        fade="fade-down-right"
      />
      <Cards
        num={4}
        header="Services"
        text="Professional skills validated"
        icon=" fa-server"
        fade="fade-up"
      />
      <Cards
        num={3}
        header="Years of experience"
        text="Continous learning journey"
        icon=" fa-globe"
        fade="fade-down-left"
      />
    </section>
  );
};

export default ExpericeCards;
