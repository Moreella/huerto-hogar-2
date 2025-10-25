import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Tienda.css';
import '../styles/Card-style.css';
import { useCarrito } from "../context/CarritoContext";

export default function Verduras() {
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
                <h2 className="titulo-seccion mb-4">Verduras</h2>
                <p>
                    Encuentra nuestra mejor más selecta variedad de verdura orgánica
                </p>
            </section>

            <section className="row g-4 mb-4">
                <div className="col-md-3 col-sm-6 col-12">
                    <div className="card h-100">
                        <img
                            src="/img/p4.jpg"
                            alt="producto4"
                            className="card-img-top"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Zanahorias Orgánicas</h5>
                            <p className="card-text">Fresca y 100% natural.</p>
                            <p className="fw-bold text-success">$1.000</p>

                            <div className="d-flex justify-content-between gap-2 mt-auto">
                                <button
                                    className="btn add-to-cart flex-fill"
                                    data-nombre="Zanahorias Orgánicas"
                                    data-precio="1000"
                                    data-imagen="/img/p4.jpg"
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
                            src="/img/p5.jpg"
                            alt="producto5"
                            className="card-img-top"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Espinacas Frescas</h5>
                            <p className="card-text">Fresca y 100% natural.</p>
                            <p className="fw-bold text-success">$800</p>

                            <div className="d-flex justify-content-between gap-2 mt-auto">
                                <button
                                    className="btn add-to-cart flex-fill"
                                    data-nombre="Espinacas Frescas"
                                    data-precio="800"
                                    data-imagen="/img/p5.jpg"
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
                            src="/img/p6.png"
                            alt="producto6"
                            className="card-img-top"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Pimientos Tricolores</h5>
                            <p className="card-text">Fresca y 100% natural.</p>
                            <p className="fw-bold text-success">$1.000</p>

                            <div className="d-flex justify-content-between gap-2 mt-auto">
                                <button
                                    className="btn add-to-cart flex-fill"
                                    data-nombre="Pimientos Tricolores"
                                    data-precio="1000"
                                    data-imagen="/img/p6.png"
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