import {memo} from "react";
import PropTypes from "prop-types";
import {numberFormat} from "../../utils";
import './style.css';

function ItemDetail(props) {
  console.log(props);

  const callbacks = {
    onAdd: () => props.onAdd(props.item._id)
  }

  return (
    <div className='Detail'>
      <p>{ props.item.description }</p>
      <p>Страна производитель: <b>{ props.item.madeIn?._type }</b></p>
      <p>Категория: <b>{ props.item.category?._type }</b></p>
      <p>Год выпуска: <b>{ props.item.edition }</b></p>
      <p className='Detail-price'>Цена: { numberFormat(props.item.price || 0) } ₽</p>
      <button onClick={callbacks.onAdd}>Добавить</button>
    </div>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    madeIn: PropTypes.shape({_type: PropTypes.string}),
    category: PropTypes.shape({_type: PropTypes.string}),
    edition: PropTypes.number,
    price: PropTypes.number
  }).isRequired,
  onAdd: PropTypes.func,
};

ItemDetail.defaultProps = {
  onAdd: () => {},
}

export default memo(ItemDetail);
