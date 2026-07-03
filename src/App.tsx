import { useState } from 'react'
import './App.scss'
import NavBar from "./components/NavBar/NavBar";
import Background from "./components/Background/Background";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Tour from "./components/Tour/Tour";
import Merch from "./components/Merch/Merch";
import Footer from "./components/Footer/Footer";

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
