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
import Confirm from "./components/Confirm/Confirm";
import Product from "./types/productType";
import type { CartItemType } from "./types/cartType";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [hash]);

  return null;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

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

  // useEffect(() => {
  //   if (cart.length === 0) {
  //     setCartOpen(false);
  //   }
  // }, [cart]);

  return (
    <div className = "app-layout">
      <CartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
            <ScrollToHash />
            <NavBar cartOpen={cartOpen} setCartOpen={setCartOpen} />
            <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}/>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Background />
                    <Hero />
                    <About />
                    <Tour />
                    <Merch products={products} />
                  </>
                } />
                <Route
                  path="/confirm"
                  element={<Confirm />}
                />
              </Routes>
            <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  )
}

export default App
