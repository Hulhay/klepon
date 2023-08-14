import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import storePlaceholder from '../../../../assets/store-placeholder.jpg';
import { BottomSheet } from '../../../../components';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { ICartState, IStore } from '../../../../interface';
import { clearCart } from '../../../../store/reducer';
import { lang } from '../../../../utils';
import QuestionIcon from './questionIcon';
import {
  ButtonActionWrapper,
  ButtonBack,
  ButtonConfirm,
  ConfirmationBottomSheet,
  Description,
  StoreWrapper,
  Wrapper,
} from './storeComponentStyle';

const Store = ({ storeUUID, storeImage, storeName }: IStore) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart) as ICartState;
  const [isBtmSheet, setIsBtmSheet] = useState<boolean>(false);

  const onClick = () => {
    if (cart.storeUUID !== '' && cart.storeUUID !== storeUUID) {
      setIsBtmSheet(true);
    } else {
      navigate(`/store/${storeUUID}/product`);
    }
  };

  const onClose = () => {
    setIsBtmSheet(false);
  };

  const onConfirm = () => {
    dispatch(clearCart());
    navigate(`/store/${storeUUID}/product`);
  };

  return (
    <>
      <Wrapper>
        <StoreWrapper onClick={onClick}>
          <img
            src={storeImage ? storeImage : storePlaceholder}
            alt={lang('home.alt_store_image_placeholder', { store_name: storeName })}
          />
          <p className="store-name">{storeName}</p>
        </StoreWrapper>
      </Wrapper>

      <BottomSheet active={isBtmSheet} onClose={onClose}>
        <ConfirmationBottomSheet className={isBtmSheet ? 'active' : ''}>
          <QuestionIcon />
          <Description>
            <p>{lang('home.change_store_confirmation')}</p>
            <p>{lang('home.change_store_confirmation_desc')}</p>
          </Description>
          <ButtonActionWrapper>
            <ButtonBack onClick={onClose}>{lang('button.cancel')}</ButtonBack>
            <ButtonConfirm onClick={onConfirm}>{lang('button.go_ahead')}</ButtonConfirm>
          </ButtonActionWrapper>
        </ConfirmationBottomSheet>
      </BottomSheet>
    </>
  );
};

export default memo(Store);
