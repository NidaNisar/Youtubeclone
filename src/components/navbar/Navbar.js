import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import notification from '../../assets/notification.png'
import more_icon from '../../assets/more.png'
import profile_icon from '../../assets/user_profile.jpg'
import '../../App.css'
import { Link } from 'react-router-dom'
const Navbar = ({setsidebar}) => {
  return (
    <nav>
      <div className='flex-div'>
        <div className='nav-left flex-div'>
            <img  className='menu_icon' onClick={()=>{ setsidebar(prev=>!prev)}} src={menu_icon} alt=''/>
          <Link to='/'><img className='logo' src={logo} alt=''/></Link>  

        </div>
      </div>
      <div className='nav-middle flex-div'>
        <div className='searchbox flex-div'>
         <input type='text' placeholder='Search'/>
          <img className='logo' src={search_icon} alt=''/>
        </div>
       
      </div>
      <div className='nav-right flex-div'>
       <img  src={upload_icon} alt=''/>
        <img  src={more_icon} alt=''/>
         <img  src={notification} alt=''/>
          <img className='user-icon' src={profile_icon} alt=''/>
      </div>
    </nav>
  )
}

export default Navbar
