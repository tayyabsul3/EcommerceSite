import React from "react";

const InfoCard = ({ logo: Logo, title, description }) => {
  return (
    <div className="flex flex-col items-center  lg:p-4 bg-transparent  text-black rounded-lg ">
      <Logo className="lg:w-12 lg:h-12 mb-2" />
      <h3 className="lg:text-lg font-semibold text-center">{title}</h3>
      <p className="text-center text-xs">{description}</p>
    </div>
  );
};

export default InfoCard;
