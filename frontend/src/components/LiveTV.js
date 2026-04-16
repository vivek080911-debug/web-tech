import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getMovies } from '../redux/movieSlice'; 
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const LiveTV = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const [channels, setChannels] = useState([]); 
    const [loading, setLoading] = useState(true);

    const fetchLiveChannels = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/movies/live'); 
            const data = await response.json();

            if (response.ok && data.channels) {
                setChannels(data.channels);
            } else {
                console.error("Backend error or no channels found.");
                setChannels([]);
            }
        } catch (error) {
            console.error("Network failed to reach live channel endpoint:", error);
            setChannels([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLiveChannels();
        dispatch(getMovies()); 
    }, [dispatch]);

    const playChannel = (channelData) => { 
        const CHANNEL_STREAM_KEY = channelData.stream_key;

        if (!CHANNEL_STREAM_KEY) {
             toast.error(`No live stream key found for ${channelData.name}.`);
             return;
        }

        navigate("/trailer", {
            state: {
                key: CHANNEL_STREAM_KEY, 
                type: 'live',
                id: channelData.id 
            }
        });
    }

    return (
        <div className='bg-black w-screen min-h-screen pt-20'>
            <Navbar/>
            <ToastContainer />
            
            <h1 className='bg-black text-white font-bold text-3xl ml-6 mt-5 p-3'>
                Live TV Channels
            </h1>
            
            <div className='grid grid-cols-5 bg-black p-6'>
                
                {loading ? (
                    <h1 className='text-white text-xl ml-6'>Loading live channel guide...</h1>
                ) : channels.length > 0 ? channels.map((data)=>{ 
                    return(
                        <div key={data.id} onClick={() => playChannel(data)} className='m-4 cursor-pointer text-center'>
                          
                           <img 
                                className='w-48 h-24 rounded-lg mx-auto border border-gray-600' 
                                src={data.logo_url} 
                                alt={data.name}
                            />
                           <h2 className='text-white text-lg mt-2'>{data.name}</h2>
                        </div>    
                    ) 
                }) : (
                    <h1 className='text-white text-xl ml-6'>No live channels currently available.</h1>
                )}
            </div>
        </div>
    );
};

export default LiveTV;