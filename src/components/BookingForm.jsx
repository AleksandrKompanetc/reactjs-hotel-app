import React, {useState} from 'react'

function BookingForm({hotel, room}) {
  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  })

  return (
    <form className='booking-form' onSubmit={handleSubmit}>
      <h2>Reservation number</h2>

      <div className='booking-details'>
        <h3>{hotel.name}</h3>
        <p>{room.type}</p>
        <p className='price'>${room.price}/night</p>
      </div>
    </form>
  )
}

export default BookingForm