import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Cards />
      <Footer />
    </>
  )
}

export default App;
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Cards from './components/Cards';
import Footer from './components/Footer';