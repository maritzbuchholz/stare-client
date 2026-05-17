import { useState } from 'react'
import './App.scss'
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "app-layout">
      <NavBar />
    </div>
  )
}

export default App
