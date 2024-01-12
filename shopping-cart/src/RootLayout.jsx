import { Outlet } from "react-router-dom"
import { useState } from 'react';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { CartProvider } from "./CartContext";

const RootLayout = () => {
    const [cart, setCart] = useState([]);
  return (
    <CartProvider value={{cart, setCart}}>
        <Header />
        <Outlet />
        <Footer />
    </CartProvider>
  )
}

export default RootLayout