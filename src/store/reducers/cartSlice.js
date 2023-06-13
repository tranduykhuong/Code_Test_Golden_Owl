import { createSlice } from '@reduxjs/toolkit';
import cartLocal from '../../utils/localStorage';

// CART REDUX
const cart = createSlice({
  name: 'cart',
  initialState: {
    list: cartLocal.getCart() || [],
    totalPrice: cartLocal.getTotalPrice() || 0
  },
  reducers: {
    addToCart: (state, action) => {
      const data = action.payload;

      // check previously added item
      const idx = state.list.findIndex(item => item?.id === data?.id);
      if (idx >= 0) return;

      // push item to state
      state.list.push({
        ...data,
        addedToCart: true,
        count: 1
      })

      // update total price
      state.totalPrice += data?.price;

      // save to local
      cartLocal.saveCart(state.list);
      cartLocal.saveTotalPrice(state.totalPrice);
    },

    removeFromCart: (state, action) => {
      const id = action.payload;

      // check the existence of the product
      const idx = state.list.findIndex(item => item?.id === id);
      if (idx >= 0) {
        state.totalPrice -= (state.list[idx]?.count * state.list[idx]?.price);
        state.totalPrice = Math.max(0, state.totalPrice);
        state.list = state.list.filter((item)=> item.id != action.payload)
      
        // save to local
        cartLocal.saveCart(state.list);
        cartLocal.saveTotalPrice(state.totalPrice);
      }
    },
    
    updateCart: (state, action) => {
      const {id, count} = action.payload;

      // check the existence of the product
      const idx = state.list.findIndex(item => item?.id === id);
      if (idx >= 0) {
        state.totalPrice += ((count - state.list[idx]?.count) * state.list[idx]?.price);
        state.totalPrice = Math.max(0, state.totalPrice);
        state.list[idx].count = count;

        // save to local
        cartLocal.saveCart(state.list);
        cartLocal.saveTotalPrice(state.totalPrice);
      }
    },
  },
});

const { reducer, actions } = cart;
export const { addToCart, removeFromCart, updateCart } = actions;
export default reducer;
