import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  products: [],
};

const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    DrawerOpener: (state, action) => {
      state.isOpen = action.payload.isOpen;
    },
    UpdateProducts: (state, action) => {
      const newProduct = action.payload.product;
      const qty = action.payload.qty;

      // Check if the product already exists in the cart
      const index = state.products.findIndex((p) => p._id === newProduct._id);

      if (index !== -1) {
        // Product is already in the cart, update its quantity
        state.products[index] = {
          ...state.products[index],
          Quantity: state.products[index].Quantity + qty,
        };
      } else {
        // Product is not in the cart, add it
        state.products.push({ ...newProduct, Quantity: qty });
      }
    },
    removeaProduct: (state, action) => {
      const { product } = action.payload;
      state.products = state.products.filter((p) => p._id !== product._id);
    },
    IncreaseQuantity: (state, action) => {
      const { product } = action.payload;
      const index = state.products.findIndex((p) => p.name === product.name);
      if (index !== -1) {
        state.products[index] = {
          ...state.products[index],
          Quantity: state.products[index].Quantity + 1,
        };
      }
    },
    DecreaseQuantity: (state, action) => {
      const { product } = action.payload;
      const index = state.products.findIndex((p) => p.name === product.name);
      if (index !== -1 && state.products[index].Quantity > 1) {
        state.products[index] = {
          ...state.products[index],
          Quantity: state.products[index].Quantity - 1,
        };
      }
    },
  },
});

export const {
  DrawerOpener,
  UpdateProducts,
  removeaProduct,
  IncreaseQuantity,
  DecreaseQuantity,
} = drawerSlice.actions;
export default drawerSlice.reducer;
