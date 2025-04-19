import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./compoents/header/Header";
import Home from "./compoents/home/Home";
import ProductDetails from "./compoents/product/ProductDetails";
import Product from "./compoents/product/Product";
import Footer from "./compoents/footer/Footer";
import About from "./compoents/about/About";
import Contact from "./compoents/contact/Contact";
import { useState, useEffect } from "react";
import Loader from "./compoents/loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
