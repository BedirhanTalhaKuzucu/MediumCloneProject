import React from 'react'
import UDMain from '../components/UserDashboard/UDMain'
import UDNavbar from '../components/UserDashboard/UDNavbar'
import UDSideBar from '../components/UserDashboard/UDSideBar'

const UserDashboard = () => {
  return (
    <div className='d-flex'>
      <h1>deneme</h1>
      <UDNavbar/>
      <UDMain/>
      <UDSideBar/>
    </div>
  )
}

export default UserDashboard