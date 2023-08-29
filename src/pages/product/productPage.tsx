import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Loading } from '../../components';
import { useAppSelector } from '../../hooks';
import { productService } from '../../service';
import { CartBottomSheet, Header, ProductItem, StoreDetail } from './components';
import { Wrapper } from './productPageStyle';

const Product = () => {
  const { storeUUID } = useParams<{ storeUUID: string }>();
  const cart = useAppSelector((state) => state.cart);
  const { response, loading, request } = productService.getProducts(storeUUID as string);

  useEffect(() => {
    request();
  }, []);

  return (
    <>
      {loading ? (
        <Loading midScreen />
      ) : (
        <Header storeName={response?.data.store.store_name || ''} />
      )}
      <StoreDetail
        storeName={response?.data.store.store_name || ''}
        ownerName={response?.data.store.owner_name || ''}
        ownerPhoneNumber={response?.data.store.owner_phone_number || ''}
      />
      <Wrapper>
        {response?.data.product.map((product) => {
          return (
            <ProductItem
              key={product.uuid}
              uuid={product.uuid}
              name={product.name}
              price={product.price}
              imageURL={product.product_photo_url}
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
