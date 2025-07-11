import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "../src/Common/Navbar"
import Footer from './Common/Footer'
import Homecontainer from './Page/Homecontainer'
import About from './About/About'

function App() {
  
  return (
    <>
    <Navbar/>
      <Homecontainer/>
      <About/>
      <Footer/>
    </>
  )
}

export default App
