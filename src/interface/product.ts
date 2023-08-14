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
