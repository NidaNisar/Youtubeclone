import React, { useState } from 'react'
import  './home.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'

function Home({sidebar}) {
  const[category,setcategory]=useState(0)
  return (
    <>
    <Sidebar  sidebar={sidebar} category={category} setcategory={setcategory}/>
       <div className={`container ${sidebar? "":"large-container"}`}>
        <Feed category={category} setcategory={setcategory}/>
       </div>
    </>
  )
}

export default Home
