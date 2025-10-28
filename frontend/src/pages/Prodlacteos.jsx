import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Tienda.css';
import '../styles/Card-style.css';
import { useCarrito } from "../context/CarritoContext";

export default function Prodlacteos() {
    const { agregarProducto } = useCarrito();

    // Aqui es donde se "ve" el producto esta creado como objeto
    const producto = {
        id: 1,
        nombre: "Naranjas Valencia",
        precio: 1000,
        img: "/img/p1.jpg",
        descripcion: "Fresca y 100% natural."
    };
    return (
        <main className="container my-5">
            <section className="nosotros-section text-center mb-5">
                <h2 className="titulo-seccion mb-4">Productos Lácteos</h2>
                <p>
                    Encuentra nuestra mejor más selecta variedad de lácteos orgánicos
                </p>
            </section>
            <section className="row g-4 mb-4">
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="card h-100">
                        <img
                            src="/img/p9.jpg"
                            alt="producto9"
                            className="card-img-top"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Leche Entera</h5>
                            <p className="card-text">Fresca y 100% natural.</p>
                            <p className="fw-bold text-success">$2.500</p>

                            <div className="d-flex justify-content-between gap-2 mt-auto">
                                <button
                                    className="btn add-to-cart flex-fill"
                                    data-nombre="Leche Entera"
                                    data-precio="2500"
                                    data-imagen="/img/p9.jpg"
                                >
                                    Añadir al carrito
                                </button>

                                <button className="btn btn-ver-detalle flex-fill">
                                    Ver detalle
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}