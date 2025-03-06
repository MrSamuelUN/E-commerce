import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Cart from "./Components/Pages/Cart";
import Products from "./Components/Pages/Products";
import ProductDetails from "./Components/Layout/ProductDetails";
import Notification from "./Notification";
import 'bootstrap/dist/css/bootstrap.min.css';


export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
    
  }
  return (
    
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
        <Router>
          <Notification/>
          
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/productdetails/:id" element={<ProductDetails />}></Route>
          </Routes>
        </Router>
      </div>
    
    </ThemeContext.Provider>
  );
}

export default App;
