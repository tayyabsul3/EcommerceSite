import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const [editProfile, seteditProfile] = useState(false);
  const [Profilename, setProfilename] = useState("");
  const [ProfileEmail, setProfileEmail] = useState("");
  const [Avatar, setAvatar] = useState("");
  const { user } = useSelector((state) => state.loginsignup);
  const [PasswordProfile, setPasswordProfile] = useState("");
  const [bio, setbio] = useState("");

  function ToggleProfileEdit() {
    seteditProfile(!editProfile);
  }

  useEffect(() => {
    setProfilename(user.name ? user.name : "Guest");
    setProfileEmail(user.email ? user.email : "Guest@gmail.com");
    setPasswordProfile(user.password ? user.password : ".........");
    setAvatar(
      user.avatar ? (
        user.avatar.url
      ) : (
        <HiUserCircle size={100} className="bg-blue-950 " />
      )
    );
    setbio(user.bio ? user.bio : "lorem lipsum");
  }, []);
  return (
    <div className="bg-white p-10 rounded-lg px-40  tracking-tighter text-left">
      {editProfile ? (
        <div className="data flex flex-col gap-10">
          <div className="flex justify-between">
            {!Avatar ? (
              <HiUserCircle size={100} className="bg-blue-950 " />
            ) : (
              <img
                src={Avatar}
                className="w-40 h-40  object-cover rounded-full"
                alt="Profile.png"
              />
            )}
            <button>
              <input
                type="text"
                placeholder="Enter Image url "
                value={Avatar}
                onChange={(e) => setAvatar(e.target.value)}
                className="bg-sky-100 p-3 rounded-lg text-[1rem] w-full flex-[0.5]"
              />
            </button>
          </div>

          <div className="flex gap-20 justify-between border-b py-10">
            <h1 className="flex-auto text-2xl">Name</h1>
            <input
              type="text"
              value={Profilename}
              onChange={(e) => setProfilename(e.target.value)}
              className="bg-sky-100 p-3 rounded-lg text-[1rem] flex-[0.5]"
            />
          </div>
          <div className="flex gap-20 justify-between border-b py-10">
            <h1 className="flex-auto text-2xl">Bio</h1>
            <input
              type="text"
              value={bio}
              onChange={(e) => setbio(e.target.value)}
              className="bg-sky-100 p-3 rounded-lg text-[1rem] flex-[0.5]"
            />
          </div>
          <div className="flex gap-20 justify-between border-b py-10">
            <h1 className="flex-auto text-2xl">Email</h1>
            <input
              type="email"
              value={ProfileEmail}
              onChange={(e) => setProfileEmail(e.target.value)}
              className="bg-sky-100 p-3 rounded-lg text-[1rem] flex-[0.5]"
            />
          </div>
          {/* <div className="flex gap-20 justify-between border-b py-10">
            <h1 className="flex-auto text-2xl">Password</h1>
            <input
              type="text"
              value={PasswordProfile}
              onChange={(e) => setPasswordProfile(e.target.value)}
              className="bg-sky-100 p-3 rounded-lg text-[1rem]  flex-[0.5]"
            />
          </div> */}

          <div>
            <button
              className="bg-blue-950 p-3 rounded-lg px-10 my-10 mx-5 text-white active:bg-gray-100 active:text-black"
              onClick={ToggleProfileEdit}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="data flex flex-col ga-10">
          <div className="flex ">
            {!Avatar ? (
              <HiUserCircle size={100} className="bg-blue-950 " />
            ) : (
              <img
                src={Avatar}
                className="w-40 h-40  object-cover rounded-full"
                alt="Profile.png"
              />
            )}
          </div>

          <div className="flex gap-20 justify-between border-b py-10">
            <h1 className="flex-auto text-2xl">Name</h1>
            <p className="flex-[0.5]">{user.name ? user.name : Profilename}</p>
          </div>
          <div className="flex gap-20 justify-between border-b py-10">
            <h1 className="flex-auto text-2xl">Bio</h1>
            <p className="flex-[0.5]">{user ? bio : "..."}</p>
          </div>
          <div className="flex gap-20 justify-between border-b py-10">
            <h1 className="flex-auto text-2xl">Email</h1>
            <p className="flex-[0.5]">
              {user ? user.email : "Guest@gmail.com"}
            </p>
          </div>
          <div className="flex gap-20 justify-between border-b py-10">
            <h1 className="flex-auto text-2xl">Password</h1>
            <p className="flex-[0.5]">{user ? user.password : "..."}</p>
          </div>
          {!user ? (
            <div>
              <Link
                to={"/Auth"}
                className="bg-blue-950 p-3 rounded-lg px-10 my-10 mx-5 text-white active:bg-gray-100 active:text-black"
                onClick={ToggleProfileEdit}
              >
                Login
              </Link>
              <Link
                to={"/Auth"}
                className="bg-gray-100 p-3 rounded-lg px-10 my-10 mx-5 active:bg-blue-950 active:text-white"
              >
                SignUp
              </Link>
            </div>
          ) : (
            <div>
              <button
                className="bg-blue-950 p-3 rounded-lg px-10 my-10 mx-5 text-white active:bg-gray-100 active:text-black"
                onClick={ToggleProfileEdit}
              >
                Edit Profile{" "}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
