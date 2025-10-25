import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Tienda from "./pages/Tienda";
import Carrito from "./pages/Carrito";
import Frutas from "./pages/Frutas";
import Verduras from "./pages/Verduras";
import Prodlacteos from "./pages/Prodlacteos";
import Prodorganicos from "./pages/Prodorganicos";




export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/frutas" element={<Frutas />} />
        <Route path="/verduras" element={<Verduras />} />
        <Route path="/prod-lacteos" element={<Prodlacteos />} />
        <Route path="/prod-organicos" element={<Prodorganicos />} />



      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
