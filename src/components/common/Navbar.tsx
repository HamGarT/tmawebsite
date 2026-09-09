import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/images/logo.webp';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Certificaciones', path: '/certificaciones' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    // Agregamos 'relative' y 'z-50' para que el menú móvil se despliegue por encima del contenido
    <nav className="w-full bg-white px-4 md:px-8 py-3 md:py-4 shadow-sm font-sans relative z-50">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} alt="TMA Ingenieros Logo" className="h-9 sm:h-12 w-auto object-contain" />
          </NavLink>
        </div>

        {/* Navigation Links (Escritorio) */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-[15px] transition-colors duration-200 pb-1 border-b-[3px] ${
                  isActive
                    ? 'text-[#1a2352] border-[#f5a623] font-bold'
                    : 'text-[#1a2352] border-transparent font-semibold hover:text-[#f5a623]'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Contenedor Derecho: Botón CTA + Botón Hamburguesa */}
        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
          
          {/* CTA Button */}
          <a
            href="tel:+51945741482"
            className="flex items-center gap-1.5 sm:gap-2 bg-[#0b1a4a] text-white px-3 sm:px-5 py-2 rounded-md font-semibold hover:bg-[#162763] transition-colors text-[13px] sm:text-[15px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="hidden min-[360px]:inline">945 741 482</span>
          </a>

          {/* Menú Hamburguesa (Solo Móviles) */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-[#0b1a4a] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Icono X
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Icono Hamburguesa
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú Desplegable (Móvil) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 transition-all duration-300 origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-[15px] transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#f5a623]/10 text-[#f5a623] font-bold border-l-4 border-[#f5a623]'
                    : 'text-[#1a2352] font-semibold border-l-4 border-transparent hover:bg-gray-50'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;