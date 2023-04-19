import {SignUp} from '../components/SignUp';
import React from 'react'
import './LoginPage.css'



const LoginPage = () => {
  return (
    <div className='wrapper'>
        <div className='login_page'>
          <div className='logo'>
            <h1>LOGO</h1>
          </div>
          <div className='greeting'>
            <p>Welcome To CRM System Sign In To Your Account
            </p>
          </div>
          
        <SignUp/>
      </div>
    </div>
  )
}


export default LoginPage;