const baseUrl = import.meta.env.VITE_API_BASE_URL;
import axios from "axios";
import { useState, useEffect } from 'react'
import './App.scss'
import NavBar from "./components/NavBar/NavBar";
import Background from "./components/Background/Background";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Tour from "./components/Tour/Tour";
import Merch from "./components/Merch/Merch";
import Footer from "./components/Footer/Footer";
import Product from "./types/productType";
import CartContext from "./context/CartContext";


function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
          const res = await axios.get<Product[]>(`${baseUrl}/products`);
          setProducts(res.data);
      } catch (error) {
          console.error(`Failed to fetch products`, error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className = "app-layout">
      <CartContext.Provider value={{ cart, setCart }}>
        <Background />
        <NavBar />
        <Hero />
        <About />
        <Tour />
        <Merch products={products} />
        <Footer />
      </CartContext.Provider>
    </div>
  )
}

export default App
