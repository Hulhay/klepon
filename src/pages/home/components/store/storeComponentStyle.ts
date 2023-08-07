import styled from 'styled-components';

import { palette } from '../../../../utils';

export const Wrapper = styled.div`
  width: 45%;
  max-width: 170px;
  height: 230px;

  a {
    text-decoration: none;
  }
`;

export const StoreWrapper = styled.div`
  height: 230px;
  height: 230px;
  border-radius: 18px;
  background-color: ${palette.white};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    height: 150px;
    border: 0;
    border-radius: 18px;
    object-fit: cover;
  }

  p {
    margin: 3px 8px;
  }

  .store-name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.3em;
    font-weight: 600;
    font-size: 16px;
    color: ${palette.text};
  }
`;
