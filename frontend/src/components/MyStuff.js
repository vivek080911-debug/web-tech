import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { getMovies } from '../redux/movieSlice';
import { useNavigate } from 'react-router-dom'; 

const MyStuff = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const movie = useAppSelector(state => state.movie.data);
    
    const moviesList = movie?.results ? [...movie.results] : []; 
    
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    const detailsNavigate = (data) => {
        if (data) {
            navigate("/details", {
                state: { data: data }
            });
        }
    };

    return (
        <div className='bg-black w-screen min-h-screen text-white'>
            <Navbar />
            
            <div className='p-6 ml-6 pt-20'>
                <h1 className='font-bold text-3xl mt-5'>My Stuff</h1>
                <h2 className='text-xl text-gray-400 mt-3'>Your Watchlist and Purchases</h2>
                
                <p className='mt-5 text-gray-500 mb-6 text-sm'>
                    Watchlist functionality not active. Showing default movies as placeholder.
                </p>
                
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                    {moviesList.slice(0, 8).map(data => (
                        <div 
                            key={data.id} 
                            onClick={() => detailsNavigate(data)} 
                            className='cursor-pointer flex flex-col items-start'
                        >
                            <img 
                                className='w-full h-72 rounded-lg object-cover shadow-lg hover:opacity-80 transition-opacity' 
                                src={data.poster_path} 
                                alt={data.title} 
                            />
                            <p className='text-sm font-medium mt-2 w-full truncate'>{data.title}</p> 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyStuff;