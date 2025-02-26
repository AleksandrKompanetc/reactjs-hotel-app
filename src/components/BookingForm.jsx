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
    <form></form>
  )
}

export default BookingForm