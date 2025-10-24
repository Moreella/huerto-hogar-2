import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Tienda.css';
import { useCarrito } from "../context/CarritoContext";

export default function Tienda() {
  const { agregarProducto } = useCarrito();

  // Aqui es donde se "ve" el producto esta creado como objeto
  const producto = {
    id: 1,
    nombre: "Naranjas Valencia",
    precio: 1000,
    img: "/img/p2.jpg",
    descripcion: "Fresca y 100% natural."
  };

  return (
    <main className="container my-5">
      <section className="nosotros-section text-center mb-5">
        <h2 className="titulo-seccion mb-4">Tienda</h2>
        <p>
          Bienvenido a la tienda de Huerto Hogar. Aquí encontrarás una variedad
          de productos naturales y sustentables para tu hogar y jardín.
        </p>
      </section>

      <section className="row g-4">
        <div className="col-md-4">
          <div className="card h-100">
            <img
              src={producto.img}
              alt={producto.nombre}
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.descripcion}</p>
              <p className="fw-bold text-success">
                ${producto.precio.toLocaleString("es-CL")}
              </p>

              {/* Aquí se conecta con el carrito */}
              <button
                className="btn btn-success mt-auto"
                onClick={() => agregarProducto(producto)}
              >
                Añadir al carrito 
              </button>

              <button className="btn btn-secondary mt-2">
                Ver detalle
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
