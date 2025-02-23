import place from "../assets/place.png";
const Projects = () => {
  const projectDta = [
    {
      title: "Auto Chat Disord",
      desc: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara",
    },
    {
      title: "Auto Chat Disord",
      desc: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara",
    },
    {
      title: "Auto Chat Disord",
      desc: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara",
    },
    {
      title: "Auto Chat Disord",
      desc: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara",
    },
  ];
  return (
    <>
      <section className=" w-[80%] p-4 mx-auto   gap-[20px]  justify-between flex flex-wrap ">
        {projectDta.map((item, index) => {
          return (
            <div
              data-aos="fade-right"
              data-aos-delay={index * 50}
              key={index}
              style={{ width: "calc(33.33% - 20px)" }}
              className="z-20  relative flex p-5 justify-center group    flex-col gap-4 items-center rounded-2xl  cursor-pointer shadow-lg hover:scale-105 hover:border-cyan-800 border border-transparent transition-all duration-500  "
            >
              <span className="absolute inset-0 bg-gradient-to-br from-cyan-800 via-[#050215]  rounded-2xl opacity-50 group-hover:opacity-80 transition-all  duration-300 -z-10"></span>
              <header className="w-[100%] h-[13rem]">
                <img src={place} className="w-full h-full object-cover" />
              </header>
              <div className="content  flex flex-col gap-5">
                <div className="relative">
                  <h1 className="absolute bg-gradient-to-tr font-bold text-[19px] from-white to-cyan-600 bg-clip-text text-transparent">
                    {item.title}
                  </h1>
                  <br />
                </div>

                <p className="text-[14px] leading-[18px] text-[#838996]">
                  {item.desc}
                </p>
                <div className="flex justify-between items-center">
                  <h2 className="text-[12px] text-[#93C5FD]">
                    Live Demo
                    <i className="fa-solid fa-arrow-up-right-from-square text-[11px] pl-2"></i>
                  </h2>
                  <button className=" text-[12px] px-6 py-2 rounded-md text-[white] bg-gray-600/40">
                    Details
                    <i className="fa-solid pl-2 text-[11px] fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Projects;
