import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto px-5 py-32 text-center">
      <p className="font-mono text-8xl font-bold text-teal-900/10">404</p>
      <h1 className="font-display text-3xl font-bold text-teal-900 -mt-8">Not Found</h1>
      <p className="text-ink/60 mt-3">This page does not exist.</p>
      <Link to="/" className="inline-block mt-8 px-6 py-3 rounded-full bg-teal-900 text-cream text-sm font-medium hover:bg-teal-800 transition-colors">
        Go to Home
      </Link>
    </div>
  );
}
