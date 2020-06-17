import React from 'react';
import PropTypes from 'prop-types';

export const CardContainer = ({ info: { className } }) => {
  return(
    <section className={className} />
  )
}

export default CardContainer;

CardContainer.propTypes = {
  info: PropTypes.shape({
    className: PropTypes.string
  })
};