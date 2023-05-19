import React from "react";
import PropTypes from 'prop-types';
import {calcCartSum, calcCartTotalCount, plural, thousSeparator} from "../../utils";
import './style.css';

function Controls({showCart, cartContent}) {
  
  // I think it would be a bit more logical to show total count of items in the cart
  // rather than show just an amount of unique item
  // thus I leave this part here just in case
  // ---- get total amount of item in the cart
  // const itemCount = calcCartTotalCount(cartContent);

  const itemCount = cartContent.length; // amount of unique items in the cart
  const total = calcCartSum(cartContent); // total sum in the cart

  const str = (itemCount > 0) 
    ? `${itemCount} ${plural(itemCount, {one: 'товар', few: 'товара', many: 'товаров'})} 
       / ${thousSeparator(total)} ₽`
    : 'пусто';

  return (
    <div className='Controls'>
      <div className='Controls-cart'>
        В корзине:
        <span className='bold-text margin-inline-20'>
          {str}
        </span>
      </div>
      <button onClick={() => showCart()}>Показать</button>
    </div>
  )
}

Controls.propTypes = {
  showCart: PropTypes.func,
  cartContent: PropTypes.arrayOf(PropTypes.shape({
    price: PropTypes.number
  }))
};

Controls.defaultProps = {
  showCart: () => {}
}

export default React.memo(Controls);
