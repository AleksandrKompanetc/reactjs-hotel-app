import React from 'react'

function Filters({ filters, setFilters }) {
  return (
    <div className='filters'>
      <div className='filter-group'>
        <label htmlFor="">Price</label>
        <select name="" id=""
          value={filters.priceRange}
          onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
        >
          <option value="">Any</option>
          <option value="0-100">$0 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200+">$200+</option>
        </select>
      </div>
      <div className='filter-group'>
        <label htmlFor="">Rating</label>
        <select
          value={filters.rating}
          onChange={(e) => setFilters(prev => ({ ...prev, rating: e.target.value }))}
        >
          <option value="">Any</option>
          <option value="3+">3+ stars</option>
          <option value="4+">4+ stars</option>
        </select>
      </div>
      <div className='filter-group'>
        <label>Facilities</label>
        <div className='checkbox-group'>
          <label>
            <input
              type="checkbox"
              checked={filters.amenities.includes('wifi')}
              onChange={(e) => {
                const newAmenities = e.target.checked
                  ? [...filters.amenities, 'wifi']
                  : filters.amenities.filter(a => a !== 'wifi')
                setFilters(prev => ({ ...prev, amenities: newAmenities }))
              }}
            />
            Wi-Fi
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.amenities.includes('pool')}
              onChange={(e) => {
                const newAmenities = e.target.checked
                  ? [...filters.amenities, 'pool']
                  : filters.amenities.filter(a => a !== 'pool')
                setFilters(prev => ({ ...prev, amenities: newAmenities }))
              }}
            />
            Pool
          </label>
        </div>
      </div>
    </div>
  )
}

export default Filters