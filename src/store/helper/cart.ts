import { PayloadAction } from '@reduxjs/toolkit';

import { ICartState, IProductCart } from '../../interface';

export const HandlerAddToCart = (
  state: ICartState,
  action: PayloadAction<IProductCart>,
) => {
  const existingProduct = state.products.find(
    (product) => product.uuid === action.payload.uuid,
  );

  if (existingProduct) {
    existingProduct.qty++;
  } else {
    state.products.push(action.payload);
  }

  state.totalItem++;
  state.totalPrice += action.payload.price;
  state.storeUUID = action.payload.storeUUID;
};

export const HandlerRemoveFromCart = (
  state: ICartState,
  action: PayloadAction<IProductCart>,
) => {
  const existingProduct = state.products.find(
    (product) => product.uuid === action.payload.uuid,
  );

  if (existingProduct) {
    existingProduct.qty--;
    state.totalItem--;
    state.totalPrice -= action.payload.price;
  }

  if (existingProduct?.qty === 0) {
    state.storeUUID = '';
    state.products = state.products.filter(
      (product) => product.uuid !== action.payload.uuid,
    );
  }
};

export const HandlerClearCart = (state: ICartState) => {
  state.products = [];
  state.storeUUID = '';
  state.totalItem = 0;
  state.totalPrice = 0;
};
