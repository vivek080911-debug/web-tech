
import React from 'react';
import Navbar from './Navbar';
import { useAppSelector } from '../redux/hooks';
import { Link, useNavigate } from 'react-router-dom';

const Subscriptions = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName") || "User"; 

    const tiers = [
        { name: "Basic", price: "₹299/mo", features: ["SD quality", "1 screen", "Access to library"], color: "bg-gray-700" },
        { name: "Standard", price: "₹499/mo", features: ["HD quality", "2 screens", "Access to library + Live TV"], color: "bg-sky-700" },
        { name: "Premium", price: "₹799/mo", features: ["4K UHD + HDR", "4 screens", "Full content access + Downloads"], color: "bg-yellow-600" },
    ];

    return (
        <div className='bg-[#0f171e] min-h-screen text-white pt-20 px-16'>
            <Navbar />
            
            <h1 className='text-4xl font-bold mt-8 mb-4'>Hello, {userName}</h1>
            <p className='text-lg text-gray-400 mb-10'>
                Manage your Prime Video plans and upgrades here.
            </p>

            <div className='flex justify-center space-x-8'>
                {tiers.map((tier) => (
                    <div key={tier.name} className={`flex flex-col w-80 p-8 rounded-xl shadow-2xl ${tier.color}`}>
                        <h2 className='text-3xl font-extrabold mb-2'>{tier.name}</h2>
                        <p className='text-xl font-bold mb-6'>{tier.price}</p>
                        
                        <ul className='space-y-3 flex-grow mb-8 text-lg'>
                            {tier.features.map((feature, i) => (
                                <li key={i} className='flex items-center'>
                                    <span className='mr-2 text-green-300'>✓</span> {feature}
                                </li>
                            ))}
                        </ul>

                        <button 
                            className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
                        >
                            Select Plan
                        </button>
                    </div>
                ))}
            </div>

            <div className='mt-16 text-center'>
                <p className='text-gray-500'>Need help? <span onClick={() => navigate('/home')} className='text-blue-400 cursor-pointer hover:underline'>Contact Support</span></p>
            </div>
        </div>
    );
};

export default Subscriptions;