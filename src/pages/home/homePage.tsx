import { SearchComponent } from '../../components';
import { lang } from '../../utils';

const Home = () => {
  return (
    <>
      <SearchComponent placeholder={lang('home.search_placeholder')}></SearchComponent>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;
