import React from 'react'

function SearchBar({searchParams, setSearchParams}) {
  const handleChange = (e) => {
    const {name, value} = e.target
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className='search-bar'>
      <div className='search-inputs'>
        <div className='input-group'>
          <label htmlFor="checkIn">Check In</label>
          <input 
            type="date"
            id='checkIn' 
            name='checkIn'  
            value={searchParams.checkIn}
            onChange={handleChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor="checkOut">Check Out</label>
          <input 
            type="date"
            id='checkOut' 
            name='checkOut'  
            value={searchParams.checkOut}
            onChange={handleChange}
          />
        </div>
        <div className='input-group'>
          <label htmlFor="guests">Guests</label>
          <select
            id="guests"
            name='guests'
            value={searchParams.quests}
            onChange={handleChange}
          >
            {[1,2,3,4,5].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
        <button className='search-button'>Search Hotels</button>
      </div>
    </div>
  )
}

export default SearchBar