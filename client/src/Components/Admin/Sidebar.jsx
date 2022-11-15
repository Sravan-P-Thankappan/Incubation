import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

function Sidebar() {

    const navigate = useNavigate()
    
    const logOut = ()=>{
        localStorage.removeItem('admintoken')
        navigate('/admin')
    }
    return (
 
        <div className="flex bg-slate-200 w-screen">

            <div className="flex flex-col min-h-screen p-3 bg-fuchsia-700 shadow w-auto">
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-4xl font-bold text-slate-200">cuBin</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                               
                                <Link to={'Dashboard'} className='flex items-center p-2 space-x-3 rounded-md' >
                                    
                                    <span className='text-slate-50'>Home</span>

                                    </Link>   
                               
                            </li>
                            
                            <li className="rounded-sm">
                               
                                <Link to={'Application'} className='flex items-center p-2 space-x-3 rounded-md' >
                                    
                                    <span className='text-slate-50'>New Application</span>

                                    </Link>   
                               
                            </li>
                            <li className="rounded-sm">
                               
                               <Link to={'Approvedapplication'} className='flex items-center p-2 space-x-3 rounded-md' >
                                   
                                   <span className='text-slate-50'>Approved Application</span>

                                   </Link>   
                              
                           </li>
                           <li className="rounded-sm">
                               
                               <Link to={'Pendingapplication'} className='flex items-center p-2 space-x-3 rounded-md' >
                                   
                                   <span className='text-slate-50'>Declined Application</span>

                                   </Link>   
                              
                           </li>

                            <li className="rounded-sm">
                               
                               <Link to={'Progress'} className='flex items-center p-2 space-x-3 rounded-md' >
                                   
                                   <span className='text-slate-50'>Progress</span>

                                   </Link>   
                              
                           </li>

                           <li className="rounded-sm">
                               
                               <Link to={'Slot'} className='flex items-center p-2 space-x-3 rounded-md' >
                                   
                                   <span className='text-slate-50'>Slot</span>

                                   </Link>   
                              
                           </li>


                           <li className="rounded-sm">
                                

                                <div className='flex items-center p-2 space-x-3 rounded-md'>
                                <span className='text-slate-50 cursor-pointer' onClick={logOut}>Logout</span>

                                </div>
                             
                              
                           </li>
                        </ul>
                    </div>
                </div>
            </div>

           
            
        </div>

    )
}

export default Sidebar