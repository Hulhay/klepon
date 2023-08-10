import { IProductCart } from './product';

export interface ICartState {
  totalPrice: number;
  totalItem: number;
  products: IProductCart[];
}

export interface ICartBottomSheet {
  totalItem: number;
  totalPrice: number;
}
