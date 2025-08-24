import React, { useEffect } from 'react';
import "./recommended.css"
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { API_KEY, value_converter } from '../../data';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Recommended = ({categoryid}) => {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY
    const[apidata,setapidata]=useState([])
    const fetchdata= async ()=>{
        const realted_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryid}&key=${API_KEY}`;
        const related=await fetch(realted_url);
        const response=await related.json();
        setapidata(response.items)

    }
    useEffect(()=>{
      fetchdata();
    },[])
  return (
    <div className='recommended'>
        {apidata.map((item,index)=>{
            return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index } class="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt=""/>
            <div class="video-info">
             <h4>{item.snippet.title}</h4>
             <p>{item.snippet.channelTitle}</p>
             <p>{value_converter( item.statistics.viewCount)} Views</p>
            </div>
            
            
        </Link>)
        })}
        
     
      
    </div>
  );
}

export default Recommended;
