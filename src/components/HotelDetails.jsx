import React from 'react'

function HotelDetails({ hotel, onBookRoom }) {
  return (
    <div className='hotel-details-page'>
      <div className='hotel-gallery'>
        {hotel.images.map((image, index) => (
          <img key={index} src={image} alt={`${hotel.name} view ${index + 1}`} />
        ))}
      </div>

      <div className='hotel-info-detailed'>
        <h1>{hotel.name}</h1>
        <p className='location'>{hotel.location}</p>
        <div className='rating-large'>{'\u2605'} {hotel.rating}</div>


        <section className='amenities'>
          <h2>Facilities</h2>
          <ul>
            {hotel.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </section>

        <section className='description'>
          <h2>Description</h2>
          <p>{hotel.description}</p>
        </section>

        <section className='rooms'>
          <h2>Free rooms</h2>
          {hotel.rooms.map(room => (
            <div key={room.id} className='room-card'>
              <h3>{room.type}</h3>
              <p>{room.description}</p>
              <div className='room-price'>${room.price}/night</div>
              <button
                onClick={() => onBookRoom(room)}
                className='book-button'>
                Reservation
              </button>
            </div>
          ))}
        </section>

        <section className='reviews'>
          <h2>Reviews</h2>
          {hotel.reviews.map(review => (
            <div key={review.id} className='review-card'>
              <div className='review-header'>
                <span className='reviewer'>{review.user}</span>
                <span className='review-rating'>{'\u2605'}{review.rating}</span>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default HotelDetails