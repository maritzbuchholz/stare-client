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


type Product = {
  id: number;
  name: string;
  description: string;
  price_cents: number;
  image_url: string;
  variants: ProductVariant[];
}

type ProductVariant = {
  id: number;
  inventory_count: number;
  size: string;
  sku: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products)
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
      <Background />
      <NavBar />
      <Hero />
      <About />
      <Tour />
      <Merch products={products} />
      <Footer />
    </div>
  )
}

export default App
