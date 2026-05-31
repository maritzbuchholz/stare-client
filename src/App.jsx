import { useState } from 'react'
import './App.scss'
import NavBar from "./components/NavBar/NavBar.jsx";
import Background from "./components/Background/Background.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Tour from "./components/Tour/Tour.jsx";
import Merch from "./components/Merch/Merch.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "app-layout">
      <Background />
      <NavBar />
      <Hero />
      <About />
      <Tour />
      <Merch />
    </div>
  )
}

export default App
