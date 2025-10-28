import { Link, Outlet } from "react-router-dom";
import "../../styles/Admin.css";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h3>Panel Admin</h3>
        <ul>
          <li><Link to="/admin/productos">Productos</Link></li>
          <li><Link to="/admin/usuarios">Usuarios</Link></li>
          <li><Link to="/">Volver al inicio</Link></li>
        </ul>
      </aside>

      <main className="admin-content">
        <Outlet /> {/* Aquí se mostrarán las subpáginas */}
      </main>
    </div>
  );
}
