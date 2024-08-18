import React from "react";

const FeatureCard = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center gap-5  bg-transpaent  transition-all duration-300 border-blue-950 border-2 p-10 shadow-md rounded-sm hover:bg-blue-950 hover:text-white ">
      {icon}
      <p className="lg:text-xl font-bold ">{text}</p>
    </div>
  );
};

export default FeatureCard;
