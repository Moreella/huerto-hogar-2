import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Tienda.css';
import '../styles/Card-style.css';
import { useCarrito } from "../context/CarritoContext";

export default function Prodorganicos() {
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
                <h2 className="titulo-seccion mb-4">Productos Orgánicos</h2>
                <p>
                    Encuentra nuestra mejor más selecta variedad de productos orgánicos
                </p>
            </section>

            <section className="row g-4 mb-4">
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="card h-100">
                        <img
                            src="/img/p7.jpg"
                            alt="producto7"
                            className="card-img-top"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Miel Orgánica</h5>
                            <p className="card-text">Fresca y 100% natural.</p>
                            <p className="fw-bold text-success">$3.500</p>

                            <div className="d-flex justify-content-between gap-2 mt-auto">
                                <button
                                    className="btn add-to-cart flex-fill"
                                    data-nombre="Miel Orgánica"
                                    data-precio="3500"
                                    data-imagen="/img/p7.jpg"
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

                <div className="col-md-3 col-sm-6 col-12">
                    <div className="card h-100">
                        <img
                            src="/img/p8.jpg"
                            alt="producto8"
                            className="card-img-top"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Quinua Orgánica</h5>
                            <p className="card-text">Fresca y 100% natural.</p>
                            <p className="fw-bold text-success">$3.000</p>

                            <div className="d-flex justify-content-between gap-2 mt-auto">
                                <button
                                    className="btn add-to-cart flex-fill"
                                    data-nombre="Quinua Orgánica"
                                    data-precio="3000"
                                    data-imagen="/img/p8.jpg"
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