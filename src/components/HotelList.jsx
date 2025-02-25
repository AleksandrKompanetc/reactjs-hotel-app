import React from 'react';

function HotelList() {
  const hotels = [
    {
      id: 1,
      name: 'Luxury Resort & Spa',
      price: 299,
      rating: 4.8,
      image: 'https://placehold.co/300x200',
      location: 'Beach Front'
    },
    {
      id: 2,
      name: 'City Center Hotel',
      price: 199,
      rating: 4.5,
      image: 'https://placehold.co/300x200',
      location: 'Downtoun'
    },
    {
      id: 3,
      name: 'Mountain View Lodge',
      price: 249,
      rating: 4.6,
      image: 'https://placehold.co/300x200',
      location: 'Mountain Area'
    }
  ]

  return (
    <div className='hotel-list'>
      {hotels.map(hotel => (
        
      ))}
    </div>
  )
}