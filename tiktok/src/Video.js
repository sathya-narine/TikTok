import React, { useRef, useState} from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import VideoHeader from './VideoHeader';

function Video({ url,channel, song, description,likes,shares,messages }) {
  const [playing, setPlaying] =useState(false);
  const videoRef =  useRef(null);
  const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }
  }
  return (
    <div className="video">
      
      <video 
      onClick={handleVideoPress}
      className='video_player'
      loop
      ref={videoRef}
      src={url}></video>
      <VideoHeader channel={ channel }/>
      {/* video footer*/}
      <VideoFooter channel={ channel} description={ description } song={ song } />
      
      {/* video side bar*/}
      <VideoSidebar likes={ likes } shares={ shares } messages={ messages}/>
    </div>
  );
}

export default Video;
