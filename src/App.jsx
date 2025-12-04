import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("user", JSON.stringify(user));
  }, [cart, user]);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <Header
          cart={cart}
          user={user}
          setUser={setUser}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
