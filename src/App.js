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
        <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
        <HotelList searchParams={searchParams} />
      </main>
    </div>
  );
}

export default App
