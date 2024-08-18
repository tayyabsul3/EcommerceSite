import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import MetaData from "../../MetaData";
import { useDispatch, useSelector } from "react-redux";
import { LoginFunction, SignupFunction } from "../../redux/functions/user";
// import Loaader from "../../Loaader";
// import { Flip, toast } from "react-toastify";

const Auth = () => {
  const [tab, setTab] = useState(1);
  const [emailLogin, setLoginemail] = useState("");
  const [passwordLogin, setLoginpassword] = useState("");
  const [avatar, setavatar] = useState();
  const [avatarPreview, setavatarPreview] = useState("./product.png");
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.loginsignup
  );

  const loginshifter = useRef();
  const signupshifter = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function notify(message) {
    // toast.error(message, {
    //   position: "top-center",
    //   autoClose: 2000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   transition: Flip,
    // });
    alert(message);
  }

  function handleLogin(e) {
    e.preventDefault();
    dispatch(LoginFunction(dispatch, emailLogin, passwordLogin));
    setLoginemail("");
    setLoginpassword("");
  }

  function handleSignupChange(e) {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setavatarPreview(reader.result);
          setavatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setuser({ ...user, [e.target.name]: e.target.value });
    }
  }

  function handlesignup(e) {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(SignupFunction(dispatch, myForm));
  }

  function handleShift() {
    if (tab === 1) {
      loginshifter.current.classList.remove("active");
      signupshifter.current.classList.add("active");
    } else {
      loginshifter.current.classList.add("active");
      signupshifter.current.classList.remove("active");
    }
  }

  useEffect(() => {
    if (error) {
      notify(error);
    }
    if (isAuthenticated) {
      navigate("/dashboard/profile");
    }
  }, [dispatch, error, isAuthenticated, loading]);

  return (
    <Fragment>
      {loading ? (
        // <Loaader />
        "Loading......."
      ) : (
        <Fragment>
          {/* <MetaData title={"Login / SignUp "} /> */}
          <div className="flex flex-col items-center justify-center min-h-screen bg-sky-100">
            <div className="w-full max-w-md p-6 bg-white rounded-3xl shadow-lg">
              <div className="flex justify-between mb-6">
                <button
                  ref={loginshifter}
                  onClick={() => {
                    if (tab !== 1) {
                      setTab(1);
                      handleShift();
                    }
                  }}
                  className={`py-2 px-4 rounded-2xl ${
                    tab === 1 ? "bg-blue-950 text-white" : "bg-gray-200"
                  }`}
                >
                  Login
                </button>
                <button
                  ref={signupshifter}
                  onClick={() => {
                    if (tab !== 2) {
                      setTab(2);
                      handleShift();
                    }
                  }}
                  className={`py-2 px-4 rounded-2xl ${
                    tab === 2 ? "bg-blue-950 text-white" : "bg-gray-200"
                  }`}
                >
                  Signup
                </button>
              </div>
              {tab === 1 && (
                <div className="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="formfield">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={emailLogin}
                        placeholder="Enter email..."
                        required
                        onChange={(e) => setLoginemail(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>
                    <div className="formfield">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter password..."
                        value={passwordLogin}
                        required
                        onChange={(e) => setLoginpassword(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>
                    <div className="flex justify-between">
                      <Link
                        to="/password/forgot"
                        className="text-sm bg-blue-950 hover:underline"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="mt-6">
                      <input
                        type="submit"
                        value={"Login"}
                        className="w-full py-2 px-4 bg-blue-950 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </form>
                </div>
              )}
              {tab === 2 && (
                <div className="signup">
                  <form onSubmit={handlesignup} className="space-y-4">
                    <div className="formfield">
                      <label
                        htmlFor="Name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        UserName
                      </label>
                      <input
                        type="text"
                        id="Name"
                        name="name"
                        placeholder="Enter Username..."
                        required
                        onChange={handleSignupChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>
                    <div className="formfield">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter email..."
                        required
                        onChange={handleSignupChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>
                    <div className="formfield">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        placeholder="Enter password..."
                        onChange={handleSignupChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      />
                    </div>
                    <div className="formfield">
                      <label
                        htmlFor="avatar"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Profile
                      </label>
                      <img
                        src={avatarPreview}
                        alt="Avatar preview"
                        className="w-24 h-24 object-cover rounded-full mb-2"
                      />
                      <input
                        type="file"
                        name="avatar"
                        id="avatar"
                        onChange={handleSignupChange}
                        className="mt-1 block w-full text-sm bg-blue-950 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg file:text-sm file:font-semibold file:bg-sky-100 hover:file:bg-sky-200"
                      />
                    </div>
                    {/* <div className="flex justify-between">
                      <p className="text-sm text-gray"></p> */}
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">
                        Already have an Account?
                      </p>
                      <Link
                        onClick={() => {
                          setTab(1);
                          handleShift();
                        }}
                        className="bg-blue-950 hover:underline"
                      >
                        Login
                      </Link>
                    </div>
                    <div className="mt-6">
                      <input
                        type="submit"
                        value={"SignUp"}
                        className="w-full py-2 px-4 bg-blue-950 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Auth;
