import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="bg-primary text-white">
    <nav className="container mx-auto flex justify-between items-center p-4">
      <div className="text-2xl font-bold">
        <NavLink to="/">Artesanos del Código</NavLink>
      </div>
      <div className="space-x-4">
        <NavLink to="/" exact activeClassName="underline">
          Inicio
        </NavLink>
        <NavLink to="/podcast" activeClassName="underline">
          Podcast
        </NavLink>
        <NavLink to="/products" activeClassName="underline">
          Productos
        </NavLink>
        <NavLink to="/about" activeClassName="underline">
          Sobre Nosotros
        </NavLink>
        <NavLink to="/contact" activeClassName="underline">
          Contacto
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Header;
