import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({list, control, handleControl}) {
  return (
    <div className='List'>{
      list.map(item =>
        <div key={item.code} className='List-item'>
          <Item item={item} control={control} handleControl={handleControl}/>
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  control: PropTypes.string,
  handleControl: PropTypes.func
};

List.defaultProps = {
  handleControl: () => {},
}

export default React.memo(List);
