import { Meta } from './baseService';

export interface IStoreDetail {
  storeName: string;
  ownerName: string;
  ownerPhoneNumber: string;
}

export interface IStore {
  storeUUID: string;
  storeImage: string;
  storeName: string;
}

export interface GetStoresResponse {
  meta: Meta;
  data: StoresResponse[];
}

export interface StoresResponse {
  uuid: string;
  store_name: string;
  store_photo_url: string;
}
