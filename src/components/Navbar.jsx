import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/departments', label: 'Departments' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-teal-900/10">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-teal-900">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500" />
          Mero Palo
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-teal-900' : 'text-ink/60 hover:text-teal-900'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link to="/dashboard" className="text-sm font-medium text-teal-900 hover:underline">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm font-medium px-4 py-2 rounded-full border border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-cream transition-colors"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-teal-900 hover:underline">
                Log in
              </Link>
              <Link
                to="/register"
                className="text-sm font-medium px-4 py-2 rounded-full bg-teal-900 text-cream hover:bg-teal-800 transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-teal-900 transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-teal-900 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-teal-900 transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-teal-900/10 bg-cream px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink/70"
            >
              {l.label}
            </NavLink>
          ))}
          <hr className="border-teal-900/10" />
          {user ? (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)} className="text-sm font-medium text-teal-900">
                Dashboard
              </Link>
              <button
                onClick={() => { setOpen(false); handleLogout(); }}
                className="text-sm font-medium text-left text-coral-500"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)} className="text-sm font-medium text-teal-900">
                Log in
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="text-sm font-medium px-4 py-2 rounded-full bg-teal-900 text-cream text-center"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
