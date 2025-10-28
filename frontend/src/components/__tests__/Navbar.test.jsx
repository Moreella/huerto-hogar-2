import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";

// Mock del contexto Carrito
vi.mock("../../context/CarritoContext", () => ({
  useCarrito: () => ({
    carrito: [
      { id: 1, nombre: "Lechuga", cantidad: 2 },
      { id: 2, nombre: "Tomate", cantidad: 1 },
    ],
  }),
}));

const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);

describe("Navbar", () => {
  test("muestra el logo Huerto Hogar", () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText(/Huerto Hogar/i)).toBeInTheDocument();
  });

  test("renderiza los enlaces principales", () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Nosotros")).toBeInTheDocument();
    expect(screen.getByText("Tienda")).toBeInTheDocument();
    expect(screen.getByText("Contacto")).toBeInTheDocument();
  });

  test("muestra el total de ítems del carrito correctamente", () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText("🛒 (3)")).toBeInTheDocument();
  });
});
