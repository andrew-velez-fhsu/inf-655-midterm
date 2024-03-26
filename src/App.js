import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import Cart from "./Pages/Cart/Cart";
import { Container } from "@mui/material";

import Products from "./Data/ProductCatalog.json";
import ProductDetails from "./Pages/Product/ProductDetails";
import { CartProvider } from "./Context/CartContext";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <Container maxWidth="md">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search products={Products} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
