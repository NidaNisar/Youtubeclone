import React from 'react'
import './video.css'
import Play from '../../components/playvideo/Play' 
import Recommended from '../../components/recommended/Recommended'
import { useParams } from 'react-router-dom'
function Video() {
  const{videoid,categoryid}= useParams();
  return (
    <div className='play-container'>
      <Play videoid={videoid}/>
      <Recommended categoryid={categoryid}/>
    </div>
  )
}

export default Video
