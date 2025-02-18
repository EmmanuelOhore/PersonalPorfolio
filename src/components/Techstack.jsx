const TechStackList = () => {
  const techData = ["React", "JavaScript", "Tailwind", "Firebase"];

  return (
    <div className="flex py-4 gap-6">
      {techData.map((tech, index) => (
        <div
          data-aos="fade-right"
          data-aos-delay={`${index * 300}`}
          key={index}
          className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-gray-300 
                     hover:text-white transition duration-300 ease-in-out "
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default TechStackList;
