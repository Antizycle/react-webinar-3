import {memo} from 'react';
import PropTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import useSelector from '../../store/use-selector';
import {numberFormat} from "../../utils";
import './style.css';

function ItemBasket(props) {

  const lPack = useSelector(state => state.lang.lPack);

  const cn = bem('ItemBasket');

  const callbacks = {
    onRemove: (e) => props.onRemove(props.item._id)
  };

  return (
    <div className={cn()}>
      {/*<div className={cn('code')}>{props.item._id}</div>*/}
      <div className={cn('title')}>{props.item.title}</div>
      <div className={cn('right')}>
        <div className={cn('cell')}>{numberFormat(props.item.price)} ₽</div>
        <div className={cn('cell')}>{numberFormat(props.item.amount || 0)} { lPack.cart.pcs }</div>
        <div className={cn('cell')}><button onClick={callbacks.onRemove}>{ lPack.cart.remove }</button></div>
      </div>
    </div>
  )
}

ItemBasket.PropTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number
  }).isRequired,
  onRemove: PropTypes.func,
}

ItemBasket.defaultProps = {
  onRemove: () => {},
}

export default memo(ItemBasket);
