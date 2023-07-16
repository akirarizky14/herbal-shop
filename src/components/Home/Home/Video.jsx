import React from 'react';
import video from './mainpage.mp4';
import '../../../css/Home/Video.css';
function Video() {
  return (
    <div className='container-video'>
        <div className="wrapper-video">
            <video className='video-hero' controls autoplay>
                <source src={video} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default Video