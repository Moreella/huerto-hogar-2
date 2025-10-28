import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pago.css";



export default function FormularioPago() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    tarjeta: "",
    fecha: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación del resultado del pago (puedes reemplazar por tu lógica real)
    const exito = Math.random() > 0.3; // 70% de éxito

    if (exito) {
      navigate("/pago-exitoso");
    } else {
      navigate("/pago-denegado");
    }
  };

  return (
    <main className="pago-container">
      <div className="pago-card">
        <h1>Formulario de Pago</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="nombre">Nombre en la tarjeta</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="campo">
            <label htmlFor="tarjeta">Número de tarjeta</label>
            <input
              type="text"
              id="tarjeta"
              name="tarjeta"
              maxLength="16"
              value={form.tarjeta}
              onChange={handleChange}
              required
            />
          </div>

          <div className="fila">
            <div className="campo">
              <label htmlFor="fecha">Fecha de vencimiento</label>
              <input
                type="month"
                id="fecha"
                name="fecha"
                value={form.fecha}
                onChange={handleChange}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="cvv">CVV</label>
              <input
                type="password"
                id="cvv"
                name="cvv"
                maxLength="3"
                value={form.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-pagar">
            Confirmar Pago
          </button>
        </form>
      </div>
    </main>
  );
}
