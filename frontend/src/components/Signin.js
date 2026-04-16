import React, { useState } from "react";
import prime from "../images/prime.png";
import { useNavigate, Link } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginBackground from '../images/login_bg.webp'; 


const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailLogin = async() =>{
    try{
        if (!email || !password) {
            toast.error("Please enter both email and password.");
            return;
        }

        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            toast.success(data.message);
            localStorage.setItem("userToken", data.token);
            localStorage.setItem("userName", data.name);
            localStorage.setItem("isLoggedIn", "true"); 
            navigate("/home"); 
        } else {
            toast.error(data.message || 'Login failed');
        }

    }catch(err){
      console.error(err)
      toast.error("Network error. Check server status.");
    }
  }

  return (
    <>
    <ToastContainer autoClose={3000}/>
    <div 
        className='flex flex-col justify-center items-center h-screen w-screen text-white' 
        style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${loginBackground})`,
            backgroundSize: 'cover',        
            backgroundPosition: 'center',   
            backgroundRepeat: 'no-repeat',  
        }}
    >
      <div className='p-8 border border-gray-700 rounded-lg shadow-xl bg-gray-900 bg-opacity-80'>
        <h1 className='text-3xl font-medium mb-6 text-center'>Sign In</h1>
        
        <label className='block font-semibold mb-2'>Email</label>
        <input 
          type="email" 
          onChange={(e)=> setEmail(e.target.value)} 
          className=" mt-1 border border-gray-600 bg-gray-800 text-white text-sm rounded-md block w-80 h-10 p-2.5 focus:border-blue-500 focus:ring-blue-500" 
          required 
          placeholder='Your email address'
        />
        
        <label className='block font-semibold mt-4 mb-2'>Password</label>
        <input 
          onChange={(e)=> setPassword(e.target.value)} 
          type="password"  
          className=" mt-1 border border-gray-600 bg-gray-800 text-white text-sm rounded-md block w-80 h-10 p-2.5 focus:border-blue-500 focus:ring-blue-500"  
          required 
          placeholder='Password'
        />
        
        <button 
            onClick={emailLogin} 
            className="bg-blue-600 h-10 hover:bg-blue-700 w-80 text-white text-lg font-semibold rounded-md mt-6 transition-colors"
        >
          Sign In
        </button>
         
         <hr className='mt-6 border-gray-700'/>
         
         <p className='text-center text-sm mt-4 text-gray-400'>
             New to Prime Video? 
             <Link to="/create-account">
                 <span className='text-blue-500 hover:underline ml-1'>Create your Amazon account</span>
             </Link>
         </p>
      </div>
      
      <div className='absolute bottom-0 w-full text-xs text-gray-400 p-2 flex justify-center space-x-4'>
        <span className='hover:underline cursor-pointer'>Terms and Privacy Notice</span>
        <span className='hover:underline cursor-pointer'>Send us feedback</span>
        <span className ='hover:underline cursor-pointer'>Help</span>
        <span>© 1996-2025, Amazon.com, Inc. or its affiliates</span>
      </div>
    </div>
    </>
  )
}

export default Signin