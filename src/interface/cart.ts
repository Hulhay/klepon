import { IProductCart } from './product';

export interface ICartState {
  storeUUID: string;
  totalPrice: number;
  totalItem: number;
  products: IProductCart[];
}

export interface ICartBottomSheet {
  totalItem: number;
  totalPrice: number;
}
