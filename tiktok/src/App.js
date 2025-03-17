import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/v2/posts')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div className="app">
      <div className='app_videos'>
        {videos.map(video => (
          <Video 
            key={video._id}
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={parseInt(video.likes, 10)}
            messages={parseInt(video.messages, 10)}
            shares={parseInt(video.shares, 10)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;