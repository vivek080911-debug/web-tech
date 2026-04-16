import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getTVShowsData } from '../redux/movieSlice'; 
import { useLocation, useNavigate } from 'react-router-dom';

const TVShows = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const tvShows = useAppSelector(state => state.movie.tvData);
  
    useEffect(() => {
      dispatch(getTVShowsData()); 
    }, [dispatch]);

    const detailsNavigate = (data) =>{ 
        navigate("/details",{
            state:{
                data:data
            }
        })
    }

    const displayItems = tvShows?.results || [];

  return (
    <div className='bg-black w-screen h-screen pt-20'>
        <Navbar/>
        
        <h1 className='bg-black text-white font-bold text-2xl ml-6 mt-5'>
            TV Shows
        </h1>
        
        <div className='grid grid-cols-4 bg-black p-6'>
            
            {displayItems.length > 0 ? displayItems.map((data)=>{ 
                return(
                    <div key={data.id} onClick={()=> detailsNavigate(data)} className='mt-6 ml-6 cursor-pointer'>
                       
                       <img 
                           className='w-80 h-40 rounded-lg' 
                           src={data.poster_path} 
                           alt={data.title}
                       />
                       
                       <h2 className='text-white text-lg font-semibold mt-2'>{data.title}</h2>
                    </div>    
                ) 
            }) : (
                <h1 className='text-white text-xl p-6'>
                    Loading content...
                </h1>
            )}
        </div>
    </div>
  );
};

export default TVShows;