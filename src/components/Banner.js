import React from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import { CiCalendarDate } from "react-icons/ci";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdFace } from "react-icons/md";
import { MdChildCare } from "react-icons/md";

function Banner() {
  return (
    <>
      <div className='banner'>
        <div className='banner__info'>
          <h4>Enjoy Your Vacation With Our Hotels</h4>
          <h1 className='banner__header'>Let us plan you a perfect international Holiday</h1>
          <Button>Explore Now</Button>
        </div>
      </div>
      <div className="booking__div">
        <div className='booking'>
          <div className='booking__block'>
            <div className='banner__main'>
              <div className='booking__header'>
                <CiCalendarDate size={30} />
                <h4>Arrival Date</h4>
                <TiArrowSortedDown size={30} />
              </div>
              <div className='booking__bof'>
                <h2>date</h2>
                <h4>date</h4>
              </div>
            </div>
            <div className='banner__main'>
              <div className='booking__header'>
                <CiCalendarDate size={30} />
                <h4>Check Out</h4>
                <TiArrowSortedDown size={30} />
              </div>
              <div className='booking__bof'>
                <h2>date</h2>
                <h4>date</h4>
              </div>
            </div>
            <div className='banner__main'>
              <div className='booking__header'>
                <MdFace size={30} />
                <h4>Adults</h4>
                <TiArrowSortedDown size={30} />
              </div>
              <div className='booking__bof'>
                <h2>date</h2>
                <h4>date</h4>
              </div>
            </div>
            <div className='banner__main'>
              <div className='booking__header'>
                <MdChildCare size={30} />
                <h4>Children</h4>
                <TiArrowSortedDown size={30} />
              </div>
              <div className='booking__bof'>
                <h2>date</h2>
                <h4>date</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner