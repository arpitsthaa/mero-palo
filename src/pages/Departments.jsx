import { useState } from 'react';
import { departments } from '../data/departments';
import DepartmentCard from '../components/DepartmentCard';

export default function Departments() {
  const [query, setQuery] = useState('');

  const filtered = departments.filter((d) =>
    d.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-3">Departments</p>
        <h1 className="font-display text-4xl font-bold text-teal-900 mb-4">Select Department</h1>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-sm px-4 py-2.5 rounded-lg border border-teal-900/15 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink/50 text-sm">No department found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((d) => (
            <DepartmentCard key={d.id} department={d} />
          ))}
        </div>
      )}
    </div>
  );
}
