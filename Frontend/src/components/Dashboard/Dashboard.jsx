import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useSelector } from "react-redux";

const Dashboard = ({ children }) => {
  const { user } = useSelector((state) => state.loginsignup);

  return (
    <div className="flex h-screen bg-gray-100 ">
      <div className="sidebar flex-[0.14] flex flex-col justify-between bg-white">
        <h1 className="text-xl flex items-center gap-5 font-bold text-center p-3 bg-black  py-5 text-white shadow-sm">
          <Link to={"/"}>
            <IoIosArrowRoundBack
              size={30}
              className="hover:scale-125 transition-all duration-300"
            />
          </Link>
          <span>Dashboard</span>
        </h1>
        <div className="buttons px-5 text-left flex-[0.9] flex flex-col gap-2">
          <Link
            to={"/dashboard/profile"}
            className="p-3 text-left pl-8  text-lg focus:bg-sky-500 hover:bg-gray-100 rounded-sm font-semibold focus:text-white"
          >
            Profile
          </Link>
          {user.role == "admin" ? (
            <Link
              to={"/dashboard/products"}
              className="p-3 text-left pl-8  text-lg focus:bg-sky-500 hover:bg-gray-100 rounded-sm font-semibold focus:text-white"
            >
              Products
            </Link>
          ) : (
            ""
          )}
          <Link
            to={"/dashboard/orders"}
            className="p-3 text-left pl-8  text-lg focus:bg-sky-500 hover:bg-gray-100 rounded-sm font-semibold focus:text-white"
          >
            Orders
          </Link>
          <Link
            to={"/dashboard/shipping"}
            className="p-3 text-left pl-8  text-lg focus:bg-sky-500 hover:bg-gray-100 rounded-sm font-semibold focus:text-white"
          >
            Shipping
          </Link>
        </div>
      </div>
      <div className="main flex-[0.9] p-10 overflow-auto ">{children}</div>
    </div>
  );
};

export default Dashboard;
