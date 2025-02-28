import PostComments from "../../ui/postCommets";
import { formatDistanceToNow } from "date-fns";
import { supabase } from "../../services/supabase";
import { useEffect, useState } from "react";

const Commects = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [image, setImage] = useState(null);

  // fecth data on screen mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        let { data: orders, error } = await supabase
          .from("Comments")
          .select("*")
          .order("create_at", { ascending: false });

        setComments(orders);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [comments]);

  // function thats hanles adding a news comment
  const handleInsert = async (e) => {
    e.preventDefault(); //prevent refresh
    const { data, error } = await supabase
      .from("Comments")
      .insert([
        {
          name,
          message,
          image,
        },
      ])
      .select();
    setName("");
    setMessage("");
    setImage(null);
  };

  // funtion thast converts the timestamp to time ago
  const timeago = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };

  // funtion that handl the image selection
  const handleimage = () => {
    document.getElementById("fileInput").click();
  };

  const handleimageupload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <main className="bg-gradient-to-tr from-cyan-800/10 via-cyan-300/10 to-cyan-700/10 flex-1 rounded-[2rem] p-6 ">
      <section
        data-aos="fade-up"
        data-aos-delay="100"
        className="bg-gradient-to-tr from-cyan-800/20 via-cyan-300/10 to-cyan-700/20 flex-1 rounded-[2rem] p-2 "
      >
        {/* header */}
        <header
          data-aos="fade-down"
          data-aos-delay="50"
          className="px-5 py-5 items-center  flex gap-3 border-b border-b-slate-500"
        >
          <div className="py-2 px-4 rounded-2xl bg-gradient-to-r  from-white/20 to-cyan-500/20">
            <i className="fa-solid fa-comment text-white text-[30px] text-cyan-500/90 "></i>
          </div>
          <h1 className="text-[23px] text-white font-bold capitalize">
            comments
          </h1>
          <h2 className="text-[25px] text-white font-bold">{`( ${comments.length} )`}</h2>
        </header>
        {/* form */}
        <form
          onSubmit={handleInsert}
          className="p-5 pt-5 z-30 relative flex flex-col gap-4"
        >
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="input_box flex flex-col gap-2 "
          >
            <label className="text-white text-[17px] font-bold capitalize">
              Name
            </label>
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Enter Your Name"
              className="input w-full bg-[#262a37]/50 p-4 rounded-xl text-white border border-transparent focus:border-cyan-700 focus:outline-none placeholder:text-[14px]"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="input_box flex flex-col gap-2 "
          >
            <label className="text-white text-[17px] capitalize font-bold">
              messsage
            </label>
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              id="name"
              placeholder="Enter Your messge here..."
              className="input w-full bg-[#262a37]/50 p-4 rounded-xl text-white border border-transparent focus:border-cyan-700 focus:outline-none placeholder:text-[14px] resize-none  h-[9rem]"
            />
          </div>
          {/* profilepic  */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="profilepic flex flex-col gap-3"
          >
            <h2 className="text-white text-[15px] font-bold capitalize">
              profile photo{" "}
              <span className="text-[#838996] font-normal">(optional) </span>
            </h2>
            <div className=" bg-[#262a37]/50 py-6  rounded-xl flex flex-col items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleimage}
                className="text-[14px]  relative group font-bold text-white p-4 w-[95%] rounded-xl  overflow-hidden"
              >
                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  className="hidden"
                  onChange={handleimageupload}
                />
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-cyan-600 -z-20 opacity-30 group-hover:opacity-55 transition-all duration-300"></span>
                <i className="fa-solid pr-2  fa-image"></i> Choose profile photo
              </button>
              <h2 className="text-[#838996] text-[12px] capitalize">
                max file size: 5MB
              </h2>
            </div>
          </div>
          <button
            data-aos="fade-up"
            data-aos-delay="400"
            type="submit"
            className="btn btn-cyan mt-4   p-4 font-bold text-white bg-gradient-to-tr from-cyan-500 rounded-xl via-cyan-700 to-cyan-800"
          >
            <i className="fa-solid fa-location-arrow pr-3"></i>
            Post Comment
          </button>
        </form>
        {/* post display section */}
        <div className=" h-[20rem] scrollbar_customization  z-30 relative overflow-y-scroll rounded-2xl p-4 flex flex-col gap-4">
          {/* posts */}
          {comments.map((comment, item) => {
            return (
              <PostComments
                image={comment.image}
                key={item}
                name={comment.name}
                post={comment.message}
                time={timeago(comment.create_at)}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Commects;
