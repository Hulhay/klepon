import { styled } from 'styled-components';

import { palette } from '../../utils';

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 56px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 5px;
  background-color: ${palette.white};
  box-shadow: 0px -1px 20px 0px rgba(0, 0, 0, 0.2);
  transition: transform 150ms ease-in-out;

  .icon {
    width: 28px;
    height: 56px;
    color: ${palette.highlight};
  }

  &.hidden {
    transform: translateY(100%);
  }
`;
