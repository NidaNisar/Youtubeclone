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
import { useParams } from 'react-router-dom';
const Play = () => {

  const{videoid}=useParams();
   const[apidata,setapidata]=useState(null)
    const[channeldata,setchanneldata]=useState(null)
    const[comments,setcomments]=useState([]);
      const  fetchapidata= async()=> {
      const videolist=`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoid}&key=${API_KEY}`
      const datas= await fetch(videolist);
      const response= await datas.json();
      setapidata(response.items[0]);
          
      }

      const  fetchchanneldata= async()=> {
      const channellist=  `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apidata.snippet.channelId}&key=${API_KEY}`

      const channeldata= await fetch(channellist);
      const channelresponse= await channeldata.json();
       if (!channelresponse.items || channelresponse.items.length === 0) {
      console.error("No channel data returned.");
      return;}
      setchanneldata(channelresponse.items[0]);
     

          const url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoid}&key=${API_KEY}`;
          const commentdata= await fetch(url);
      const  commentresponse= await commentdata.json();
      setcomments(commentresponse.items);
      }
      useEffect(()=>{
              fetchapidata();
          },[])
           useEffect(()=>{
             if (apidata && apidata.snippet && apidata.snippet.channelId) {
               fetchchanneldata();
  }
          },[apidata])
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
        <span>{ value_converter(channeldata?channeldata.statistics.subscriberCount:"1M")} Subscriber</span>
        </div>
        <button>Subscribe</button>
        </div>
        <div class="vid-description">
               <p>{apidata?apidata.snippet.description.slice(0,250):'Description here'}</p>
              
               <hr/>
               <h4>{value_converter(apidata?apidata.statistics.commentCount:'130')} Comments</h4>
               {comments.map((item,index)=>{
                return(
                <div class="comment">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=""/>
                <div>
                  <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                  <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                  <div class="comment-action">
                    <img src={like} alt=""/>
                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                     <img src={dislike} alt=""/>
                  </div>
                </div>
               </div>
                
                )
               })}
              
              
        </div> 
    </div>
  );
}

export default Play;
