import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';


export const Button = ({ btnInfo:{ name, fn, className } }) => {
  return(
    <button className={className} onClick={fn}>{name}</button>
  )
}

export default Button;

Button.propTypes = {
  btnInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
  })
};