import { Link } from "react-router-dom";
import "../css/Navbar.css";
import "../css/style-buttons.css";



export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="row w-100 align-items-center">
          <div className="col-3 text-start">
            <Link className="navbar-brand" to="/">Huerto Hogar</Link>
          </div>

          <div className="col-6 text-center">
            <ul className="navbar-nav d-flex justify-content-center">
              <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/productos">Tienda</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className="col-3 text-end">
            <Link className="btn btn-success navbar-btn px-4" to="/login">
              Cuenta
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
