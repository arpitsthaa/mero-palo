import { Link } from 'react-router-dom';

export default function DepartmentCard({ department }) {
  return (
    <div className="bg-white rounded-2xl border border-teal-900/10 p-6 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all">
      <div className="flex items-start justify-between">
        <span className="text-3xl">{department.icon}</span>
        <span className="text-xs font-mono px-2 py-1 rounded-full bg-teal-900/5 text-teal-900">
          ~{department.avgWaitMin} min
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold text-ink">{department.name}</h3>
      <p className="text-sm text-ink/60 flex-1">{department.description}</p>
      <div className="flex items-center justify-between text-xs text-ink/50 pt-1">
        <span>Serving #{department.activeToken}</span>
        <span>{department.queueLength} waiting</span>
      </div>
      <Link
        to={`/departments/${department.id}`}
        className="mt-2 text-center text-sm font-medium py-2.5 rounded-full bg-teal-900 text-cream hover:bg-teal-800 transition-colors"
      >
        Book Token
      </Link>
    </div>
  );
}
