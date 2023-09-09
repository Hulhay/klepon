import { memo, useEffect, useRef, useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';

import storePlaceholder from '../../../../assets/store-placeholder.jpg';
import { BottomSheet } from '../../../../components';
import { formatToRupiah } from '../../../../helpers';
import { useAppDispatch } from '../../../../hooks/redux';
import { IProduct } from '../../../../interface';
import { addToCart, removeFromCart } from '../../../../store/reducer';
import { lang } from '../../../../utils';
import {
  ButtonActionWrapper,
  ButtonAdd,
  Description,
  ProductBottomSheet,
  ProductDetail,
  QtyCounter,
  Wrapper,
} from './productComponentStyle';

const ProductItem = ({
  uuid,
  name,
  price,
  imageURL,
  isSoldOut,
  storeUUID,
  cart,
}: IProduct) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();
  const [qty, setQty] = useState<number>(0);
  const [isBtmSheet, setIsBtmSheet] = useState<boolean>(false);

  const ShowBottomSheet = (event: React.MouseEvent<HTMLDivElement>) => {
    const isRef = ref.current && !ref.current.contains(event.target as Node);
    return !isRef;
  };

  const onOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ShowBottomSheet(event)) {
      setIsBtmSheet(true);
      return;
    }
  };

  const onClose = () => {
    setIsBtmSheet(false);
  };

  const handlePlus = () => {
    setQty((qty) => qty + 1);
    dispatch(addToCart({ uuid, qty: 1, name, price, storeUUID }));
  };

  const handleMinus = () => {
    setQty((qty) => qty - 1);
    dispatch(removeFromCart({ uuid, qty, name, price, storeUUID }));
  };

  const handlePlusBtmSheet = () => {
    setIsBtmSheet(false);
    setQty((qty) => qty + 1);
    dispatch(addToCart({ uuid, qty: 1, name, price, storeUUID }));
  };

  useEffect(() => {
    const inCart = cart.products.find((product) => product.uuid === uuid);
    if (inCart) {
      setQty(inCart.qty);
    }
  }, []);

  return (
    <>
      <Wrapper onClick={onOpen}>
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

        <ButtonActionWrapper ref={ref}>
          {qty < 1 ? (
            <ButtonAdd
              className={`action-btn ${isSoldOut ? 'disable' : ''}`}
              onClick={handlePlus}
              disabled={isSoldOut}
            >
              {lang('button.add')}
            </ButtonAdd>
          ) : (
            <QtyCounter>
              <AiOutlineMinusCircle className="action-btn" onClick={handleMinus} />
              <span>{qty}</span>
              <AiOutlinePlusCircle className="action-btn" onClick={handlePlus} />
            </QtyCounter>
          )}
        </ButtonActionWrapper>
      </Wrapper>

      <BottomSheet active={isBtmSheet} onClose={onClose}>
        <ProductBottomSheet className={isBtmSheet ? 'active' : ''}>
          <img
            src={imageURL ? imageURL : storePlaceholder}
            alt={lang('product.alt_product_image_placeholder', { name: name })}
          />
          <Description className="description">
            <p className="name-btm-sheet">{name}</p>
            {isSoldOut ? (
              <p className="sold-out price-btm-sheet">{lang('product.sold_out')}</p>
            ) : (
              <p className="price-btm-sheet">{formatToRupiah(price)}</p>
            )}
          </Description>
          <ButtonAdd
            className={`action-btn ${isSoldOut ? 'disable' : 'btn-add-btm-sheet'}`}
            onClick={handlePlusBtmSheet}
            disabled={isSoldOut}
          >
            {lang('button.add')}
          </ButtonAdd>
        </ProductBottomSheet>
      </BottomSheet>
    </>
  );
};

export default memo(ProductItem);
