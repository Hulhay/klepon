import React, { memo, useEffect } from 'react';

import { useBottomSheet } from '../../hooks';
import { BgBottomSheet } from './bottomSheetComponentStyle';

interface IBtmSheet {
  active: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet = ({ active, children, onClose }: IBtmSheet) => {
  const { ref } = useBottomSheet({ active, onClose });

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = active ? 'hidden' : 'auto';
    }
  }, [active]);

  return (
    <>
      <div>{active && <BgBottomSheet />}</div>
      <div ref={ref}>{children}</div>
    </>
  );
};

export default memo(BottomSheet);
