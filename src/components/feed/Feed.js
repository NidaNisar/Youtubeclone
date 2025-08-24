import React, { useEffect, useState } from 'react'
import moment from 'moment';

import { Link } from 'react-router-dom'
import "./feed.css"
import {API_KEY} from "../../data"
import { value_converter } from '../../data'
// AIzaSyA06NZIZV7gLSky3IJKRmmqUZtlUajd9KA
const Feed = ({category}) => {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY
    const[data,setdata]=useState([])
    const  fetchdata= async()=> {
    const videolist=`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&videoCategoryId=${category}&maxResults=50&key=${API_KEY} `
    const datas= await fetch(videolist);
    const response= await datas.json();
    setdata(response.items);
        
    }
    useEffect(()=>{
        fetchdata();
    },[category])
  return (
    <div class='Feed'>
            {data.map((item,index)=>{
                return(
                    <Link  to={`video/${item.snippet.categoryId}/${item.id}`} class="card">
            <img src={item.snippet.thumbnails.medium.url} alt=""/>
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_converter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
                )
            })}
        
       
      
    </div>
  )
}

export default Feed
