import { useEffect, useState } from 'react';

import { Loading } from '../../components';
import { StoresResponse } from '../../interface';
import { storeService } from '../../service';
import { Search, Store } from './components';
import { Wrapper } from './homePageStyle';

const Home = () => {
  const [stores, setStores] = useState<StoresResponse[]>([]);
  const [page, setPage] = useState<number>(1);
  const [noData, setNoData] = useState<boolean>(false);
  const { response, loading, request } = storeService.getStores(page);

  const needToFetch = () => {
    return (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    );
  };

  useEffect(() => {
    setPage(page + 1);
    request();
  }, []);

  useEffect(() => {
    if (response !== undefined) {
      setStores((prev) => [...prev, ...response.data]);
      if (response?.meta.pagination.total_page === page) {
        setNoData(true);
      }
    }
  }, [response]);

  useEffect(() => {
    window.onscroll = () => {
      if (needToFetch() && !noData) {
        setTimeout(() => {
          request();
          setPage(page + 1);
        }, 500);
      }
    };
  }, [page]);

  return (
    <>
      <Search />
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
      {loading ? <Loading /> : ''}
    </>
  );
};

export default Home;
