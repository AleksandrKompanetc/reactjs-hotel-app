import React from 'react'
import './Header.css'
import Logo from '../assets/logo.svg'
import { Button } from '@material-ui/core'

const Header = () => {
  return (
    <div className='header'>
      <img className='header__logo' src={Logo} alt="" />
      <div className='header__center'>
        <div className='center__button'>Home</div>
        <div className='center__button'>Rooms & Suits</div>
        <div className='center__button'>Offers</div>
        <div className='center__button'>My Bookings</div>
        <div className='center__button'>Profile</div>
      </div>
      <div className='header__right'>
        <div className='headerContainer'>
          <Button className='header__button'>Sign Up</Button>
        </div>
      </div>
    </div>
  )
}

export default Header