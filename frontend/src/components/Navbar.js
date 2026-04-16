import React, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const currentPath = window.location.pathname; 
  
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("userToken");
    
    setTimeout(() => {
        navigate("/signin"); 
    }, 50); 
  };
  
  const handleSearch = () => {
    navigate("/movies", { 
      state: { 
        data: searchQuery.trim() 
      } 
    });
  };

  const liveSearchNavigate = (query) => {
    navigate("/movies", {
      state: {
        data: query.trim()
      }
    });
  };


  const getLinkStyle = (path) => {
    const isActive = currentPath === path || (path === "/home" && currentPath === "/");

    if (isActive) {
      return { 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        borderRadius: '5px',
        padding: '6px 14px',
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 5px rgba(255, 255, 255, 0.1)' 
      };
    }
    return { padding: '6px 14px' };
  };


  return (
    <nav className="flex justify-between items-center px-16 py-4 bg-black/75 text-white fixed top-0 left-0 w-full z-50 shadow-lg">

      
      <div className="flex items-center space-x-10">
        <h1
          className="text-2xl font-bold text-white cursor-pointer" 
          onClick={() => navigate("/home")}
        >
          prime video
        </h1>
        {isLoggedIn && (
          <div className="flex items-center space-x-2 text-gray-300 text-base font-medium"> 
            
            <Link to="/home" style={getLinkStyle('/home')} className="hover:text-white transition-colors duration-200">Home</Link>
            <Link to="/movies" style={getLinkStyle('/movies')} className="hover:text-white transition-colors duration-200">Movies</Link>
            <Link to="/tvshows" style={getLinkStyle('/tvshows')} className="hover:text-white transition-colors duration-200">TV Shows</Link>
            <Link to="/livetv" style={getLinkStyle('/livetv')} className="hover:text-white transition-colors duration-200">Live TV</Link>
            
            <div className="flex items-center space-x-4 ml-6 pl-4 border-l border-gray-700 h-6">
                <div className="text-xl font-extrabold text-[#00A8E1]">prime</div>
                
                <Link 
                    to="/subscriptions" 
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                    Subscriptions
                </Link>
            </div>
          </div>
        )}
      </div>
      
      {isLoggedIn ? (
        <div className="flex items-center space-x-6">
            
            <div className="flex items-center bg-gray-800/80 rounded-sm px-2 py-1 border border-transparent focus-within:border-gray-500 transition-colors">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => { 
                        const query = e.target.value;
                        setSearchQuery(query);
                        liveSearchNavigate(query); 
                    }}
                    onKeyPress={(e) => { 
                        if (e.key === 'Enter') handleSearch();
                    }}
                    placeholder="Search titles..."
                    className="bg-transparent text-white text-sm focus:outline-none w-36"
                />
            </div>

            <div className="flex items-center space-x-4 text-gray-400">
                <svg 
                    onClick={handleSearch} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 cursor-pointer hover:text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.405L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
            
            <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center cursor-pointer hover:bg-sky-400 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            </div>
            
            <button
                onClick={handleLogout}
                className="text-sm font-semibold text-white px-4 py-1 hover:text-gray-400 transition-colors"
            >
                Sign Out
            </button>
        </div>
      ) : (
        <Link
          to="/signin"
          className="bg-[#00A8E1] px-3 py-1 rounded-md hover:bg-[#0095C8] text-sm font-semibold"
        >
          Sign In
        </Link>
      )}
    </nav>
  );
};

export default Navbar;