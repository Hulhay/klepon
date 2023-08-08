import { memo } from 'react';

import storePlaceholder from '../../../../assets/store-placeholder.jpg';
import { formatToRupiah } from '../../../../helpers';
import { lang } from '../../../../utils';
import { ButtonAdd, Description, MenuDetail, Wrapper } from './menuComponentStyle';

interface IMenuItem {
  name: string;
  price: number;
  imageURL: string;
  isSoldOut: boolean;
}

const MenuItem = ({ name, price, imageURL, isSoldOut }: IMenuItem) => {
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
      <ButtonAdd className={isSoldOut ? 'disable' : ''}>{lang('button.add')}</ButtonAdd>
    </Wrapper>
  );
};

export default memo(MenuItem);
