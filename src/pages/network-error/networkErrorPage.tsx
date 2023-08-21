import { Link } from 'react-router-dom';

import { lang } from '../../utils';
import { ServerOffIcon } from './components';
import { ActionBtn, Title, Wrapper } from './networkErrorPageStyle';

const NetworkError = () => {
  return (
    <Wrapper>
      <ServerOffIcon width={64} height={64} />
      <Title>{lang('network_error.title')}</Title>
      <Link to={'https://prasetyo.netlify.app/'}>
        <ActionBtn>{lang('network_error.go_to_author')}</ActionBtn>
      </Link>
    </Wrapper>
  );
};

export default NetworkError;
