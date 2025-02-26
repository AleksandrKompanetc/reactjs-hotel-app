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

      <div className='form-group'>
        <label>Name</label>
        <input 
          type="text"
          value={bookingData.firstName}
          onChange={(e) => setBookingData(prev => ({...prev, firstName: e.target.value}))} 
          required
        />
      </div>

      <div className='form-group'>
        <label>LastName</label>
        <input 
          type="text"
          value={bookingData.lastName}
          onChange={(e) => setBookingData(prev => ({...prev, lastName: e.target.value}))}
          required 
        />
      </div>

      <div className='form-group'>
        <label>Email</label>
        <input 
          type="text"
          value={bookingData.email}
          onChange={(e) => setBookingData(prev => ({...prev, email: e.target.value}))} 
          required
        />
      </div>
    </form>
  )
}

export default BookingForm