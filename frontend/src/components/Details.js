import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import movieIcon from '../images/movie.png'; 

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location?.state?.data;

  const [videoKey, setVideoKey] = useState(null); 
  
  const [expandedSeason, setExpandedSeason] = useState(null); 
  
  const isTVShow = movie?.seasons && movie.seasons.length > 0;


  const fetchVideoKey = async (type, episodeKey = null) => {
    
    const currentToken = localStorage.getItem('userToken'); 
    
    if (!currentToken) {
      toast.warning("Please sign in to watch videos.");
      navigate("/signin"); 
      return;
    }
    
    if (!movie?.id && !episodeKey) {
      toast.error("Video ID is missing.");
      return;
    }

    let keyToPlay = episodeKey;
    
    if (!keyToPlay) {
        try {
            const response = await fetch(`http://localhost:5000/api/movies/trailer/${movie.id}?type=${type}`);
            
            if (!response.ok) {
                const errorData = await response.json();
                toast.error(errorData.message || `Server failed to find ${type} key.`);
                return;
            }

            const data = await response.json();
            keyToPlay = data.key;

            if (!keyToPlay) {
                toast.error(`No ${type} video available for this title.`);
                return; 
            }

        } catch (error) {
            console.error("Fetch error:", error);
            toast.error('Failed to connect to video server. Check server status.');
            return;
        }
    }
    if (keyToPlay.startsWith('https://')) {
        // Use window.location.href to redirect the CURRENT tab
        window.location.href = keyToPlay; 
        
        // Use the toast message before redirecting to inform the user
        toast.info("Redirecting to external streaming link..."); 
        
        // We stop the function immediately after setting the new location
        return; 
    }
    
    navigate('/trailer', { state: { key: keyToPlay, type: type, id: movie.id } }); 
  };

  useEffect(() => {
    if (!movie) {
      toast.error("No movie data found. Returning to home.");
      navigate('/home'); 
    }
  }, [movie, navigate]);

  if (!movie) return null;

  const currentBackdrop = movie.backdrop_path;


  const renderEpisodeList = (season) => (
      <div className='mt-2 ml-4 p-2 bg-gray-900 rounded'>
          {movie.seasons.find(s => s.season_number === season.season_number)?.episodes.map(episode => (
              <div 
                  key={episode.episode_number}
                  className='flex justify-between items-center p-3 my-1 border-b border-gray-700 last:border-b-0 cursor-pointer hover:bg-gray-700 rounded transition-colors'
                  onClick={() => fetchVideoKey('episode', episode.key)} 
              >
                  <span className='text-sm font-light w-1/12'>{episode.episode_number}.</span>
                  <span className='text-base font-medium w-8/12'>{episode.title}</span>
                  <span className='text-xs text-gray-500 w-2/12 text-right'>{episode.duration}</span>
                  <span className='w-1/12 text-right text-sky-400 font-bold'>▶</span>
              </div>
          ))}
      </div>
  );

  const renderMovieButtons = () => (
    <div className='flex items-center text-lg text-gray-300 mb-6'>
      <span>{movie.original_language?.toUpperCase()}</span>
      <span className='ml-4'>{movie.release_date}</span>
      
      <span className='ml-4 flex items-center cursor-pointer text-white font-semibold'>
        <button 
            onClick={() => fetchVideoKey('trailer')} 
            className="bg-gray-700 p-2 rounded-md hover:bg-gray-600 transition-colors"
        >
            Trailer
        </button>
    </span>
      
      <span className='ml-4 flex items-center cursor-pointer text-white font-semibold'>
          <button 
              onClick={() => fetchVideoKey('full')} 
              className="bg-sky-700 p-2 rounded-md hover:bg-sky-800 transition-colors"
          >
              Watch Movie
          </button>
      </span>
    </div>
  );


  return (
    <>
      <Navbar />
      <ToastContainer />
    <div 
        className='relative w-screen h-screen bg-black text-white flex flex-col justify-end p-10'
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.1) 100%), url(${currentBackdrop})`,
          backgroundSize: 'contain', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          paddingTop: '64px',
        }}
      >
        <div className="z-10 relative bottom-0 left-0 p-8">
          <h1 className="text-6xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg mb-4 w-2/3">{movie.overview}</p>
          
          {isTVShow ? (
              <div className='mt-8'>
                  {renderMovieButtons()} 

                  <h2 className='text-2xl font-bold mb-4'>Seasons</h2>
                  {movie.seasons.map((season, index) => (
                      <div key={season.season_number} className='mb-3'>
                          <button
                              className='w-full text-left bg-gray-800 p-3 rounded-md flex justify-between items-center hover:bg-gray-700 transition-colors'
                              onClick={() => setExpandedSeason(expandedSeason === index ? null : index)}
                          >
                              <span className='text-xl font-semibold'>{season.name}</span>
                              <span className='text-xl'>{expandedSeason === index ? '▲' : '▼'}</span>
                          </button>
                          {expandedSeason === index && renderEpisodeList(season)}
                      </div>
                  ))}
              </div>
          ) : (
              renderMovieButtons()
          )}
        </div>
      </div>
    </>
  );
};

export default Details;