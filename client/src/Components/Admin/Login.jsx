
import React, { useState,useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import axios from '../../Axios'
 
function Login() {
  


    let [admin,setAdmin] = useState({})
    let [errmsg,setErrmsg] = useState('')
    let navigate = useNavigate()

    useEffect(()=>{
      
        let admin = localStorage.getItem('admintoken')
        if(admin) navigate('/admin/Home/')
    
        else navigate('/admin')
    
      },[])


let adminLogin = (e)=>{

    e.preventDefault()
   
    let adminDetails = {
        email :admin.email,
        password:admin.password
    }
    
    axios.post('/admin/login',adminDetails).then((res)=>{
         let {data}= res

         console.log(data)

       if(data.err)
       {
          setErrmsg(data.message)
       }

       localStorage.setItem('admintoken',data.token)
        navigate('/admin/Home')
      
        
    }).catch((err)=>{

        console.log(err);
    })
    


}

    return (
        <div>

            <div class="bg-slate-200 min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Admin Login</h1>
                        {/* {loginEr && <label className='text-red-600 text-center'>Invalid Userid Or Password</label>} */}

                        <br />
                        <form onSubmit={adminLogin} >

                            <label className='text-red-500' htmlFor="">{errmsg}</label>
                            <input
                                type="email"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                onChange={(e)=>setAdmin({...admin,[e.target.name]:e.target.value})}
                                />

                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                onChange={(e)=>setAdmin({...admin,[e.target.name]:e.target.value})}

                                 />


                            <button
                                type="submit"
                                class="w-full text-center py-3 rounded bg-fuchsia-700 text-white hover:bg-green-dark focus:outline-none my-1"
                            >Login</button>

                        </form>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login