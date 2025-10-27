import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Tienda from "./pages/Tienda";
import Carrito from "./pages/Carrito";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminProductos from "./pages/admin/AdminProductos";

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
        {/* RUTAS ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
        <Route path="productos" element={<AdminProductos />} />
        </Route>
      </Routes>
      

      <Footer />
    </BrowserRouter>
  );
}
