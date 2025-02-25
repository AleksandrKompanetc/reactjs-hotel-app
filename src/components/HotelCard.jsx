import React from 'react'

function HotelCard({hotel}) {

  return (
    <div className='hotel-card'>
      <img src={hotel.image} alt={hotel.name} className='hotel-image' />
      <div className='hotel-info'>
        <h3>{hotel.name}</h3>
        <p className='location'>{hotel.location}</p>
        <div className='hotel-details'>
          <span className='rating'>{'\u2605'}{hotel.rating}</span>
          <span className='price'>{hotel.price}/hight</span>
        </div>
        <button className='book-button'>Book now</button>
      </div>
    </div>
  )
}

export default HotelCard