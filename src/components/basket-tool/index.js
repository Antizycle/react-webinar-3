import {memo} from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {cn as bem} from '@bem-react/classname';
import useSelector from "../../store/use-selector";
import {numberFormat, plural} from "../../utils";
import './style.css';

function BasketTool({sum, amount, onOpen}) {
  const lPack = useSelector(state => state.lang.lPack);

  const plurasList = lPack.cart.item;

  const cn = bem('BasketTool');
  
  // It might be better to move Link into Breadcrumbs comp
  // but will require some layout work, need further consideration
  
  return (
    <div className={cn()}>
      <Link to='/'>{ lPack.mainPage }</Link>
      <div>
        <span className={cn('label')}>{ lPack.cart.title }:</span>
        <span className={cn('total')}>
          {amount
            ? `${amount} ${plural(amount, {one: plurasList[0], few: plurasList[1], many: plurasList[2]})} / ${numberFormat(sum)} ₽`
            : lPack.cart.empty
          }
        </span>
        <button onClick={onOpen}>{ lPack.showCart}</button>
      </div>
    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number
};

BasketTool.defaultProps = {
  onOpen: () => {},
  sum: 0,
  amount: 0
}

export default memo(BasketTool);
