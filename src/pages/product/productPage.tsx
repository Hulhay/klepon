import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import { CartBottomSheet, Header, ProductItem, StoreDetail } from './components';
import { productDummy } from './dummy';
import { Wrapper } from './productPageStyle';

const Product = () => {
  const { storeUUID } = useParams<{ storeUUID: string }>();
  const data = productDummy;
  const cart = useAppSelector((state) => state.cart);

  return (
    <>
      <Header storeName={data.store.store_name} />
      <StoreDetail
        storeName={data.store.store_name}
        ownerName={data.store.owner_name}
        ownerPhoneNumber={data.store.owner_phone_number}
      />
      <Wrapper>
        {data.menu.map((product) => {
          return (
            <ProductItem
              key={product.uuid}
              uuid={product.uuid}
              name={product.name}
              price={product.price}
              imageURL={product.photoURL}
              isSoldOut={product.is_sold_out}
              storeUUID={storeUUID || ''}
            />
          );
        })}
      </Wrapper>
      <CartBottomSheet
        storeUUID={storeUUID || ''}
        products={cart.products}
        totalItem={cart.totalItem}
        totalPrice={cart.totalPrice}
      />
    </>
  );
};

export default Product;
