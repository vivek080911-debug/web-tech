import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome"; 
import Signin from "./components/Signin";
import CreateAccount from "./components/CreateAccount";
import Home from "./components/Home";
import Movies from "./components/Movies";
import TVShows from "./components/TVShows";
import LiveTV from "./components/LiveTV";
import Details from "./components/Details";
import Trailer from "./components/Trailer";
import Subscriptions from "./components/Subscriptions";
// Intro.js is deleted for stability
// import Intro from "./components/Intro"; 

/**
 * Wrapper component to protect routes.
 */
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("userToken");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  
  if (!token && !isLoggedIn) {
    return <Navigate to="/signin" replace />; 
  }
  return children;
};


function App() {
  // CRITICAL: Check the login status once at the highest level
  const isAuthenticated = localStorage.getItem("userToken") || localStorage.getItem("isLoggedIn");

  return (
    <Routes>
      {/* 1. UNPROTECTED ROUTES */}
      
      {/* 💡 CRITICAL FIX: The root path checks authentication first. 
         If authenticated, go straight to HOME. Otherwise, go to SIGNIN (Welcome page). 
         We use a simple Redirect instead of the complex Intro feature for stability. */}
      <Route path="/" element={isAuthenticated ? <Navigate to="/home" replace /> : <Navigate to="/signin" replace />} />
      
      {/* The Sign In path renders the static Welcome component (which is ONLY static content now) */}
      <Route path="/signin" element={<Welcome />} />
      
      {/* The actual sign-in form is accessed via /login */}
      <Route path="/login" element={isAuthenticated ? <Navigate to="/home" replace /> : <Signin />} /> 
      <Route path="/create-account" element={<CreateAccount />} />

      {/* 2. PROTECTED ROUTES */}
      <Route 
        path="/home" 
        element={<ProtectedRoute><Home /></ProtectedRoute>} 
      />
      <Route 
        path="/movies" 
        element={<ProtectedRoute><Movies /></ProtectedRoute>} 
      />
      <Route 
        path="/tvshows" 
        element={<ProtectedRoute><TVShows /></ProtectedRoute>} 
      />
      <Route 
        path="/livetv" 
        element={<ProtectedRoute><LiveTV /></ProtectedRoute>} 
      />
      <Route 
        path="/details" 
        element={<ProtectedRoute><Details /></ProtectedRoute>} 
      />
      <Route 
        path="/trailer" 
        element={<ProtectedRoute><Trailer /></ProtectedRoute>} 
      />
      <Route 
        path="/subscriptions" 
        // 💡 CRITICAL FIX: Render the new Subscriptions component
        element={<ProtectedRoute><Subscriptions /></ProtectedRoute>} 
      />
      
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/home" replace />} />

    </Routes>
  );
}

export default App;