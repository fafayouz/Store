import { createSlice } from "@reduxjs/toolkit";

export const OrderSlice = createSlice({
  name: "order",
  initialState: {
    Information: [],
    allOrders:[],
    step: 0,
  },
  reducers: {
        addInformation: (state , action) => {
            state.Information.push(action.payload);
            state.step = 1
        },
        EditInformation:(state , action) => {
          state.Information.shift();
          state.step = 0
        },
        ConfirmInformation:(state , action) => {
          state.allOrders.push(state.Information[0])
        }
     
  },
});


export const {addInformation , EditInformation , ConfirmInformation} = OrderSlice.actions;

export default OrderSlice.reducer;
