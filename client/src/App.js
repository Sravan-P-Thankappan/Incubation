
import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Pages/User/Home';

import Login from './Pages/User/Login';

import Register from './Pages/User/Register';
import AdminLogin from './Pages/Admin/AdminLogin';
import AdminHome from './Pages/Admin/Home';
import Dashboard from './Components/Admin/Dashboard';
import Application from './Components/Admin/Application';
import Pendingapplicatiom from './Components/Admin/Pendingapplicatiom';
import Approvedapplication from './Components/Admin/Approvedapplication';
import Slot from './Components/Admin/Slot';
import Progress from './Components/Admin/Progress';



import { ApplicationContext } from './Context/Authcontext';

import { useState } from 'react'

function App() {

  const [allApplication, setAllApplication] = useState({})
  return (


    <div className="App">
      <Router>

        <Routes>

          <Route exact path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/signup' element={<Register />} />

        </Routes>


        <ApplicationContext.Provider value={{ allApplication, setAllApplication }} >
          <Routes>
            <Route path='/admin' element={<AdminLogin />} />


            <Route path='/admin/Home' element={<AdminHome />}>

              <Route path='Dashboard' element={<Dashboard />} />
              <Route path='Application' element={<Application />} />
              <Route path='Pendingapplication' element={<Pendingapplicatiom />} />
              <Route path='Approvedapplication' element={<Approvedapplication />} />
              <Route path='Slot' element={<Slot/>} />
              <Route path='Progress' element={<Progress/>}/>

            </Route>


          </Routes>
        </ApplicationContext.Provider>


      </Router>


    </div>
  );
}

export default App;
