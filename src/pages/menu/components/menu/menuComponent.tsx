import { memo, useEffect, useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

import storePlaceholder from '../../../../assets/store-placeholder.jpg';
import { formatToRupiah } from '../../../../helpers';
import { lang } from '../../../../utils';
import {
  AmountWrapper,
  ButtonAdd,
  Description,
  MenuDetail,
  Wrapper,
} from './menuComponentStyle';

interface IMenuItem {
  name: string;
  price: number;
  imageURL: string;
  isSoldOut: boolean;
}

const MenuItem = ({ name, price, imageURL, isSoldOut }: IMenuItem) => {
  const [amount, setAmount] = useState<number>(0);

  const handlePlus = () => {
    setAmount((amount) => amount + 1);
  };

  const handleMinus = () => {
    setAmount((amount) => amount - 1);
  };

  return (
    <Wrapper>
      <MenuDetail>
        <Description>
          <p>{name}</p>
          {isSoldOut ? (
            <p className="sold-out">{lang('menu.sold_out')}</p>
          ) : (
            <p>{formatToRupiah(price)}</p>
          )}
        </Description>
        <img
          src={imageURL ? imageURL : storePlaceholder}
          alt={lang('menu.alt_menu_image_placeholder', { name: name })}
        />
      </MenuDetail>
      {amount < 1 ? (
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
          <span>{amount}</span>
          <AiOutlinePlusCircle className="action-btn" onClick={handlePlus} />
        </AmountWrapper>
      )}
    </Wrapper>
  );
};

export default memo(MenuItem);
