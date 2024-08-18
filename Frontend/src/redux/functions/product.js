import axios from "axios";
import { getAllProducts } from "../feactures/productSlice";
import { getProductDetails } from "../feactures/productdetailSlice.js";

// CRUD OPERTION CONTROLLES ON FRONTEDD SIDE FOR PRODUCT

export const getProduct = async (
  dispatch,
  keyword = "",
  page = 1,
  category = "All",
  price = [0, 25000]
) => {
  let link = "";
  if (category === "All") {
    link = `http://localhost:4000/products?keyword=${keyword}&page=${page}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
  } else {
    link = `http://localhost:4000/products?keyword=${keyword}&page=${page}&category=${category}&&price[gte]=${price[0]}&price[lte]=${price[1]}`;
  }

  try {
    dispatch(
      getAllProducts({
        loading: true,
        products: null,
      })
    );
    const { data } = await axios.get(link);

    dispatch(
      getAllProducts({
        loading: false,
        products: data.products,
        productCount: data.productCount,
      })
    );
  } catch (error) {
    dispatch(
      getAllProducts({
        loading: false,
        products: null,
        error: error.response.data.message,
      })
    );
  }
};
export const createProduct = async (dispatch, productData) => {
  dispatch(
    getProductDetails({
      loading: true,
      product: {},
      error: null,
    })
  );
  const config = { Headers: { "Content-Type": "application/json" } };
  try {
    const { data } = await axios.post(
      "http://localhost:4000/products",
      productData,
      { withCredentials: true },
      config
    );
    dispatch(
      getProductDetails({
        loading: false,
        product: data,
        error: null,
      })
    );
    getProduct(dispatch);
    alert("Data added successfully");
  } catch (error) {
    alert(error.response.data.message);
    dispatch(
      getProductDetails({
        loading: false,
        product: null,
        error: error.response.data.message,
      })
    );
  }
};
export const updateProduct = async (dispatch, productData) => {
  dispatch(
    getProductDetails({
      loading: true,
      product: {},
      error: null,
    })
  );
  const config = { Headers: { "Content-Type": "application/json" } };
  try {
    const { data } = await axios.patch(
      `http://localhost:4000/products/${productData._id}`,
      productData,
      { withCredentials: true },
      config
    );
    dispatch(
      getProductDetails({
        loading: false,
        product: data,
        error: null,
      })
    );
    alert("Data updated successfully");
    getProduct(dispatch);
  } catch (error) {
    alert(error.response.data.message);
    dispatch(
      getProductDetails({
        loading: false,
        product: null,
        error: error.response.data.message,
      })
    );
  }
};
export const deleteProduct = async (dispatch, id) => {
  dispatch(
    getProductDetails({
      loading: true,
      product: {},
      error: null,
    })
  );
  // const config = { Headers: { "Content-Type": "application/json" } };
  try {
    const { data } = await axios.delete(
      `http://localhost:4000/products/${id}`,
      { withCredentials: true }
    );
    console.log(data);
    dispatch(
      getProductDetails({
        loading: false,
        product: data,
        error: null,
      })
    );
    getProduct(dispatch);
    alert("Data deleted successfully");
  } catch (error) {
    alert(error.response.data.message);
    dispatch(
      getProductDetails({
        loading: false,
        product: null,
        error: error.response.data.message,
      })
    );
  }
};

export const productDetails = async (dispatch, id) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/products/${id}`);
    dispatch(
      getProductDetails({
        loading: false,
        product: data,
        error: null,
      })
    );
  } catch (error) {
    console.log(error);
    dispatch(
      getProductDetails({
        loading: false,
        product: null,
        error: error.response.data.message,
      })
    );
  }
};
