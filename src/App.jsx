import { useState } from 'react'
import './App.scss'
import NavBar from "./components/NavBar/NavBar.jsx";
import Background from "./components/Background/Background.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "app-layout">
      <Background />
      <NavBar />
    </div>
  )
}

export default App
