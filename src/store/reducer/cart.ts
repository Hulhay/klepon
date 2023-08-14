import { createSlice } from '@reduxjs/toolkit';

import { ICartState } from '../../interface';
import { HandlerAddToCart, HandlerClearCart, HandlerRemoveFromCart } from '../helper';

const initialState: ICartState = {
  storeUUID: '',
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
    clearCart: HandlerClearCart,
  },
});

export const { addToCart, removeFromCart, clearCart } = cartReducer.actions;
export default cartReducer.reducer;
