import { memo, useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

import storePlaceholder from '../../../../assets/store-placeholder.jpg';
import { formatToRupiah } from '../../../../helpers';
import { useAppDispatch } from '../../../../hooks/redux';
import { IProduct } from '../../../../interface';
import { addToCart, removeFromCart } from '../../../../store/reducer';
import { lang } from '../../../../utils';
import {
  AmountWrapper,
  ButtonAdd,
  Description,
  ProductDetail,
  Wrapper,
} from './productComponentStyle';

const ProductItem = ({ uuid, name, price, imageURL, isSoldOut }: IProduct) => {
  const dispatch = useAppDispatch();
  const [qty, setQty] = useState<number>(0);

  const handlePlus = () => {
    setQty((qty) => qty + 1);
    dispatch(addToCart({ uuid, qty: 1, name, price }));
  };

  const handleMinus = () => {
    setQty((qty) => qty - 1);
    dispatch(removeFromCart({ uuid, qty, name, price }));
  };

  return (
    <Wrapper>
      <ProductDetail>
        <Description>
          <p>{name}</p>
          {isSoldOut ? (
            <p className="sold-out">{lang('product.sold_out')}</p>
          ) : (
            <p>{formatToRupiah(price)}</p>
          )}
        </Description>
        <img
          src={imageURL ? imageURL : storePlaceholder}
          alt={lang('product.alt_product_image_placeholder', { name: name })}
        />
      </ProductDetail>
      {qty < 1 ? (
        <ButtonAdd
          className={isSoldOut ? 'disable' : ''}
          onClick={handlePlus}
          disabled={isSoldOut}
        >
          {lang('button.add')}
        </ButtonAdd>
      ) : (
        <AmountWrapper>
          <AiOutlineMinusCircle className="action-btn" onClick={handleMinus} />
          <span>{qty}</span>
          <AiOutlinePlusCircle className="action-btn" onClick={handlePlus} />
        </AmountWrapper>
      )}
    </Wrapper>
  );
};

export default memo(ProductItem);
