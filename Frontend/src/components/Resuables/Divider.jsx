// src/components/Divider.jsx
import React from "react";

const Divider = ({ text }) => {
  return (
    <div className="flex items-center justify-center my-8 bg-transparent text-3xl">
      <div className="border-t-2 border-sky-600 flex-grow "></div>
      <span className="mx-4  font-semibold">{text}</span>
      <div className="border-t-2 border-sky-600 flex-grow"></div>
    </div>
  );
};

export default Divider;
