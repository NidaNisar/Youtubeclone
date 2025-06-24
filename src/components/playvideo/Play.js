import React from 'react';
import "./play.css"
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
 import share from "../../assets/share.png" 
 import save from "../../assets/save.png"
 import jack from "../../assets/jack.png"
 import user_profile from "../../assets/user_profile.jpg"
import { API_KEY } from '../../data';
import { useState ,useEffect} from "react";
import moment from 'moment';
import { value_converter } from '../../data'
const Play = ({videoid}) => {
  console.log(videoid);
   const[apidata,setapidata]=useState(null)
    const[channeldata,setchanneldata]=useState(null)
      const  fetchapidata= async()=> {
      const videolist=`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoid}&key=${API_KEY}`
      const datas= await fetch(videolist);
      const response= await datas.json();
      setapidata(response.items[0]);
          
      }
      const  fetchchanneldata= async()=> {
      const videolist=  `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id={apidata.snippet.channelid}&key=${API_KEY}
`

      const datas= await fetch(videolist);
      const response= await datas.json();
      setchanneldata(response.items[0]);
          
      }
      useEffect(()=>{
              fetchapidata();
          },[])
           useEffect(()=>{
              fetchchanneldata();
          },[])
    return (
    <div className='play-video'>
       
        <iframe
  src={`https://www.youtube.com/embed/${videoid}?autoplay=1`}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

        
        <h3>{apidata?apidata.snippet.title:'Best Youtube channel on  to learn web development'}</h3>
        <div class="play-video-info">
            <p>{ value_converter(apidata?apidata.statistics.viewCount:"16K")} Views &bull; {apidata?moment(apidata.snippet.publishedAt).fromNow():"3 days ago"}</p>
            <div>
                <span><img src={like} alt=""/>{value_converter(apidata?apidata.statistics.likeCount:'126')}</span>
                 <span><img src={dislike} alt=""/>{value_converter(apidata?apidata.statistics.dislikeCount:'126')}</span>
                  <span><img src={share} alt=""/>126</span>
                   <span><img src={save} alt=""/>126</span>
            </div>
        </div>
        <hr/>
        <div class="publisher">
          <img src={channeldata?channeldata.snippet.thumbnails.default.url:""} alt=""/>
          <div>
            <p>{apidata?apidata.snippet.channelTitle:''}</p>
        <span>1M Subscriber</span>
        </div>
        <button>Subscribe</button>
        </div>
        <div class="vid-description">
               <p>{apidata?apidata.snippet.description.slice(0,250):'Description here'}</p>
              
               <hr/>
               <h4>{value_converter(apidata?apidata.statistics.commentCount:'130')} Comments</h4>
               <div class="comment">
                <img src={user_profile} alt=""/>
                <div>
                  <h3>A global computer provide variety of internet and cc of interconnected network</h3>
                  <div class="comment-action">
                    <img src={like} alt=""/>
                    <span>244</span>
                     <img src={dislike} alt=""/>
                  </div>
                </div>
               </div>
                 <div class="comment">
                <img src={user_profile} alt=""/>
                <div>
                  <h3>A global computer provide variety of internet and cc of interconnected network</h3>
                  <div class="comment-action">
                    <img src={like} alt=""/>
                    <span>244</span>
                     <img src={dislike} alt=""/>
                  </div>
                </div>
               </div>
        </div> 
    </div>
  );
}

export default Play;
