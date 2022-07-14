import React from 'react'
import UDMain from '../components/UserDashboard/UDMain'
import UDNavbar from '../components/UserDashboard/UDNavbar'
import UDSlideBar from '../components/UserDashboard/UDSlideBar'

const UserDashboard = () => {
  return (
    <div className='d-flex'>
      <UDNavbar/>
      <UDMain/>
      <UDSlideBar/>
    </div>
  )
}

export default UserDashboard