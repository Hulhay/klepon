import { memo } from 'react';
import { Link } from 'react-router-dom';

import storePlaceholder from '../../../../assets/store-placeholder.jpg';
import { lang } from '../../../../utils';
import { StoreWrapper, Wrapper } from './storeComponentStyle';

interface IStore {
  storeUUID: string;
  storeImage: string;
  storeName: string;
}

const Store = ({ storeUUID, storeImage, storeName }: IStore) => {
  return (
    <Wrapper>
      <Link to={`/store/${storeUUID}/product`}>
        <StoreWrapper>
          <img
            src={storeImage ? storeImage : storePlaceholder}
            alt={lang('home.alt_store_image_placeholder', { store_name: storeName })}
          />
          <p className="store-name">{storeName}</p>
        </StoreWrapper>
      </Link>
    </Wrapper>
  );
};

export default memo(Store);
