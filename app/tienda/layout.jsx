import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Tienda oficial",
};

const TiendaLayout = ({ children }) => {
  return (
    <>
      {children}
      <nav>
        <h3>Seccion Tienda</h3>

        <ul>
          <li>
            <Link href="/tienda/categorias">Categorias</Link>
          </li>
          <li>
            <Link href="/tienda/categorias/computadoras">Computadoras</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default TiendaLayout;
