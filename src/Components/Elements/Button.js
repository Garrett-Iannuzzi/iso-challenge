import React from 'react';
import PropTypes from 'prop-types';


export const Button = ({ btnInfo:{ name, fn } }) => {
  return(
    <button onClick={fn}>{name}</button>
  )
}

export default Button;

Button.propTypes = {
  btnInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
  })
};