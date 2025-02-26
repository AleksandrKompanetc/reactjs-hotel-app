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
    </form>
  )
}

export default BookingForm