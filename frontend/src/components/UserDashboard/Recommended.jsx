import React from 'react'
import ArticleCard from "./ArticleCard";
import { useState } from 'react';
import { useAppState } from "../../contexts/AppContext";


const Recommended = () => {
  const { data } = useAppState();

  return (
    <div>
      {data ?
      data.map((item, key) => (
        <ArticleCard key={key} data ={item} />
        )) 
      :
      <h4>Loading</h4>
      }
      
    </div>
  )
}

export default Recommended