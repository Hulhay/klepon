export interface IHeaderProduct {
  storeName: string;
}

export interface IProductCart {
  uuid: string;
  name: string;
  qty: number;
  price: number;
}

export interface IProduct {
  uuid: string;
  name: string;
  price: number;
  imageURL: string;
  isSoldOut: boolean;
}
