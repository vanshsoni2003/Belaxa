import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import About from './components/About'
import Group from './components/Group'
import Ourproject from './components/Ourproject'
import Ourservices from './components/Ourservices'
import Founder from './components/Founder'
import Getintouch from './components/Getintouch'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Herosection/>
      <About/>
      <Group/>
      <Ourproject/>
      <Ourservices/>
      <Founder/>
      <Getintouch/>
      <Footer/>
    </>
  )
}

export default App
