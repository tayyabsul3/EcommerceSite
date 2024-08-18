import axios from "axios";
import { Login } from "../feactures/loginsignupSlice";
import { Cookies } from "react-cookie";

export const LoginFunction = async (dispatch, email, password) => {
  const cookies = new Cookies();

  dispatch(
    Login({
      loading: true,
    })
  );
  const config = { Headers: { "Content-Type": "application/json" } };
  try {
    const { data } = await axios.post(
      `http://localhost:4000/users/login`,
      {
        email: email,
        password: password,
      },
      config
    );
    cookies.set("token", data.token, {
      path: "/",
      expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    });

    dispatch(
      Login({
        loading: false,
        user: data.user,
        error: null,
        isAuthenticated: true,
      })
    );
  } catch (error) {
    dispatch(
      Login({
        loading: false,
        user: null,
        isAuthenticated: false,
        error: error.response.data.message,
      })
    );
  }
};

export const SignupFunction = async (dispatch, userData) => {
  dispatch(
    Login({
      loading: true,
    })
  );
  const config = { Headers: { "Content-Type": "multipart/form-data" } };
  try {
    const { data } = await axios.post(
      `http://localhost:4000/users/register`,
      userData,
      config
    );

    dispatch(
      Login({
        loading: false,
        user: data.user,
        error: null,
        isAuthenticated: true,
      })
    );
  } catch (error) {
    dispatch(
      Login({
        loading: false,
        user: null,
        isAuthenticated: false,
        error: error.response.data.message,
      })
    );
  }
};

export const Logout = async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/users/logout`);

    dispatch(
      Login({
        loading: false,
        user: null,
        error: null,
        isAuthenticated: false,
      })
    );
    console.log(data);
  } catch (error) {
    dispatch(
      Login({
        loading: false,
        user: null,
        isAuthenticated: false,
        error: error.response.data.message,
      })
    );
  }
};
export const getUser = async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/users/me`);

    dispatch(
      Login({
        loading: false,
        user: data.user,
        error: null,
        isAuthenticated: true,
      })
    );
    console.log(data);
  } catch (error) {
    dispatch(
      Login({
        loading: false,
        user: null,
        isAuthenticated: false,
        error: error.response.data.message,
      })
    );
  }
};
