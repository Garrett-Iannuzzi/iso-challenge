import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import images from '../../images/images.js';

const Nav = () => {
  return(
    <div>
      <nav>
        <h1>NBA IS<img src={images.basketball} className='img-bball'/>-Challenge</h1>
        <div className='btn-div'>
          <Link to='/rules'>
            <button className='btn'>Rules Expert</button>
          </Link>
          <Link to='/'>
            <button className='btn'>Home</button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav;