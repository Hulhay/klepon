import { createSlice } from '@reduxjs/toolkit';

import { ICartState } from '../../interface';
import { HandlerAddToCart, HandlerRemoveFromCart } from '../helper';

const initialState: ICartState = {
  products: [],
  totalItem: 0,
  totalPrice: 0,
};

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: HandlerAddToCart,
    removeFromCart: HandlerRemoveFromCart,
  },
});

export const { addToCart, removeFromCart } = cartReducer.actions;
export default cartReducer.reducer;
