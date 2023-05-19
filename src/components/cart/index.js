import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import Head from "../head";
import List from "../list";
import { calcCartSum, calcCartTotalCount, thousSeparator } from "../../utils";
import CartLayout from "../cart-layout";

function Cart({cartContent, showModal, closeCart, cartItemDelete}) {

  const itemCount = calcCartTotalCount(cartContent);
  const total = calcCartSum(cartContent);

  return (
    <CartLayout showModal={showModal}>
      <Head title='Корзина'>
        <div className='Cart-control'>
          <button onClick={closeCart}>Закрыть</button>
        </div>
      </Head>
      <div className='Cart-spacer'>
        {!itemCount && 'В корзине пока ничего нет...'}
      </div>
      <List list={cartContent} control='Удалить' handleControl={cartItemDelete}/>
      <div className='Cart-summary'>
        Итого: 
        <span>{thousSeparator(total)}&nbsp;&#8381;</span>
        <span>{itemCount}&nbsp;шт</span>
      </div>
    </CartLayout>
  )
}

Cart.propTypes = {
  cartContent: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  })).isRequired,
  showModal: PropTypes.bool,
  closeCart: PropTypes.func,
  cartItemDelete: PropTypes.func
};

Cart.defaultProps = {
  closeCart: () => {},
  cartItemDelete: () => {}
}

export default React.memo(Cart);
