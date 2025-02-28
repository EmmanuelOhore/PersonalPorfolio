import LinksCard from "../../ui/linksCard";
const GetInTouch = () => {
  return (
    <section
      data-aos="fade-right"
      className="bg-gradient-to-tr from-cyan-800/10 via-cyan-300/10 to-cyan-700/10 w-[35%] rounded-[2rem] p-8 "
    >
      <header>
        <div className="flex justify-between items-center">
          <h1 className="bg-gradient-to-t text-[2rem] font-bold from-white to-cyan-700 bg-clip-text text-transparent ">
            Get in Touch
          </h1>
          <i className="fa-solid fa-share-nodes text-[2rem] text-cyan-500"></i>
        </div>
        <p className="text-[15px]  text-[#838996] ">
          Have something to discuss? Send me a message and lets talk.
        </p>
      </header>
      {/* form   */}
      <form className="border-b-2 pb-7 mt-10 border-[#838996]">
        <div className="flex flex-col gap-4 mt-6 ">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex   items-center relative   z-30"
          >
            <i className="fa-solid fa-user absolute left-3 text-[#838996]"></i>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" Your Name"
              className="input w-full bg-[#262a37]/50 py-4 pl-10 rounded-xl text-white border border-transparent focus:border-cyan-700 focus:outline-none placeholder:text-[14px]"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex   items-center relative   z-30"
          >
            <i className=" absolute left-3 fa-solid fa-envelope text-[#838996]"></i>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" Your Email"
              className="input w-full bg-[#262a37]/50 py-4 pl-10 rounded-xl text-white border border-transparent focus:border-cyan-700 focus:outline-none placeholder:text-[14px]"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex    relative   z-30"
          >
            <i className="fa-solid fa-message absolute left-3 top-[1.3rem]   text-[#838996]"></i>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              className="input text-white h-[10rem] w-full  bg-[#262a37]/50 py-4 pl-10 rounded-xl resize-none border border-transparent focus:border-cyan-700 focus:outline-none placeholder:text-[14px]"
            ></textarea>
          </div>
          <button
            data-aos="fade-up"
            data-aos-delay="400"
            className="btn btn-cyan   p-4 font-bold text-white bg-gradient-to-tr from-cyan-500 rounded-xl via-cyan-700 to-cyan-800"
          >
            <i className="fa-solid fa-location-arrow pr-3"></i>
            Send Message
          </button>
        </div>
      </form>

      {/* connect wth me */}
      <div className="bg-gradient-to-b from-cyan-700/20 via-cyan-500/10 to-cyan-900/20 mt-16 rounded-[2rem] p-4 ">
        <header className="flex items-center">
          <i className="fa-solid fa-minus pr-2 text-[3rem] text-cyan-600"></i>
          <h1 className="font-bold text-[25px] text-white  capitalize ">
            Connect with me
          </h1>
        </header>
        <div className="links_container  ">
          <LinksCard
            title="Let's Connect"
            text={"on Linkedin"}
            icon="fa-linkedin-in"
            iconColor="#0A66C2"
            gradient={"from-[#0A66C2] to-[#0077B5]"}
          />
          <div className="flex gap-6">
            <div className="flex flex-col flex-1">
              <LinksCard
                title="instagram"
                text={"@Emmanuel"}
                icon="fa-instagram"
                iconColor="#E4405F"
                gradient={"from-[#833AB4] via-[#E4405F] to-[#FCAF45]"}
              />
              <LinksCard
                title="Youtube"
                text={"@you-tune"}
                icon="fa-youtube"
                iconColor="#FF0000"
                gradient={"from-[#FF0000] to-[#CC0000]"}
              />
            </div>
            <div className="flex flex-col flex-1">
              <LinksCard
                title="Github"
                text={"@Emmanuel"}
                icon="fa-github"
                iconColor={"#ffffff"}
                gradient={"from-[#333] to-[#24292e]"}
              />
              <LinksCard
                title="Tiktok"
                text={"on Linkedin"}
                icon="fa-tiktok"
                iconColor={"#ffffff"}
                gradient={"from-[#000000] via-[#25F4EE] to-[#FE2C55]"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
