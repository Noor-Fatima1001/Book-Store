import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import ContactUs from './Components/ContactUs'
import {Toaster} from "react-hot-toast"
import { useAuth } from './Context/AuthProvider'

const App = () => {
  const { authUser, setAuthUser } = useAuth();
  return (
 <div className='dark:bg-slate-900 dark:text-white'>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/Course' element={authUser?<Courses/>:<Navigate to="/signup"/>}></Route>
  <Route path='/Signup' element={<Signup/>}></Route>
  <Route path='/ContactUs' element={<ContactUs/>}></Route>
 </Routes>
 <Toaster/>
 </div>
  )
}

export default App
