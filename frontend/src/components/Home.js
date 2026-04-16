import React, { useEffect, useState } from "react"; 
import Navbar from "./Navbar";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getMovies } from "../redux/movieSlice";
import Category from "./Category";
import { useNavigate } from "react-router-dom"; 

const IntroVideo = ({ onFinish }) => (
  <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
    <video
      src="/intro.mp4" 
      autoPlay
      muted  
      onEnded={onFinish}
      className="w-full h-full object-cover"
    />
  </div>
);

const Home = () => {

  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem("introPlayed") !== "true";
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const movie = useAppSelector((state) => state.movie.data);
  const moviesList = movie?.results || [];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const hero = moviesList[currentSlideIndex] || moviesList[0];
  const maxSlides = Math.min(moviesList.length, 5); 

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    if (moviesList.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlideIndex(prevIndex => (prevIndex + 1) % maxSlides);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [moviesList.length, maxSlides]);

  const handleNext = () => {
    setCurrentSlideIndex(prevIndex => (prevIndex + 1) % maxSlides);
  };
  const handlePrev = () => {
    setCurrentSlideIndex(prevIndex => (prevIndex - 1 + maxSlides) % maxSlides);
  };
  const handleWatchNow = () => {
    if (hero) {
      navigate("/details", { state: { data: hero } });
    }
  };

  if (showIntro) {
    return (
      <IntroVideo
        onFinish={() => {
          sessionStorage.setItem("introPlayed", "true"); 
          setShowIntro(false);
        }}
      />
    );
  }

  return (
    <div className="bg-[#0f171e] min-h-screen">
      <Navbar />

      <div className="relative w-full h-[90vh] flex items-end justify-start text-white mt-16 transition-all duration-1000 ease-in-out group" 
        style={{
          backgroundImage: hero
          ? `linear-gradient(to right, rgba(15,23,30,0.3) 20%, rgba(15,23,30,0.1) 60%, rgba(15,23,30,0.0) 80%), 
         linear-gradient(to top, rgba(15,23,30,0.3) 10%, transparent 50%), 
          url(${hero.backdrop_path})`
        : "none",
          backgroundSize: "contain", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", 
        }}
      >

        {moviesList.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 bg-black/50 hover:bg-black/70 transition-opacity duration-300 z-10 opacity-0 group-hover:opacity-100 rounded-r-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        
        {moviesList.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 bg-black/50 hover:bg-black/70 transition-opacity duration-300 z-10 opacity-0 group-hover:opacity-100 rounded-l-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        <div className="ml-16 max-w-xl mb-20"> 
          <h1 className="text-7xl font-bold mb-4 whitespace-nowrap">
            {hero?.title || "Welcome to Prime Video"}
          </h1>
          <p className="text-gray-300 mb-6 text-base max-w-md">
            Stream exclusive movies, TV shows, and live events. Watch anywhere,
            anytime.
          </p>
          <button 
            onClick={handleWatchNow}
            className="bg-[#00A8E1] px-6 py-2 rounded-md hover:bg-[#0095C8] font-semibold"
          >
            Watch Now
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {moviesList.length > 0 && Array.from({ length: maxSlides }).map((_, index) => (
            <div 
              key={index}
              onClick={() => setCurrentSlideIndex(index)} 
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentSlideIndex ? 'bg-white scale-110' : 'bg-gray-500/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-16 pb-10"> 
        <h2 className="text-white text-3xl font-bold mb-2 mt-8">Trending Now</h2>
        <Category category="Trending" />

        <h2 className="text-white text-3xl font-bold mb-2 mt-8">Action Movies</h2>
        <Category category="Action" />

        <h2 className="text-white text-3xl font-bold mb-2 mt-8">Horror Movies</h2>
        <Category category="Horror" />

        <h2 className="text-white text-3xl font-bold mb-2 mt-8">Comedy Movies</h2>
        <Category category="Comedy" />
      </div>
    </div>
  );
};

export default Home;
