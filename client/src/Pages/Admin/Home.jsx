import React, { useEffect } from 'react'
import Sidebar from '../../Components/Admin/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'

function Home() {

  let navigate = useNavigate()

  useEffect(() => {

    navigate('Dashboard')
  }, [])

  return (

    <div className='grid grid-cols-12'>

      <div className='col-span-5 sm:col-span-3  md:col-span-3 lg:col-span-2'>

        <Sidebar />

      </div>

      <div className='col-span-7 sm:col-span-9 md:col-span-8 lg:col-span-10'>


        <Outlet/>

      </div>

    </div>
  )
}

export default Home