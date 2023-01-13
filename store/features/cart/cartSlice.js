import { createSlice } from "@reduxjs/toolkit";
import { ConfirmInformation } from "../order/orderSlice";


const initialState = {
  cartItems: [],
  Total: 0,
}
export const CartSlice = createSlice({
  name: "cart",
  initialState: initialState,
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
  extraReducers: (builder) => {
    builder.addCase(ConfirmInformation, (state) => {
      return initialState ;
    });
  }
});


export const { addItemToCart, removeItemFromCart } = CartSlice.actions;

export default CartSlice.reducer;
