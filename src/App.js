import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Filters from './components/Filters'
import HotelList from './components/HotelList'
import HotelDetails from './components/HotelDetails'
import SearchBar from './components/SearchBar'
import './styles/components.css'
import './App.css'

function App() {
  const [searchParams, setSearchParams] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1
  })

  const [filters, setFilters] = useState({
    priceRange: '',
    rating: '',
    amenities: []
  })

  const [selectedHotel, setSelectedHotel] = useState(null)
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [showBookingForm, setShowBookingForm] = useState(false)

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel)
    setSelectedRoom(null)
    setShowBookingForm(false)
  }

  const handleBooking = (room) => {
    setSelectedRoom(room)
    setShowBookingForm(true)
  }

  const handleBackToList = () => {
    setSelectedHotel(null)
    setSelectedRoom(null)
    setShowBookingForm(false)
  }

  return (
    <div className="app">
      <Navbar />
      <main className='main-content'>
        {!selectedHotel ? (
          <>
            <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
            <Filters filters={filters} setFilters={setFilters} />
            <HotelList
              searchParams={searchParams}
              filters={filters}
              onHotelSelect={handleHotelSelect}
            />
          </>
        ) : showBookingForm ? (
          <>
            <button onClick={handleBackToList} className='back-button'>
              Back to Hotel List
            </button>
            <BookingForm
              hotel={selectedHotel}
              room={selectedRoom}
            />
          </>
        ) : (
          <>
            <button onClick={handleBackToList} className='back-button'>
              Back to Hotel List
            </button>
            <HotelDetails
              hotel={selectedHotel}
              onBookRoom={handleBooking}
            />
          </>
        )
        }
      </main>
    </div>
  );
}

export default App
