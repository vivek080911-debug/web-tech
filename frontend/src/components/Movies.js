import React,{useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { getMovies } from '../redux/movieSlice'
import Navbar from './Navbar'
import { useLocation, useNavigate } from 'react-router-dom'

const Movies = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const movie = useAppSelector(state => state.movie.data)
  
    const searchTerm = location?.state?.data || "";
    
    
    useEffect(()=>{
      dispatch(getMovies())
    },[dispatch])

    const detailsNavigate = (data) =>{ 
        navigate("/details",{
            state:{
                data:data
            }
        })
    }

   const filteredMovies = movie?.results?.filter((data) => {
    const title = data?.title; 
    
    if (typeof title !== 'string') return false; 
    
    return title.toLowerCase().includes(searchTerm.toLowerCase());
});

  return (
    <div className='bg-black w-screen h-screen pt-20'>
    <Navbar/>
    <h1 className='bg-black text-white font-bold text-2xl ml-6 mt-5'>
        Results for "{searchTerm || "All Movies"}"
    </h1>
    
    <div className='grid grid-cols-4 bg-black mt-4'>
      {filteredMovies && filteredMovies.length > 0 ? filteredMovies.map((data)=>{ 
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
            No results found for "{searchTerm || "All Movies"}".
        </h1>
      )}
    </div>
    </div>
  )
}

export default Movies