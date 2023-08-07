import { Link } from 'react-router-dom';

import { lang } from '../../utils';
import { SadIcon } from './components';
import { BackToHomeBtn, Title, Wrapper } from './notFoundPageStyle';

const NotFound = () => {
  return (
    <Wrapper>
      <SadIcon width={64} height={64} />
      <Title>{lang('not_found.title')}</Title>
      <Link to={'/'}>
        <BackToHomeBtn>{lang('not_found.back')}</BackToHomeBtn>
      </Link>
    </Wrapper>
  );
};

export default NotFound;
