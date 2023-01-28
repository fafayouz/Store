import { createSlice } from "@reduxjs/toolkit";
import { ConfirmInformation } from "../order/orderSlice";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};
export const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (product) =>
          product.slug === action.payload.slug &&
          product.size === action.payload.size
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.price;
    },

    // Remove item from cart :D
    removeItemFromCart: (state, action) => {
      const existingProduct = state.cartItems.find(
        (product) =>
          product.slug === action.payload.slug &&
          product.size === action.payload.size
      );
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          state.totalPrice -= existingProduct.price;
        } else {
          const index = state.cartItems.indexOf(existingProduct);
          state.cartItems.splice(index, 1);
          state.totalPrice -= existingProduct.price;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ConfirmInformation, (state) => {
      return initialState;
    });
  },
});

export const { addItemToCart, removeItemFromCart } = CartSlice.actions;

export default CartSlice.reducer;
