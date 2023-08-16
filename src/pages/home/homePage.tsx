import axios from 'axios';
import { useEffect, useState } from 'react';

import { Loading } from '../../components';
import { IStore, StoresResponse } from '../../interface';
import { storeService } from '../../service';
import { Search, Store } from './components';
import { Wrapper } from './homePageStyle';

const Home = () => {
  const [stores, setStores] = useState<IStore[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [noData, setNoData] = useState<boolean>(false);

  const loadStoreList = (page: number) => {
    setLoading(true);
    setTimeout(() => {
      storeService
        .getStores(page)
        .then((res) => {
          const response = res.data as StoresResponse[];
          const storeResponse: IStore[] = response?.map((data) => {
            return {
              storeUUID: data.uuid,
              storeName: data.store_name,
              storeImage: data.store_photo_url,
            };
          });

          const storeList = stores.concat(storeResponse);
          setStores(storeList);

          const newPage = page + 1;
          setPage(newPage);

          if (storeResponse.length === 0) {
            setNoData(true);
          }
        })
        .catch((error) => {
          if (axios.isAxiosError(error)) {
            console.log(error.response?.data.meta.message);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }, 500);
  };

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (!noData) {
        loadStoreList(page);
      }
    }
  };

  useEffect(() => {
    loadStoreList(page);
  }, []);

  return (
    <>
      <Search />
      <Wrapper>
        {stores?.map((store) => {
          return (
            <Store
              key={store.storeUUID}
              storeUUID={store.storeUUID}
              storeImage={store.storeImage}
              storeName={store.storeName}
            />
          );
        })}
        {loading ? <Loading /> : ''}
      </Wrapper>
    </>
  );
};

export default Home;
