import axios from "axios";
import { useState, useEffect } from 'react'
import './App.scss'
const baseUrl = import.meta.env.VITE_API_BASE_URL;
import NavBar from "./components/NavBar/NavBar";
import Background from "./components/Background/Background";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Tour from "./components/Tour/Tour";
import Merch from "./components/Merch/Merch";
import Footer from "./components/Footer/Footer";


function App() {
  const [products, setProducts] = useState([])
  
    useEffect(() => {
        const fetchProducts = async () => {
          try {
              const res = await axios.get(`${baseUrl}/products`);
              setProducts(res.data);
          } catch (err) {
              console.error(`Failed to fetch products`);
          }
        }
        fetchProducts();
    }, []);

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
