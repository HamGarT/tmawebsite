import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/images/logo.webp';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Certificaciones', path: '/certificaciones' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="w-full bg-white flex items-center justify-between px-8 py-4 shadow-sm font-sans">
      {/* Logo */}
      <div className="flex-shrink-0">
        <NavLink to="/">
          <img src={logo} alt="TMA Ingenieros Logo" className="h-12 w-auto object-contain" />
        </NavLink>
      </div>

      {/* Navigation Links */}
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

      {/* CTA Button */}
      <div className="flex-shrink-0">
        <a
          href="tel:+51945741482"
          className="flex items-center gap-2 bg-[#0b1a4a] text-white px-5 py-2.5 rounded-md font-semibold hover:bg-[#162763] transition-colors"
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
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          945 741 482
        </a>
      </div>
    </nav>
  );
};

export default Navbar;