import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  products: null,
  productCount: null,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload.products;
      state.loading = action.payload.loading;
      state.productCount = action.payload.productCount;
      state.error = action.payload.error;
    },
  },
});

export const { getAllProducts } = productSlice.actions;
export default productSlice.reducer;
