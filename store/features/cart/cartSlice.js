import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    Total: 0,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const pseudoId = new Date().getTime();

      state.cartItems.push({
        id: pseudoId,
        product: action.payload.product,
        quantity: action.payload.quantity,
        size: action.payload.size,
        totalPrice: action.payload.price,
      }),
        state.cartItems.reduce((total, cartItem) => {
          return (state.Total = cartItem.totalPrice + total);
        }, 0);
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.cartItemId
      );
      state.cartItems.reduce((total, cartItem) => {
        return (state.Total = cartItem.totalPrice + total);
      }, 0);
    },
  },
});


export const { addItemToCart, removeItemFromCart } = slice.actions;

export default slice.reducer;
