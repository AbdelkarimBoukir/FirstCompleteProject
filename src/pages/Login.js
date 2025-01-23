import React from 'react'
import google from '../images/google.svg'
import apple from '../images/apple.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.css'

function Login() {
  return (
   <div className="Contact-Container"> 
    <div className="Login-Container">
    <h2 className="title"> Login in with </h2>

    <div className="social-login">
      <button className="social-button">
      <img src={google} alt="Google" className="social-img" />
      </button>
      <button className="social-button">
      <img src={apple} alt="Apple" className="social-img" />
      </button>    
    </div>

    <p className="separator"><span>or</span></p>

    <form action="#" className="login-form">
      <div className="input-wrapper">
        <input type="email" className="input-field" placeholder='Email adresse'
        required />
        <i className='material-symbol' ><FontAwesomeIcon icon={faEnvelope} /></i>
      </div>

      <div className="input-wrapper">
        <input type="password" className="input-field" placeholder='Password'
        required />
        <i className='material-symbol' ><FontAwesomeIcon icon={faLock} /></i>
      </div>
      <a href="#" className="forgot-link">Forgot Password </a>

      <button className="login-button">Log in</button>

    </form>
    <p className="signup-text"> Don't have an account ?
      <a href="#">Sign up Now</a>
      </p>

      </div>
   </div>
  )
}

export default Login
