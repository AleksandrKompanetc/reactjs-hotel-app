import React, {useState} from 'react'
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [searchParams, setSearchParams] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1
  })

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
