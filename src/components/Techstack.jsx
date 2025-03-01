const TechStackList = () => {
  const techData = ["React", "JavaScript", "Tailwind", "Supabase"];

  return (
    <div className="flex py-2 gap-6 tablet:gap-4 phoneL:gap-2">
      {techData.map((tech, index) => (
        <div
          data-aos="fade-right"
          data-aos-delay={`${index * 300}`}
          key={index}
          className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-gray-300 
                     hover:text-white transition duration-300 ease-in-out  laptop:text-[.7rem] laptop:px-3 laptop:py-1.5 phoneL:py-0.5 phoneL:text-[.6rem] phoneP:text-[.55rem] phoneP:py-0"
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default TechStackList;
