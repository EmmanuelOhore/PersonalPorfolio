import Cards from "./cards";

const ExpericeCards = () => {
  return (
    <section className="flex  gap-6 px-[6rem] py-8 ">
      <Cards
        num={12}
        header="total projects"
        text="innovative web solutions crafted"
        icon=" fa-code"
        fade="fade-down-right"
      />
      <Cards
        num={7}
        header="certificates"
        text="Professional skills validated"
        icon=" fa-ribbon"
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
