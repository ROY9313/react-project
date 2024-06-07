import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
  return (
    <div className='careers-layout'>
        <h2>Careers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>


        <Outlet/>
    </div>
  )
}