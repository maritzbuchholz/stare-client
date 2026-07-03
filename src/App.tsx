import { useState } from 'react'
import './App.scss'
import NavBar from "./components/NavBar/NavBar.tsx";
import Background from "./components/Background/Background.tsx";
import Hero from "./components/Hero/Hero.tsx";
import About from "./components/About/About.tsx";
import Tour from "./components/Tour/Tour.tsx";
import Merch from "./components/Merch/Merch.tsx";
import Footer from "./components/Footer/Footer.tsx";

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
      <Footer />
    </div>
  )
}

export default App
