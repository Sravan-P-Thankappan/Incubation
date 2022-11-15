import React, { useState } from 'react'

import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import jwtdecode from 'jwt-decode'




function Navbar() {
 

// console.log(userAuth);
let [user,setUser]=useState({}) 

useEffect(()=>{
    
  setUser( jwtdecode(localStorage.getItem('token')) ) 
  console.log(user.name);

},[])


 const navigate = useNavigate()
    
    const clickHandler=()=>{

         localStorage.removeItem('token')
        
        navigate('/')
    }
    
  return (
    <div>
        <div className='bg-fuchsia-700 mx-auto flex justify-between p-1'>

            <div>
                <h2 className='text-4xl font-bold text-slate-200'>cuBin</h2>
            </div>
            <div >
               <span className='mr-3' >{user.name}</span><button onClick={clickHandler} className='text-pink-700 mr-2 mt-1 bg-slate-100 w-20 p-1 rounded-lg shadow-lg shadow-pink-700/50'>Logout</button>
            </div>


        </div>
    </div>
  )
}

export default Navbar