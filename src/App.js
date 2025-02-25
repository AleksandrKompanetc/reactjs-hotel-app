import React, {useState} from 'react'
import Navbar from './components/Navbar'
import HotelList from './components/HotelList'
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
            <button></button>
          </>
        ) : (

        )
        }
      </main>
    </div>
  );
}

export default App
