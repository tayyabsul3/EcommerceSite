import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiCart, BiEnvelope, BiPhone, BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DrawerOpener } from "../../redux/feactures/drawerSlice";
import {
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";

const Header = () => {
  const [SearchActive, setSearchActive] = useState(false);
  const [loggedIn, setloggedIn] = useState(false);
  const { products } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.loginsignup);

  function handledrawerOpening() {
    dispatch(DrawerOpener({ isOpen: true }));
  }
  function CaluateCartQuantity() {
    let totalQuantity = 0;
    products.forEach((product) => {
      totalQuantity += product.Quantity;
    });
    return totalQuantity;
  }

  useEffect(() => {
    setloggedIn(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <header className="bg-blue-950 fixed top-0 w-full whitespace-nowrap shadow-md   max-w-[2000px]  z-30 flex flex-col justify-between items-center  h-[10vh]">
      <div className="top h-[3vh] flex items-center justify-between w-[70%] ">
        <div className="contact hidden lg:flex items-center gap-5">
          <button className="contactEmail  flex items-center gap-1 text-gray-300 hover:text-gray-50">
            <BiEnvelope />
            <p>Contact</p>
          </button>
          <button className="openHours flex items-center gap-1 text-gray-300 hover:text-gray-50">
            <FaClock />
            <p>24 Hours</p>
          </button>
          <button className="mobileNumber flex items-center  gap-1 text-gray-300 hover:text-gray-50">
            <BiPhone />
            <p>+92 999 999 999 9</p>
          </button>
        </div>
        <div className="links flex items-center text-gray-300 gap-5">
          <p className="hover:text-gray-50">Store Manager</p>
          <div className="socials flex items-center gap-1">
            <FaFacebook title="facebook" />
            <FaInstagram title="Instagram" />
            <FaTwitter title="Twitter" />
            <FaMailBulk title="Email" />
            <FaPinterest title="Pinterest" />
            <FaLinkedin title="Linkedin" />
            <FaYoutube title="Youtube" />
          </div>
        </div>
      </div>

      <div className="middle  bg-gray-100 text-black w-full   z-30 flex justify-between items-center lg:px-4 h-[10vh] py-10">
        <div className="flex justify-between md:w-[70%] mx-auto lg:gap-40 gap-20">
          <marquee
            behavior=""
            direction=""
            className="flex-[0.5] 2xl:flex items-center hidden "
          >
            <h1 className="text-lg font-bold text-blue-900">
              Welome to <span className="text-xl  font-bold mx-2">Logo</span> -
              Electronic store and Marketplace
            </h1>
          </marquee>
          {/* <div className="text-center hidden  lg:flex gap-5 bg-blue-950 font-bold text-xl">
            <Link
              to={"/allproducts"}
              className="hover:text-sky-700 my-auto hover:scale-[1.1] transition-all"
            >
              Shop
            </Link>
            <button className="cursor-default">|</button>
            <div className="relative inline-block text-left">
              <div className="group">
                <button className="hover:scale-[1.1] transition-all   bg-blue-950 hover:text-sky-700 px-4 py-2 rounded-md focus:outline-none">
                  Categories
                </button>
                <div className="absolute left-[-800px] p-5 text-left  mt-2 bg-white   rounded-md shadow-2xl  group-hover:left-0 z-40 transition-all duration-500  text-sm  w-fit whitespace-nowrap">
                  <ul className="py-1">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-black hover:bg-gray-100"
                      >
                        Modules and Breakout Boards
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Robotics & Machines
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Batteries & Chargers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex items-center lg:flex-2">
            <Link
              to={"/"}
              className=" hover:scale-[1.1] transition-all whitespace-nowrap font-bold text-xl lg:text-3xl lg:mr-4"
            >
              Store Name
            </Link>
            {/* <button className="bg-green-500 hover:bg-green-600 bg-blue-950 py-2 px-4 rounded">
          Start Shopping Now!
        </button> */}
          </div>
          <div className="flex items-center gap-5 ">
            <div className="options flex gap-5 text-sky-700 mt-2 font-medium">
              {!isAuthenticated ? (
                <Link to="/Auth" className="hover:scale-110">
                  Login |{" "}
                </Link>
              ) : (
                <Link to="/dashboard/profile" className="hover:scale-110">
                  Dashboard |
                </Link>
              )}
            </div>
            {/* <div className="border rounded overflow-hidden flex ml-3">
              <input
                type="search"
                placeholder="Search for products"
                className="px-4 py-2 focus:border-none focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center px-4 border-l"
              >
                <BiSearch size={24} color="#000" />
              </button>
            </div> */}
            <button
              className=" relative text-blue-950 active:text-blue-400 pt-1 hover:scale-125 transition-all duration-300"
              onClick={handledrawerOpening}
            >
              <BsFillBagFill size={40} />
              <h1
                className="absolute text-white top-[50%] left-[50%]  px-2 rounded-full"
                style={{ transform: "translate(-50%, -30%)" }}
              >
                {CaluateCartQuantity()}
              </h1>
            </button>
            {/* <button>
              <AiOutlineUser
                size={24}
                color="#FFF"
                onClick={() => {
                  setprofileDropdown(!profileDropdown);
                }}
              />

              <div
                className={
                  profileDropdown
                    ? "bg-white p-5 flex rounded-md transition-all duration-500  shadow-2xl w-[10rem] flex-col gap-2 z-30 100 absolute right-5 top-20"
                    : "bg-white p-5 flex rounded-md  transition-all duration-500 shadow-2xl w-[10rem] flex-col gap-2 z-30 100 absolute right-[-200px] top-20"
                }
              >
                {loggedIn ? (
                  <div className="flex flex-col gap-1">
                    <Link to={"/dashboard/profile"}>
                      <button className="bg-transparent hover:bg-gray-100 w-full p-2">
                        Profile
                      </button>
                    </Link>
                    <Link to={"/dashboard/orders"}>
                      <button className="bg-transparent hover:bg-gray-100 w-full p-2">
                        Orders
                      </button>
                    </Link>
                  </div>
                ) : (
                  <Link to={"/Auth"}>Login</Link>
                )}
              </div>
            </button> */}
          </div>
        </div>
      </div>
      <div className="bottom bg-blue-950 w-full min-h-[5vh] max-h-[5vh] flex items-center">
        <div className="lg:w-[70%] mx-auto flex justify-between items-center">
          <div className="navLinks">
            <nav>
              <ul className="hidden lg:flex text-white gap-5 py-5 font-medium">
                <li>
                  <Link to="/allproducts">Shop</Link>
                </li>
                <li>
                  <Link to="">Batteries & Chargers</Link>
                </li>
                <li>
                  <Link to="">Modules & Breakout Boards </Link>
                </li>
                <li>
                  <Link to="">Robotics & Machines</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-10 relative items-center ml-[250px] sm:ml-[320px] lg:ml-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("searched");
              }}
              className="flex items-center"
            >
              <input
                type="search"
                placeholder="Search for products"
                className={
                  SearchActive
                    ? " focus:border-none focus:outline-none absolute right-[100px] px-5 rounded-md py-1 transition-all duration-500 lg:w-[400px]"
                    : " focus:border-none focus:outline-none absolute right-[-1000px] lg:w-[400px] transition-all duration-500 scale-0  "
                }
              />
            </form>
            <button
              type="submit"
              className="flex text-white   items-center justify-center px-4 "
            >
              <BiSearch
                size={20}
                color="#FFF"
                onClick={() => {
                  setSearchActive(!SearchActive);
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
