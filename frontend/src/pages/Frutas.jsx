import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Tienda.css';
import '../styles/Card-style.css';
import { useCarrito } from "../context/CarritoContext";


export default function Frutas() {
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
                <h2 className="titulo-seccion mb-4">Frutas</h2>
                <p>
                    Encuentra nuestra mejor más selecta variedad de fruta orgánica
                </p>
            </section>

            <section className="row g-4 mb-4">

                <div className="col-md-3 col-sm-6 col-12">
                    <div className="card h-100">
                        <img
                            src="/img/p2.jpg"
                            alt="producto2"
                            className="card-img-top"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Manzanas Fuji</h5>
                            <p className="card-text">Dulces y jugosas.</p>
                            <p className="fw-bold text-success">$1.200</p>

                            {/* 🔹 Contenedor de botones alineados */}
                            <div className="d-flex justify-content-between gap-2 mt-auto">
                                <button
                                    className="btn add-to-cart flex-fill"
                                    data-nombre="Manzanas Fuji"
                                    data-precio="1200"
                                    data-imagen="/img/p2.jpg"
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
                            src={producto.img}
                            alt={producto.nombre}
                            className="card-img-top"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Naranjas Valencia</h5>
                            <p className="card-text">Fresca y 100% natural.</p>
                            <p className="fw-bold text-success">$1.000</p>

                            <div className="d-flex justify-content-between gap-2 mt-auto">
                                <button
                                    className="btn add-to-cart flex-fill"
                                    data-nombre="Naranjas Valencia"
                                    data-precio="1000"
                                    data-imagen="/img/p1.jpg"
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
                            src="/img/p3.jpg"
                            alt="producto3"
                            className="card-img-top"
                        />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Plátanos Cavendish</h5>
                            <p className="card-text">Dulces y jugosas.</p>
                            <p className="fw-bold text-success">$1.500</p>

                            {/* 🔹 Contenedor de botones alineados */}
                            <div className="d-flex justify-content-between gap-2 mt-auto">
                                <button
                                    className="btn add-to-cart flex-fill"
                                    data-nombre="Plátanos Cavendish"
                                    data-precio="1500"
                                    data-imagen="/img/p3.jpg"
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
