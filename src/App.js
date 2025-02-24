import React, {useState} from 'react';
import './App.css';

function App() {
  const [searchParams, setSearchParams] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1
  })

  return (
    <div className="app">
      <main className='main-content'>
        <SearchBar searchParams={searchParams} setSearchParams={setSearchParams} />
        <HotelList searchParams={searchParams} />
      </main>
    </div>
  );
}

export default App;
