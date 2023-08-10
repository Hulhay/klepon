import { memo } from 'react';
import { PiBowlFoodFill } from 'react-icons/pi';

import { formatToRupiah } from '../../../../helpers';
import { ICartState } from '../../../../interface';
import { lang } from '../../../../utils';
import { Cart, QtyWrapper, Wrapper } from './cartBottomSheetComponentStyle';

const CartBottomSheet = ({ products, totalItem, totalPrice }: ICartState) => {
  const onClick = () => {
    console.log({ products, totalItem, totalPrice });
  };

  return (
    <Wrapper>
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
