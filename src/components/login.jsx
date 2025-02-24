import React from 'react';
import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Body from './body';
import Browse from './browse';
import Header from './header';  

const Login = () => {

    const [isSignUpForm, setIsSignUpForm] = useState(true);    

  const toggleSignUpform = () => {  
    setIsSignUpForm(!isSignUpForm); 
  }

    return (
        <div>
           <Header className="bg-gray-800 h-16 flex justify-between items-center"/>
        <div>
        <img src = 'https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg' 
              alt = 'backgroundScreen'
              className = 'h-screen w-screen object-cover'/>      
        </div>
        <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-black bg-opacity-70 p-10 rounded-lg'>
        <form className='flex flex-col '>  
            <h1 className='m-2 text-3xl text-white'>{isSignUpForm ? 'Sign In' : 'Sign Up'}</h1> 
            {!isSignUpForm && <input type='text' placeholder='name' className='bg-gray-800 text-white w-54 h-10 m-2 p-2 rounded-lg'/>}   
            <input type='text' placeholder='email' className='bg-gray-800 text-white w-54 h-10 m-2 p-2 rounded-lg'/>
            <input type='password' placeholder='password' className='bg-gray-800 text-white w-54 h-10 m-2 p-2 rounded-lg'/>  
            <button className='bg-red-600 text-white w-54 h-10 m-2 p-2 rounded-lg'>{isSignUpForm ? 'Sign In' : 'Sign Up'}</button>   

            <h2 className='m-2 text-1xl text-white cursor-pointer' onClick={toggleSignUpform}>{isSignUpForm ? 'New to Netflix?Sign Up Now' : 'Already a user,Sign In Now '}</h2> 
        
        </form>
        </div>
        </div>
    );
}

export default Login;
