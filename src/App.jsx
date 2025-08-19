import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import { useForm } from "react-hook-form";

function App() {

  return (
    <>
    <Navbar/>
    </>
  )
}

export default App
