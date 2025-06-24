import React from 'react'
import './sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import  automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
const Sidebar = ({sidebar,category,setcategory}) => {
  return (
   <div class={`sidebar ${sidebar?"":"small-sidebar"} `}>
    <div class="sortcut-links">
        
            
        <div class={`sidelink ${category===0?"active":" "}` } onClick={()=>{setcategory(0)}}>
                  <img src={home} alt="" /><p>Home</p>
        </div>
           
          <div class={`sidelink ${category===2?"active":" "}` } onClick={()=>{setcategory(2)}}>
             <img src={automobiles} alt="" /><p>Automobiles</p>
        </div>
           
          <div class={`sidelink ${category===20? "active":" "}` } onClick={()=>{setcategory(20)}}>
              <img src={game_icon} alt="" /><p>Gaming</p>
        </div>
           
          <div class={`sidelink ${category===17? "active":" "}` } onClick={()=>{setcategory(17)}}>
             <img src={sports} alt="" /><p>Sports</p>
        </div>
           
          <div class={`sidelink ${category===24? "active":" "}` } onClick={()=>{setcategory(24)}}>
             <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>
          <div class={`sidelink ${category===28? "active":" "}` } onClick={()=>{setcategory(28)}}>
            <img src={tech} alt="" /><p>Tech</p>
        </div>
          <div class={`sidelink ${category===10? "active":" "}` } onClick={()=>{setcategory(10)}}>
            <img src={music} alt="" /><p>Music</p>
        </div>
          <div class={`sidelink ${category===22? "active":" "}` } onClick={()=>{setcategory(22)}}>
            <img src={blogs} alt="" /><p>blogs</p>
        </div>
          <div class={`sidelink ${category===25? "active":" "}` } onClick={()=>{setcategory(25)}}>
            <img src={news} alt="" /><p>news</p>
        </div>
        
        <hr/>
       
    </div>
    <div class="subscribed-list">
        <h3>Subscribed</h3>
        <div class="sidelink">
            <img src={simon} alt="" /><p>PewDiePie</p>
        </div>
        <div class="sidelink">
            <img src={jack} alt="" /><p>MrBeast</p>
        </div>
        <div class="sidelink">
            <img src={tom} alt="" /><p>Justin bieber</p>
        </div>
        <div class="sidelink">
            <img src={megan} alt="" /><p>5 Mnutes craft</p>
        </div>
        <div class="sidelink">
            <img src={cameron} alt="" /><p>Nas Daily</p>
        </div>
    </div>
   </div>
  )
}

export default Sidebar
