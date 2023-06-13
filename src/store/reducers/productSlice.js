import { createSlice } from '@reduxjs/toolkit';
import cartLocal from '../../utils/localStorage';

// PRODUCT LIST REDUX
const products = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    initProducts: (state, action) => {
      const data = action.payload;
      const carts = cartLocal.getCart() || [];

      data.map(item => {
        const idx = carts.findIndex(e => e?.id === item?.id)

        // check previously added item to set addedToCart = true
        state.push(
          {...item, addedToCart: idx >= 0}
        )
      })
    },
    updateProduct: (state, action) => {
      const {id, status} = action.payload;

      // check valid index
      if (id > 0 && id <= state.length) {
        state[id - 1].addedToCart = status;
      }
    },
  },
});

const { reducer, actions } = products;
export const { initProducts, updateProduct } = actions;
export default reducer;
