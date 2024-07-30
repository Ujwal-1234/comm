// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { FiHome, FiDollarSign, FiInfo, FiMenu } from 'react-icons/fi';
import { useAuth } from './AuthContext'; // Import useAuth
import About from './components/About';
import { GrPowerReset } from "react-icons/gr";
import Bill from './components/Bill';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProtectedRoute from './ProtectedRoute';
import LogoutButton from './components/LogoutButton';
import MqttComponent from './components/MqttComponent';
import Draggable from 'react-draggable';
import Graphs from './components/Graphs';
import useOnlineStatus from './hooks/useOnlineStatus';
import Map from './pages/Map';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { isAuth } = useAuth(); // Access authentication status
  const isOnline = useOnlineStatus()
  const [httpstatus, setHttpStatus] = useState(isOnline)
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Router>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/map'} element={<Map/>}/>
        </Routes>
          
          {/* <div>
            <Frame element={<Map />} topic={"Graph"} width={"w-screen"} height={"h-screen"} />
            </div> */}
          {/* Your sidebar and other components can go here */}
          <div className=' text-slate-200 p-2 rounded-lg bg-opacity-80 bg-[#05363D] absolute bottom-10 text-right right-10'>
            <div>
              <h2>Connection Status</h2>
              <p>HTTP protocol : <span className={`${httpstatus?'text-green-400':'text-red-500'}`}>{httpstatus?'CONNECTED':'DISCONNECTED'}</span></p>
              {/* <p>HTTP protocol : <span className={`${httpstatus?'text-green-400':'text-red-500'}`}>{httpstatus?'CONNECTED':'DISCONNECTED'}</span></p> */}
            </div>
            <div className=' z-40 '>
              <nav>
                <ul className=' mb-5'>
                  <li> <Link to='/' className={`text-xl ${httpstatus?'text-blue-300':'text-blue-800'}`}> {">"} Home</Link></li>
                  <li> <Link to='profile' className={`text-xl ${httpstatus?'text-blue-300':'text-blue-800'}`}> {">"} Events</Link></li>
                  <li> <Link to='profile' className={`text-xl ${httpstatus?'text-blue-300':'text-blue-800'}`}> {">"} Network</Link></li>
                  <li> <Link to='map' className={`text-xl ${httpstatus?'text-blue-300':'text-blue-800'}`}> {">"} Map</Link></li>
                  <li> <Link to='profile' className={`text-xl ${httpstatus?'text-blue-300':'text-blue-800'}`}> {">"} Profile</Link></li>
                </ul>
              </nav>
            </div>
            <button onClick={()=>{window.location.reload()}}  className=' shadow-inner shadow-orange-200 hover:bg-black text-5xl border border-white p-2 rounded-lg'><GrPowerReset /></button>
          </div>
      </Router>
  );
}

export default App;
