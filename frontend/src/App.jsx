import React from 'react';
import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext';

function App() {
  const {authUser} = useAuthContext()  

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
     <Routes>
       <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' /> } exact/>
       <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} exact/>
       <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} exact/>
     </Routes>
     <Toaster />
    </div>
  )
}

export default App
