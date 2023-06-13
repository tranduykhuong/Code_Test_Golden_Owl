import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice';
import cartReducer from './reducers/cartSlice';

const rootReducer = {
  products: productReducer,
  carts: cartReducer
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
