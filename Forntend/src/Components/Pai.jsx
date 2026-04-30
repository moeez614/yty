import React from 'react'
import { NavLink } from 'react-router-dom'
import { format } from 'date-fns'


const Pai = () => {
  const date = format(new Date(), 'eeee, MMMM dd')

  return (
    <div>
      <div className="new-bar">
        <section>
          <h3>Good Morning , Dr. Name</h3>
          <h5>{date} . 6 appointments today</h5>
        </section>
        <section style={{ paddingLeft: '20' }}>
          <NavLink><i className="fa-regular fa-bell"></i></NavLink>
          <NavLink to={"settings"}><i className="fa-solid fa-gear setkar"></i></NavLink>
        </section>
      </div>
    </div>
  )
}

export default Pai
