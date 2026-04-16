import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getMovies } from '../redux/movieSlice';
import { Link } from 'react-router-dom';
import bgImage from '../images/signin.png'; 


const Welcome = () => {

  const dispatch = useAppDispatch();
  const movie = useAppSelector(state => state.movie.data);
  
  const isLoggedIn = localStorage.getItem('userToken');

  const heroMovie = movie?.results?.[0]; 
  const backgroundImageUrl = heroMovie?.backdrop_path;


  useEffect(()=>{
    dispatch(getMovies());
  },[dispatch]);

  if (isLoggedIn) {
      return (
        <div 
            className='w-screen text-white relative'
            style={{
                height: '90vh',
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.1) 70%), 
                                  url(${backgroundImageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <h1 className='text-3xl font-semibold absolute top-5 right-10' style={{ color: '#00A8E1' }}>prime video</h1>

            <div className='absolute bottom-0 left-0 p-16 w-full max-w-4xl'>
                
                <h1 className='text-7xl font-bold mb-4 text-white drop-shadow-lg'>
                    {heroMovie?.title || "Featured Movie"}
                </h1>
                
                <h2 className='text-lg text-gray-300 font-medium mb-3'>
                    Kannada | Tamil | Telugu | Malayalam
                </h2>
                
                <p className='text-xl text-gray-300 leading-normal mb-8 max-w-2xl'>
                    {heroMovie?.overview.substring(0, 150) + "..." || "Watch the latest movies, TV shows, and award-winning Amazon Clone Originals."}
                </p>
                
                <div className='flex items-center space-x-4'>
                    <Link to={`/details`} state={{data: heroMovie}}>
                        <button className='bg-white text-black text-xl font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors'>
                            Rent UHD ₹279
                        </button>
                    </Link>

                    <Link to={`/details`} state={{data: heroMovie}}>
                        <button className='bg-gray-700 bg-opacity-70 text-white p-3 rounded-full hover:bg-gray-600 transition-colors'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </Link>
                </div>

                <div className='mt-4 flex items-center space-x-2'>
                    <input type="checkbox" checked={true} readOnly className="h-4 w-4 text-sky-500 rounded border-gray-300 focus:ring-sky-500 bg-sky-500" />
                    <span className='text-sm text-gray-300'>Included with Prime</span>
                </div>
            </div>
            
            <div className='absolute bottom-16 right-16 bg-black bg-opacity-50 p-1 rounded'>
                 <span className='text-sm font-bold text-white'>U/A 16+</span>
            </div>
            
        </div>
      );
  }

  return (
    <div className='w-screen text-white flex relative' 
         style={{ 
             height: '100vh', 
             backgroundImage: `linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0.1)), url(${bgImage})`,
             backgroundSize: 'cover', 
             backgroundPosition: 'center', 
             backgroundRepeat: 'no-repeat',
         }}
    >
      
      <div className='absolute bottom-0 w-full text-xs text-gray-400 p-2 flex justify-center space-x-4 z-20'>
          <span className='hover:underline cursor-pointer'>Terms and Privacy Notice</span>
          <span className='hover:underline cursor-pointer'>Send us feedback</span>
          <span className ='hover:underline cursor-pointer'>Help</span>
          <span>© 1996-2025, Amazon.com, Inc. or its affiliates</span>
      </div>

      <div className='relative z-10 pt-32 pl-24' style={{ width: '400px' }}>
        
        <h1 className='text-3xl font-bold mb-8' style={{ color: '#00A8E1' }}>prime video</h1>

        <h1 className='text-3xl font-bold mb-2'>Welcome to Prime Video</h1>
        
        <h2 className='text-base text-gray-300 mb-8'>
          Enjoy exclusive Amazon Originals, popular movies, and hit TV shows – all available on Prime Video.
        </h2>
        
        <div className='mb-6'>
          <label className='block text-base text-gray-300 mb-1'>Country/Region</label>
          <select className='w-full p-2 bg-black border border-gray-600 rounded text-white text-base appearance-none'>
            <option>India</option>
            <option>United States</option>
            <option>Other</option>
          </select>
        </div>

        <div className='flex flex-col space-y-4'>
            <Link to="/login">
              <button className='bg-sky-700 p-2.5 rounded w-full text-base font-semibold hover:bg-sky-800 transition-colors'>
                Sign in
              </button>
            </Link>

            <Link to="/create-account">
              <button className='bg-gray-700 p-2.5 rounded w-full text-base font-semibold hover:bg-gray-600 transition-colors'>
                Create Account
              </button>
            </Link>
        </div>

      </div>
    </div>
  );
}

export default Welcome