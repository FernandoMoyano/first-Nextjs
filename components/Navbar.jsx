import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
      </ul>
    </nav>
  );
};
