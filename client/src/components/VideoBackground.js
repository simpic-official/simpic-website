// components/VideoBackground.js
import React from 'react';
import '../VideoBackground.css'; 

const VideoBackground = () => {
  return (
    <div className="videoContainer">
      <video autoPlay loop muted className="video">
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
