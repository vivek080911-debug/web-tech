import React from "react";
import { useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";

const Category = ({ category }) => {
  const navigate = useNavigate();
  const movie = useAppSelector((state) => state.movie.data);
  const moviesList = movie?.results || [];

  const handleClick = (m) => {
    navigate("/details", { state: { data: m } });
  };
  
  let startIndex = 0;
  
  if (category === "Action") {
    startIndex = 4;
  } else if (category === "Horror") {
    startIndex = 8;
  } else if (category === "Comedy") {
    startIndex = 12;
  }
  
  const safeStartIndex = startIndex % moviesList.length;
  
  const staggeredList = [
      ...moviesList.slice(safeStartIndex),
      ...moviesList.slice(0, safeStartIndex)
  ];


  return (
    <div className="flex overflow-x-auto space-x-6 scrollbar-hide"> 
      {staggeredList.slice(0, 10).map((m, index) => (
        <div
          key={m.id || index} 
          className="min-w-[180px] cursor-pointer hover:z-20 transform hover:scale-105 transition-transform duration-300"
          onClick={() => handleClick(m)}
        >
          <div className="relative w-full h-[250px] rounded-md overflow-hidden bg-[#1a242f]"> 
              <img
                src={m.poster_path}
                alt={m.title}
                className="w-full h-full object-cover" 
              />
          </div>
          <h3 className="text-gray-300 mt-2 text-sm truncate text-center">{m.title}</h3> 
        </div>
      ))}
    </div>
  );
};

export default Category;