import React from 'react';
import '../styles/navbar.css';

interface NavLink {
  label: string;
  href: string;
  isHighlight?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'Scole', href: '#' },
  { label: 'Dormis', href: '#menu' },
  { label: 'Salestrio', href: '#about' },
  { label: 'Cotta', href: '#contact' },
  { label: 'Galato', href: '#order', isHighlight: true },
];

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        <div className="navbar-brand-logo">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
            <path d="M8 8l4 4" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
      </a>

      <div className="navbar-nav">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`nav-link ${link.isHighlight ? 'nav-link--highlight' : ''}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="navbar-actions">
        <button className="navbar-search" aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
