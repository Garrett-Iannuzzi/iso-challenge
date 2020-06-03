import React from 'react';
import PropTypes from 'prop-types';


export const Button = ({ btnInfo:{ name } }) => {
  return(
    <button>{name}</button>
  )
}

export default Button;

Button.propTypes = {
  btnInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
  })
};