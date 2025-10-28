
import React, { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

//agregares un similudor de productos 



export function useCarrito() {
  return useContext(CarritoContext);
}

// 3️ Componente proveedor (envolverá toda la app)
export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  // Agregar producto
  const agregarProducto = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        // Si ya existe, solo aumentamos cantidad
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  // Eliminar producto
  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  // Vaciar carrito
  const vaciarCarrito = () => setCarrito([]);

  // Calcular total
  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito, total }}
    >
      {children}
    </CarritoContext.Provider>
  );

  
}
 