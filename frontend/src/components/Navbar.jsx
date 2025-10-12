import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2>Huerto Hogar</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/tienda">Tienda</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
