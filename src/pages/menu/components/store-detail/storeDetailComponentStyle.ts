import { styled } from 'styled-components';

import { palette } from '../../../../utils';

export const Wrapper = styled.div`
  padding: 67px 30px 10px 15px;

  .store-name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.1em;
    font-weight: 700;
    font-size: 24px;
    color: ${palette.text};
    margin-bottom: 10px;
  }

  .owner-name,
  .owner-phone-number {
    font-size: 16px;
    font-weight: 400;
    color: ${palette.text};
    line-height: 1.4em;
  }
`;
