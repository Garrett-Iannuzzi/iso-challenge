import React from 'react';
import './Loader.scss';
import images from '../../images/images'

const Loader = () => {
  return(
    <div className='div-loader'>
      <p className='p-loader'>Loading....</p>
      <img className='img-loader' src={images.loading} alt='Waiting to load' />
    </div>
  )
}

export default Loader;