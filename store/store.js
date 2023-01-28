import { configureStore , combineReducers } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
import cartReducer from "../store/features/cart/cartSlice";
import orderReducer from "../store/features/order/orderSlice";



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({order: orderReducer, cart: cartReducer})


export const store = configureStore({
    reducer: rootReducer,

  });

export const persistor = persistStore(store)
