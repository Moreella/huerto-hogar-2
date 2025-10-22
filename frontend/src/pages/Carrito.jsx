import { useCarrito } from "../context/CarritoContext";
import "../styles/Carrito.css";


// primera prueba del carrito 
export default function Carrito() {
  const { carrito, eliminarProducto, vaciarCarrito, total } = useCarrito();

  return (
    <main className="carrito-container">
      <h1>Tu Carrito</h1>

      {carrito.length === 0 ? (
        <p className="carrito-vacio">Tu carrito está vacío </p>
      ) : (
        <>
          <table className="carrito-tabla">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>${item.precio.toLocaleString("es-CL")}</td>
                  <td>{item.cantidad}</td>
                  <td>${(item.precio * item.cantidad).toLocaleString("es-CL")}</td>
                  <td>
                    <button
                      className="btn-eliminar"
                      onClick={() => eliminarProducto(item.id)}
                    >
                      
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="carrito-resumen">
            <h3>Total: ${total.toLocaleString("es-CL")}</h3>
            <button className="btn-vaciar" onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </main>
  );
}
