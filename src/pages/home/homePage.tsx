import { useEffect, useState } from 'react';

import { Loading } from '../../components';
import { GetStoresResponse } from '../../interface';
import { GetStores } from '../../service';
import { Search, Store } from './components';
import { Wrapper } from './homePageStyle';

const Home = () => {
  const [stores, setStores] = useState<GetStoresResponse>();
  const [keywordRequest, setKeywordRequest] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    GetStores(keywordRequest)
      .then((res) => {
        setStores(res);
      })
      .finally(() => setLoading(false));
  }, [keywordRequest]);

  return (
    <>
      <Search setKeywordRequest={setKeywordRequest} />
      {loading ? (
        <Loading />
      ) : (
        <Wrapper>
          {stores?.data.map((store) => {
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
      )}
    </>
  );
};

export default Home;
