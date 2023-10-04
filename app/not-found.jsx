import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      <h1>404</h1>
      <p>Pagina No encontrada</p>
      <Link href="/">Volver</Link>
    </section>
  );
};

export default NotFound;
