import React from 'react';
import './Loader.scss';
import images from '../../images/images'

const Loader = () => {
  return(
    <div>
      <p>Loading....</p>
      <img src={images.loading} alt='Waiting to load' />
    </div>
  )
}

export default Loader;