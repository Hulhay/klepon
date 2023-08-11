import { useAppSelector } from '../../hooks';
import { Header, ProductItem, StoreDetail } from './components';
import { CartBottomSheet } from './components/cart-bottom-sheet';
import { productDummy } from './dummy';
import { Wrapper } from './productPageStyle';

const Product = () => {
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
            />
          );
        })}
      </Wrapper>
      <CartBottomSheet
        products={cart.products}
        totalItem={cart.totalItem}
        totalPrice={cart.totalPrice}
      />
    </>
  );
};

export default Product;
