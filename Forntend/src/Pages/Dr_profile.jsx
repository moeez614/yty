import React from 'react'
import DrDashboard from '../Components/DrDashboard'
import { Outlet } from 'react-router-dom'
import Pai from '../Components/Pai'
const Dr_profile = () => {
  return (
    <div className='okha'>
      <DrDashboard />
      <section className='adjustment'>
        <Pai />
        <Outlet />
      </section>
    </div>
  )
}

export default Dr_profile
