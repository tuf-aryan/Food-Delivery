

import { Outlet } from 'react-router'
import './App.css'

import Footer from './components/FootBar'
import NavBar from './components/NavBar'





function App() {


  return (
   <div className='p-2 bg-[#FFFFED]'>
    <NavBar/>
    <Outlet/>
    <Footer/>

   </div>
  )
}

export default App
