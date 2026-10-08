import type { ReactNode } from 'react';
import { Link, useLocation } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';

export function CinemaShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  return <>
    <header className="site-header">
      <div className="cine-container header-inner">
        <Link to="/" className="brand" aria-label="CINE! — ir a cartelera">
          <strong className="brand-logo">CINE!</strong>
          <span className="brand-tagline">UNA FUNCIÓN,<br />UN PLAN.</span>
        </Link>
        <nav className="main-nav" aria-label="Navegación principal">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>Cartelera</Link>
          <Link to="/comprar" search={{ pelicula: '', titulo: '' }} className={`nav-item ${location.pathname === '/comprar' ? 'active' : ''}`}>Funciones <ArrowUpRight size={13} className="ml-1" /></Link>
        </nav>
        <span className="header-note"><span className="status-dot" /> NOS VEMOS EN EL CINE.</span>
      </div>
    </header>
    <main>{children}</main>
    <footer className="cine-footer">
      <div className="cine-container footer-inner">
        <Link to="/" className="footer-brand" aria-label="CINE! — inicio">CINE!</Link>
        <p>Elegí tu función. Nosotros ponemos la pantalla.</p>
        <span className="footer-credit">UNA FUNCIÓN, UN PLAN. © 2026 CINE!</span>
      </div>
    </footer>
  </>;
}