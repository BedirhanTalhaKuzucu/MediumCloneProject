import React, { useState, useEffect } from "react";
import StoryDetailMain from "../components/Story/StoryDetailMain";
import UDNavbar from "../components/UserDashboard/UDNavbar";
import UDSideBar from "../components/UserDashboard/UDSideBar";
import { useLocation } from 'react-router-dom'

const StoryDetail = () => {
  const [sideBarEffect, setsideBarEffect] = useState(false)

  const location = useLocation()
  const { details } = location.state 
  console.log(details)
  

  useEffect(() => {
    setsideBarEffect(true)
    return () => {
      setsideBarEffect(false)
    }
  }, [])
  


  return (
    <div className="d-flex">
      <UDNavbar />
      <StoryDetailMain details = {details} />
      <UDSideBar sideBarEffect= {sideBarEffect} creatorInfo = {details.creatorInfo } />
    </div>
  );
};

export default StoryDetail;
