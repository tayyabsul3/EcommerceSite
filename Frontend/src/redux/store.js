import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./feactures/productSlice";
import productdetailSlice from "./feactures/productdetailSlice.js";
import loginsignupSlice from "./feactures/loginsignupSlice.js";
import drawerSlice from "./feactures/drawerSlice.js";
const store = configureStore({
  reducer: {
    product: productSlice,
    productDetails: productdetailSlice,
    loginsignup: loginsignupSlice,
    drawer: drawerSlice,
  },
});
export default store;
