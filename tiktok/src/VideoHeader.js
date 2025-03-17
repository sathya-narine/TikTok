import React from 'react'
import "./VideoHeader.css";
function VideoHeader({ channel }) {
  return (
    <div className='VideoHeader'>
        <div className='logobox'>
        <img className='logo' width='100%' height='30' src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/2560px-TikTok_logo.svg.png' alt='logo'/>
        <p className='channel'>@{ channel }</p>
        </div>
    </div>
  )
}

export default VideoHeader
