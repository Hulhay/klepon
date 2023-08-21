import { memo } from 'react';

interface IServerOffIcon {
  width: number;
  height: number;
}

const ServerOffIcon = ({ width, height }: IServerOffIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#cf3e1b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <path d="M7 2h13a2 2 0 012 2v4a2 2 0 01-2 2h-5"></path>{' '}
        <path d="M10 10L2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 002 2h6z"></path>{' '}
        <path d="M22 17v-1a2 2 0 00-2-2h-1"></path>{' '}
        <path d="M4 14a2 2 0 00-2 2v4a2 2 0 002 2h16.5l1-.5.5.5-8-8H4z"></path>{' '}
        <path d="M6 18h.01"></path> <path d="M2 2l20 20"></path>{' '}
      </g>
    </svg>
  );
};

export default memo(ServerOffIcon);
