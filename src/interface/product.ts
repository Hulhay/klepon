import { Meta } from './base-service';

export interface IHeaderProduct {
  storeName: string;
}

export interface IProductCart {
  storeUUID: string;
  uuid: string;
  name: string;
  qty: number;
  price: number;
}

export interface IProduct {
  storeUUID: string;
  uuid: string;
  name: string;
  price: number;
  imageURL: string;
  isSoldOut: boolean;
}

export interface GetProductsResponse {
  meta: Meta;
  data: ProductsResponse;
}

export interface ProductsResponse {
  store: StoreProductsResponse;
  product: ProductsProductsResponse[];
}

export interface StoreProductsResponse {
  uuid: string;
  store_name: string;
  store_photo_url: string;
  owner_uuid: string;
  owner_name: string;
  owner_phone_number: string;
}

export interface ProductsProductsResponse {
  uuid: string;
  name: string;
  price: number;
  is_sold_out: boolean;
  product_photo_url: string;
}
