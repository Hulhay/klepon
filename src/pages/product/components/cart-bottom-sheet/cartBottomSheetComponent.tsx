import { memo, useCallback, useEffect, useState } from 'react';
import { PiBowlFoodFill } from 'react-icons/pi';

import { formatToRupiah } from '../../../../helpers';
import { useScroll } from '../../../../hooks';
import { ICartState } from '../../../../interface';
import { lang } from '../../../../utils';
import { Cart, QtyWrapper, Wrapper } from './cartBottomSheetComponentStyle';

const CartBottomSheet = ({ products, totalItem, totalPrice }: ICartState) => {
  const scroll = useScroll();
  const [hide, setHide] = useState<string>('');

  const onClick = () => {
    console.log({ products, totalItem, totalPrice });
  };

  const handleScroll = useCallback(() => {
    setHide(scroll.y !== scroll.curY ? 'hide' : '');
    const timeout = setTimeout(() => {
      setHide('');
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [scroll.y, scroll.curY]);

  useEffect(() => {
    handleScroll();
  }, [scroll.y, scroll.curY]);

  return (
    <Wrapper className={totalItem > 0 ? `active ${hide}` : ''}>
      <Cart onClick={onClick}>
        <QtyWrapper>
          <PiBowlFoodFill className="icon" />
          <p>
            {totalItem > 1
              ? lang('product.items_in_cart', { qty: totalItem })
              : lang('product.item_in_cart', { qty: totalItem })}
          </p>
        </QtyWrapper>
        <p>{formatToRupiah(totalPrice)}</p>
      </Cart>
    </Wrapper>
  );
};

export default memo(CartBottomSheet);
