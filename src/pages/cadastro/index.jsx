import React from 'react'
import Register from '../../components/register'
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
            <Register/>
        </div>
    </div>
  )
}

export default index