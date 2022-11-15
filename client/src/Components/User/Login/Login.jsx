import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import axios from '../../../Axios'
import { useNavigate } from 'react-router-dom'
import {useEffect} from 'react'

function Login() {
    
    let navigate = useNavigate()
    let [userId,setUserId] = useState('')
    let [password,setPassword] = useState('')
    let [loginEr,setLoginEr] = useState(false)

    useEffect(()=>{
        
        let userData = localStorage.getItem('token')
           if(userData)  navigate('/Home')
                  
           else navigate('/')
              
          },[navigate])
   
   
  const handleLogin = (e)=>{
      e.preventDefault() 
      
      let userDetails = {
        userId,
        password
      }

      axios.post('/login',userDetails).then((response)=>{
        let {data} = response
        if(data.err) setLoginEr(true)
       
        else{ 
              localStorage.setItem('token',data.token)

              navigate('/Home')
        }
        
      }).catch((err)=>console.log(err))

  }  

 

  return (
    <div>
        <div class="bg-slate-200 min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Login</h1>
                        {loginEr&& <label className='text-red-600 text-center'>Invalid Userid Or Password</label>}
                        <br />
                        <form onSubmit={handleLogin}>
                           

                            <input
                                type="email"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                onChange={(e)=>setUserId(e.target.value)} />

                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                onChange={(e)=>setPassword(e.target.value)} />
                           

                            <button
                                type="submit"
                                class="w-full text-center py-3 rounded bg-fuchsia-700 text-white hover:bg-green-dark focus:outline-none my-1"
                            >Login</button>

                        </form>

                       
                        
                    </div>

                   <p>Don't you have account?</p> <Link className='hover:text-fuchsia-700' to={'/signup'}>Signup</Link>
                </div>
            </div>
    </div>
  )
}

export default Login