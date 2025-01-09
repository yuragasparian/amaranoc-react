import React from 'react'
import Calendar from "../../assets/icons/calendar.svg"
import Map from "../../assets/icons/map.svg"

function SideFilter() {
  return (
    <div className='flex gap-6'>
        <div className='border border-black flex justify-center items-center px-4 py-3 rounded-full gap-2'>
            <span>Map</span>
            <img src={Map} alt="" />
        </div>

        <div className='border border-black flex justify-center items-center px-4 py-3 rounded-full gap-2'>
        <img src={Calendar} alt="" />
        </div>
        
    </div>
  )
}

export default SideFilter