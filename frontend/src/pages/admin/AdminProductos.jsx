import { useState } from "react";

export default function AdminProductos() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Naranjas Valencia", precio: 1000 },
    { id: 2, nombre: "Limones Orgánicos", precio: 1200 },
  ]);

  const [nuevo, setNuevo] = useState({ nombre: "", precio: "" });

  const handleAgregar = () => {
    if (!nuevo.nombre || !nuevo.precio) return;
    const nuevoProducto = {
      id: Date.now(),
      nombre: nuevo.nombre,
      precio: Number(nuevo.precio),
    };
    setProductos([...productos, nuevoProducto]);
    setNuevo({ nombre: "", precio: "" });
  };

  const handleEliminar = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h2>Administrar Productos</h2>

      <div className="form-nuevo">
        <input
          type="text"
          placeholder="Nombre del producto"
          value={nuevo.nombre}
          onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
        />
        <input
          type="number"
          placeholder="Precio"
          value={nuevo.precio}
          onChange={(e) => setNuevo({ ...nuevo, precio: e.target.value })}
        />
        <button onClick={handleAgregar}>Agregar</button>
      </div>

      <table className="tabla-productos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>${p.precio.toLocaleString("es-CL")}</td>
              <td>
                <button className="btn-eliminar" onClick={() => handleEliminar(p.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
