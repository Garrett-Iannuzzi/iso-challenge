import React from 'react';
import './Error.scss';
import { connect } from 'react-redux';
import { isLoggedIn } from '../../actions/actions';


export const Error = (props) => {
  const goHome = () => {
    props.isLoggedIn(null)
    return props.history.push('/')
  }
    
  return (
    <section className='section-error'>
      <div className='p-error-container'>
        <h3 className='header-error'>Error!!</h3>
        <p className='p-error'>*All fields must be filled out to login*</p>
      </div>
      <button className='button-error' onClick={ () => goHome() }>Back To Home</button>
    </section>
  )
}

export const mapDispatchToProps = dispatch => ({
  isLoggedIn: (status) => dispatch(isLoggedIn(status))
})

export default connect(null, mapDispatchToProps)(Error)
