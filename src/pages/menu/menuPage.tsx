import { Header, MenuItem, StoreDetail } from './components';
import { menuDummy } from './dummy';
import { Wrapper } from './menuPageStyle';

const Menu = () => {
  const data = menuDummy;
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
            <MenuItem
              key={product.uuid}
              name={product.name}
              price={product.price}
              imageURL={product.photoURL}
              isSoldOut={product.is_sold_out}
            />
          );
        })}
      </Wrapper>
    </>
  );
};

export default Menu;
