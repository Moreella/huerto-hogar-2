import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Tienda.css';

export default function Tienda() {
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
              src="/img/p2.jpg"
              alt="producto1"
              className="card-img-top"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Naranjas Valencia</h5>
              <p className="card-text">Fresca y 100% natural.</p>
              <p className="fw-bold text-success">$1.000</p>
              
              <button
                className="btn btn-primary mt-auto add-to-cart"
                data-nombre="Naranjas Valencia"
                data-precio="1000"
                data-imagen="/img/p2.jpg">
                Añadir al carrito
              </button>
              
              <button className="btn btn-secondary mt-auto add-to-cart">
                Ver detalle
              </button>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
