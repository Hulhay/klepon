import { memo, useCallback, useEffect, useState } from 'react';
import { PiBowlFoodFill } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

import { BottomSheet } from '../../../../components';
import { formatToRupiah, getLocalStorage, isExpired } from '../../../../helpers';
import { useAppDispatch, useScroll } from '../../../../hooks';
import { ICartState } from '../../../../interface';
import { clearCart } from '../../../../store/reducer';
import { lang } from '../../../../utils';
import AlertIcon from './alertIcon';
import {
  AlertBottomSheet,
  ButtonActionWrapper,
  ButtonBack,
  ButtonConfirm,
  Cart,
  Description,
  QtyWrapper,
  Wrapper,
} from './cartBottomSheetComponentStyle';

const CartBottomSheet = ({ products, totalItem, totalPrice }: ICartState) => {
  const scroll = useScroll();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [hide, setHide] = useState<string>('');
  const [isBtmSheet, setIsBtmSheet] = useState<boolean>(false);

  const onClick = () => {
    console.log({ products, totalItem, totalPrice });
    const auth = getLocalStorage('pk-auth', true);
    if (!auth.token || !isExpired(auth.expired_at)) {
      setIsBtmSheet(true);
    }
  };

  const onClose = () => {
    setIsBtmSheet(false);
  };

  const handleToLogin = () => {
    dispatch(clearCart());
    navigate('/login');
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
    <>
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

      <BottomSheet active={isBtmSheet} onClose={onClose}>
        <AlertBottomSheet className={isBtmSheet ? 'active' : ''}>
          <AlertIcon />
          <Description>
            <p>{lang('cart.not_auth')}</p>
            <p>{lang('cart.not_auth_desc')}</p>
          </Description>
          <ButtonActionWrapper>
            <ButtonBack onClick={onClose}>{lang('button.cancel')}</ButtonBack>
            <ButtonConfirm onClick={handleToLogin}>{lang('button.yes')}</ButtonConfirm>
          </ButtonActionWrapper>
        </AlertBottomSheet>
      </BottomSheet>
    </>
  );
};

export default memo(CartBottomSheet);
