import PostComments from "../../ui/postCommets";
import { supabase } from "../../services/supabase";
import { useEffect } from "react";

const Commects = () => {
  useEffect(() => {
    const fetchData = async () => {
      let { data: orders, error } = await supabase.from("orders").select("*");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        console.log("Fetched orders:", orders);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="bg-gradient-to-tr from-cyan-800/10 via-cyan-300/10 to-cyan-700/10 flex-1 rounded-[2rem] p-4 ">
      {/* header */}
      <header className="px-5 py-5 items-center  flex gap-3 border-b border-b-slate-500">
        <div className="py-2 px-4 rounded-2xl bg-gradient-to-r  from-white/20 to-cyan-500/20">
          <i className="fa-solid fa-comment text-white text-[30px] text-cyan-500/90 "></i>
        </div>
        <h1 className="text-[23px] text-white font-bold capitalize">
          comments
        </h1>
        <h2 className="text-[20px] text-white font-bold">57</h2>
      </header>
      {/* form */}
      <form className="p-5 pt-5 z-30 relative flex flex-col gap-4">
        <div className="input_box flex flex-col gap-2 ">
          <label className="text-white text-[17px] font-bold capitalize">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            className="input w-full bg-[#262a37]/50 p-4 rounded-xl text-white border border-transparent focus:border-cyan-700 focus:outline-none placeholder:text-[14px]"
          />
        </div>
        <div className="input_box flex flex-col gap-2 ">
          <label className="text-white text-[17px] capitalize font-bold">
            messsage
          </label>
          <textarea
            type="text"
            name="message"
            id="name"
            placeholder="Enter Your messge here..."
            className="input w-full bg-[#262a37]/50 p-4 rounded-xl text-white border border-transparent focus:border-cyan-700 focus:outline-none placeholder:text-[14px] resize-none  h-[9rem]"
          />
        </div>
        {/* profilepic  */}
        <div className="profilepic flex flex-col gap-3">
          <h2 className="text-white text-[15px] font-bold capitalize">
            profile photo{" "}
            <span className="text-[#838996] font-normal">(optional) </span>
          </h2>
          <div className=" bg-[#262a37]/50 py-6  rounded-xl flex flex-col items-center justify-center gap-4">
            <button className="text-[14px]  relative group font-bold text-white p-4 w-[95%] rounded-xl  overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 -z-20 opacity-30 group-hover:opacity-55 transition-all duration-300"></span>
              <i className="fa-solid pr-2  fa-image"></i> Choose profile photo
            </button>
            <h2 className="text-[#838996] text-[12px] capitalize">
              max file size: 5MB
            </h2>
          </div>
        </div>
        <button className="btn btn-cyan mt-4   p-4 font-bold text-white bg-gradient-to-tr from-cyan-500 rounded-xl via-cyan-700 to-cyan-800">
          <i className="fa-solid fa-location-arrow pr-3"></i>
          Post Comment
        </button>
      </form>
      {/* post display section */}
      <div className=" h-[15rem] scrollbar_customization  z-30 relative overflow-y-scroll rounded-2xl p-4 flex flex-col gap-4">
        {/* posts */}
        <PostComments name="Emmauel" post="Hey eveyone" time="1" />
        <PostComments name="Samuel eburg" post="this is really good" time="1" />
        <PostComments
          name="Reheena tompson"
          post="wow, who made tis "
          time="3"
        />
        <PostComments name="Abraham michel" post="this is amazing " time="2" />
        <PostComments
          name="Clista roy"
          post="Can anyone see my post"
          time="4"
        />
      </div>
    </section>
  );
};

export default Commects;
