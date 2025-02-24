import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-content'>
        <h1>HotelBooking</h1>
        <div className='nav-links'>
          <a href="#home">Home</a>
          <a href="#bookings">My bookings</a>
          <a href="#account">Account</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar