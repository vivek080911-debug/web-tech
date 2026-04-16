import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Trailer = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const videoKey = location?.state?.key; 
  const isExternal = videoKey && !videoKey.startsWith('http'); 

  if (!videoKey) {
      return (
          <div className="bg-black w-screen h-screen flex items-center justify-center text-white">
              <h1 className="text-xl">Video key missing. Please select a movie/episode first.</h1>
          </div>
      );
  }

  return (
    <div className="video-player bg-black w-screen h-screen flex items-center justify-center">
      
      {isExternal ? (
       <iframe
    className="w-full h-screen object-cover" 
    src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&controls=1&rel=0&modestbranding=1`} 
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
    title="Video Player"
  ></iframe>
      ) : (
        <video 
          controls 
          autoPlay 
          className="w-full h-screen"
        >
          <source src={videoKey} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default Trailer;