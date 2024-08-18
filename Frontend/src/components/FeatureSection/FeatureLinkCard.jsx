import React from "react";

const FeatureLinkCard = ({ text, imageSrc }) => {
  return (
    <div className="flex flex-col  items-center gap-1 lg:gap-5 lg:mb-20  ">
      <div
        className=" group flex flex-col relative   items-center
        h-[100px] w-[100px]
        lg:h-[300px]  lg:w-[300px]  bg-sky-700 rounded-full cursor-pointer shadow-md   transition-all duration-500"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          transform: "scale(1)",
        }}
      >
        <div className="overlay absolute top-0 w-full  transition-all duration-500 h-full bg-blue-950 opacity-0 group-hover:opacity-20" />
      </div>
      <p className="text-black text-sm whitespace-nowrap lg:text-2xl my-auto  shadow-2xl z-20">
        {text}
      </p>
    </div>
  );
};

export default FeatureLinkCard;
