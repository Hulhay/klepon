import { SearchComponent } from '../../components';
import { lang } from '../../utils';
import { Store } from './components';
import { storeDummy } from './dummy';
import { Wrapper } from './homePageStyle';

const Home = () => {
  const stores = storeDummy;
  return (
    <>
      <SearchComponent placeholder={lang('home.search_placeholder')}></SearchComponent>
      <Wrapper>
        {stores.map((store) => {
          return (
            <Store
              key={store.uuid}
              storeUUID={store.uuid}
              storeImage={store.store_photo_url}
              storeName={store.store_name}
            />
          );
        })}
      </Wrapper>
    </>
  );
};

export default Home;
