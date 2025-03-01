import LinksCard from "../../ui/linksCard";
import { useState } from "react";
const GetInTouch = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section
      data-aos="fade-right"
      className="bg-gradient-to-tr from-cyan-800/10 via-cyan-300/10 to-cyan-700/10 w-[35%] rounded-[2rem] p-8 laptop:w-[40%] laptop:px-3 laptop:py-6 tablet:w-[100%] tablet:p-6 phoneL:px-3 phoneL:py-6 phoneL:rounded-[1rem] phoneP:py-3"
    >
      <header>
        <div className="flex justify-between items-center">
          <h1 className="bg-gradient-to-t text-[2rem] font-bold from-white to-cyan-700 bg-clip-text text-transparent phoneL:text-[1.5rem]  phoneP:text-[1.3rem]">
            Get in Touch
          </h1>
          <i className="fa-solid fa-share-nodes text-[2rem] text-cyan-500 phoneL:pr-[1rem] phoneP:text-[1.5rem]"></i>
        </div>
        <p className="text-[15px]  text-[#838996] phoneL:text-[13px] phoneP:text-[10px] phoneP:mt-2">
          Have something to discuss? Send me a message and lets talk.
        </p>
      </header>
      {/* form   */}
      <form
        action={"https://formspree.io/f/mgvogvnj"}
        method="POST"
        className="border-b-2 pb-7 mt-10 border-[#838996] phoneL:mt-5 phoneL:pb-4 phoneP:mt-4"
      >
        <div className="flex flex-col gap-4 mt-6 phoneL:mt-3 phoneP:gap-2">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex   items-center relative   z-30"
          >
            <i className="fa-solid fa-user absolute left-3 text-[#838996] phoneL:text-[13px] phoneP:text-[11px] phoneP:top-[.8rem] "></i>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              placeholder=" Your Name"
              className="input laptop:text-[15px] tablet:text-[13px] phoneL:text-[11px] phoneP:text-[10px] w-full bg-[#262a37]/50 py-4 pl-10 rounded-xl text-white border border-transparent focus:border-cyan-700 focus:outline-none placeholder:text-[14px] phoneL:placeholder:text-[13px] phoneL:py-3 phoneP:placeholder:text-[11px] phoneP:pl-8 phoneP:py-2"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex   items-center relative   z-30"
          >
            <i className=" absolute left-3 fa-solid fa-envelope text-[#838996] phoneL:text-[13px]  phoneP:text-[11px] phoneP:top-[.8rem]"></i>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              placeholder=" Your Email"
              className="input laptop:text-[15px] tablet:text-[13px] phoneL:text-[11px] phoneP:text-[10px] w-full bg-[#262a37]/50 py-4 pl-10 rounded-xl text-white border border-transparent focus:border-cyan-700 focus:outline-none placeholder:text-[14px] phoneL:placeholder:text-[13px] phoneL:py-3 phoneP:placeholder:text-[11px] phoneP:pl-8 phoneP:py-2"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex    relative   z-30"
          >
            <i className="fa-solid fa-message absolute left-3 top-[1.3rem]   text-[#838996] phoneL:text-[13px]  phoneP:text-[11px] phoneP:top-[.8rem]"></i>
            <textarea
              required
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              placeholder="Enter your message"
              className="input laptop:text-[15px] tablet:text-[13px] phoneL:text-[11px] phoneP:text-[10px] text-white h-[10rem] w-full  bg-[#262a37]/50 py-4 pl-10 rounded-xl resize-none border border-transparent focus:border-cyan-700 focus:outline-none placeholder:text-[14px] phoneL:placeholder:text-[13px] phoneL:h-[8rem]  phoneP:placeholder:text-[11px] phoneP:pl-8 phoneP:py-2 phoneP:h-[6rem]"
            ></textarea>
          </div>
          <button
            data-aos="fade-up"
            data-aos-delay="400"
            className="btn btn-cyan   p-4 font-bold text-white bg-gradient-to-tr from-cyan-500 rounded-xl via-cyan-700 to-cyan-800 phoneL:p-3 phoneL:text-[15px] phoneP:text-[13px] phoneP:p-2 phoneP:rounded-lg"
          >
            <i
              onClick={handleSubmit}
              className="fa-solid fa-location-arrow pr-3  phoneL:text-[15px] phoneP:text-[13px]"
            ></i>
            Send Message
          </button>
        </div>
      </form>

      {/* connect wth me */}
      <div className="bg-gradient-to-b from-cyan-700/20 via-cyan-500/10 to-cyan-900/20 mt-16 rounded-[2rem] p-4 phoneL:mt-10 phoneL:rounded-[1rem] phoneP:px-1">
        <header className="flex items-center">
          <i className="fa-solid fa-minus pr-2 text-[3rem] text-cyan-600 phoneL:text-[2rem] phoneL:pr-4 phoneP:text-[1.5rem]"></i>
          <h1 className="font-bold text-[25px] text-white  capitalize phoneL:text-[20px] phoneP:text-[16px] ">
            Connect with me
          </h1>
        </header>
        <div className="links_container  ">
          <LinksCard
            title="Let's Connect"
            link={"https://www.linkedin.com/in/emmanuel-ohore/"}
            text={"on Linkedin"}
            icon="fa-linkedin-in"
            iconColor="#ffffff"
            gradient={"from-[#0A66C2] to-[#0077B5]"}
          />
          <div className="flex gap-6 phoneP:gap-2 ">
            <div className="flex flex-col flex-1">
              <LinksCard
                title="instagram"
                link="https://www.instagram.com/emmanuelohore/"
                text={"@Emmanuel"}
                icon="fa-instagram"
                iconColor="#ffffff"
                gradient={"from-[#833AB4] via-[#E4405F] to-[#FCAF45]"}
              />
              <LinksCard
                title="facebook"
                link={"https://web.facebook.com/emmanuel.ohore.3"}
                text={"@you-tune"}
                icon="fa-facebook"
                iconColor="#ffffff"
                gradient={"from-[#1877F2] to-[#0D47A1]"}
              />
            </div>
            <div className="flex flex-col flex-1">
              <LinksCard
                title="Github"
                link={"https://github.com/EmmanuelOhore"}
                text={"@Emmanuel"}
                icon="fa-github"
                iconColor={"#ffffff"}
                gradient={"from-[#333] to-[#24292e]"}
              />
              <LinksCard
                title="Tiktok"
                link={"https://www.tiktok.com/@melio_das032?lang=en"}
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
