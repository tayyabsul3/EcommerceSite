import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  product: {},
  error: null,
};

const productdetailSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    getProductDetails: (state, action) => {
      state.product = action.payload.product;
      state.loading = action.payload.loading;
      state.error = action.payload.error;
    },
  },
});

export const { getProductDetails } = productdetailSlice.actions;
export default productdetailSlice.reducer;
