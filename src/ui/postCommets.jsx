const PostComments = ({ name, post, time, image }) => {
  return (
    <div className=" flex items-center justify-between rounded-2xl px-6 p-5 bg-[#262a37]/50 hover:bg-[#262a37]/80  transition-all duration-300 phoneL:px-3 phoneL:py-4">
      <div className="chatinfo flex items-center gap-4">
        <div className="profile_pic">
          {image ? (
            <div className="bg-[#262a37]/50 w-[40px] overflow-hidden h-[40px] rounded-full phoneL:w-[30px] phoneL:h-[30px]">
              <img
                src={image}
                alt="profileic"
                className="w-full h-full object-cover"
              ></img>
            </div>
          ) : (
            <i className="text-cyan-700 fa-regular fa-circle-user text-[30px] phoneL:text-[25px]"></i>
          )}
        </div>
        <div>
          <h1 className="text-white text-[16px] font-medium  phoneL:text-[13px]">
            {name}
          </h1>
          <p className="text-[#C1C4CC] text-[14px] font-semibold phoneL:text-[12px]  ">
            {post}
          </p>
        </div>
      </div>
      <p className="text-[#9399A6] text-[12px] font-normal phoneL:text-[10px]">
        {time}
      </p>
    </div>
  );
};

export default PostComments;
