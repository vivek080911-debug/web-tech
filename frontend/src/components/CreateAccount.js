import React,{useState} from 'react'
import prime from "../images/prime.png"
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const CreateAccount = () => {

  const [name, setName] = useState("") 
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate(); 

  const emailSignup = async() =>{
    try{
        if (!name || !email || !password) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const response = await fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }), 
        });

        const data = await response.json();

        if (response.ok) {
            toast.success(data.message); 
            localStorage.setItem("userToken", data.token);
            localStorage.setItem("userName", data.name);
            localStorage.setItem("isLoggedIn", "true"); 
            navigate("/home"); 

        } else {
            toast.error(data.message || 'Registration failed');
        }

    }catch(err){
      console.error(err)
      toast.error("Network error. Check server status.");
    }
  }

 

  return (
    <>
    <ToastContainer autoClose={3000}/>
    <div className='flex flex-col justify-center items-center min-h-screen bg-white text-black'>
        
        <img src={prime} className='w-52 h-28' alt="Prime Video Logo"/>
      
      <div className='p-6 border border-gray-300 rounded-lg shadow-md bg-white w-96'>
        
        <h1 className='text-3xl font-medium mb-4 text-center'>Create Account</h1>
        
        <label className='block font-semibold mt-4 text-gray-700'>Your name</label>
        <input 
          type="text" 
          onChange={(e)=> setName(e.target.value)} 
          className=" mt-1 border border-gray-400 bg-white text-black text-sm rounded-md block w-full h-10 p-2.5 focus:border-blue-500 focus:ring-blue-500" 
          required 
          placeholder='First and last name'
        />
        
        <label className='block font-semibold mt-4 text-gray-700'>Email</label>
        <input 
          type="email" 
          onChange={(e)=> setEmail(e.target.value)}  
          className=" mt-1 border border-gray-400 bg-white text-black text-sm rounded-md block w-full h-10 p-2.5 focus:border-blue-500 focus:ring-blue-500"  
          required 
          placeholder='Your email address'
        />
        
        <h1 className='text-xs text-blue-700 hover:underline hover:text-orange-400 mt-2'>Use your mobile number instead</h1>
        
        <label className='block font-semibold mt-4 text-gray-700'>Password</label>
        <input 
          onChange={(e)=> setPassword(e.target.value)} 
          type="password"  
          className=" mt-1 border border-gray-400 bg-white text-black text-sm rounded-md block w-full h-10 p-2.5 focus:border-blue-500 focus:ring-blue-500"  
          required 
          placeholder='Password'
        />
        
        <h1 className='text-sm mt-7 text-gray-600'>To verify your email, we will send you a link. Click the link</h1>
        
        <button 
            onClick={emailSignup} 
            className="bg-yellow-400 h-10 hover:bg-yellow-500 w-full text-gray-900 font-semibold rounded-md mt-4 transition-colors"
        >
          Create your Amazon account
         </button>
         
         <h1 className='text-sm mt-4 text-gray-600'>By continuing, you agree to the Amazon Conditions of Use and Privacy Notice.</h1>
         
         <hr className='mt-6 border-gray-300'/>
         
         <h1 className='text-black text-sm mt-4'>Already have an account? <Link to="/signin"><span className='text-blue-700 hover:underline'>Sign in</span></Link></h1>
      </div>
      
      <div className='bg-gray-100 h-20 mt-8 text-center w-full'>
        <h1 className='text-xs text-blue-700 mt-3'>Terms and Privacy Notice | Send us feedback | Help </h1>
        <h1 className='text-xs mt-3 text-gray-600'>© 1996-2025, Amazon.com, Inc. or its affiliates</h1>
      </div>
    </div>
    </>
   
  )
}

export default CreateAccount;