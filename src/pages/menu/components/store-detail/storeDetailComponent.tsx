import { memo } from 'react';

import { Wrapper } from './storeDetailComponentStyle';

interface IStoreDetail {
  storeName: string;
  ownerName: string;
  ownerPhoneNumber: string;
}

const StoreDetail = ({ storeName, ownerName, ownerPhoneNumber }: IStoreDetail) => {
  return (
    <Wrapper>
      <p className="store-name">{storeName}</p>
      <p className="owner-name">{ownerName}</p>
      <p className="owner-phone-number">{ownerPhoneNumber}</p>
    </Wrapper>
  );
};

export default memo(StoreDetail);
