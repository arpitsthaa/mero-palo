import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-cream/80 mt-24">
      <div className="max-w-6xl mx-auto px-5 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-lg font-semibold text-cream mb-2">Mero Palo</p>
          <p className="text-sm text-cream/60">Book tokens online and avoid waiting lines.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-cream/40 mb-3">Pages</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/departments" className="hover:text-cream">Departments</Link></li>
            <li><Link to="/dashboard" className="hover:text-cream">Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-cream/40 mb-3">Links</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-cream">About</Link></li>
            <li><Link to="/contact" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-cream/40 mb-3">User</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/login" className="hover:text-cream">Log in</Link></li>
            <li><Link to="/register" className="hover:text-cream">Register</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-5 py-4 text-xs text-cream/40 text-center">
        © {new Date().getFullYear()} Mero Palo. College React Project.
      </div>
    </footer>
  );
}
