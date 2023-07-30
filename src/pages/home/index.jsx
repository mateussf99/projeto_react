import React from 'react'
import Login from '../../components/login'
import logo from '../../assets/img/logo.svg'
import './style.css'

const index = () => {
  return (
    <div className='principal'>
        <div className='logo'>
            <img src={logo} alt="logo do Inter" />
            <h2>InteraCt</h2>
        </div>
        <div className='section-login'>
            <Login/>
        </div>
    </div>
  )
}

export default index