import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="text-center my-10 w-fit mx-auto">
      <h2 className="text-2xl lg:text-[2rem] font-bold uppercase">{text}</h2>
      <div className="w-[80%] mx-auto  h-[3px] rounded-2xl bg-gradient-to-r  from-yellow-500 to-yellow-300 mb-2"></div>
    </div>
  );
};

export default Heading;
