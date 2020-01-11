import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <div>
      <nav>
        <h1>NBA Iso-Challenge</h1>
        <Link to='/rules'>
          <button>Rules Expert</button>
        </Link>
        <Link to='/'>
          <button>Home</button>
        </Link>
      </nav>
    </div>
  )
}

export default Nav;