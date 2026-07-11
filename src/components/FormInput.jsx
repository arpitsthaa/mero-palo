export default function FormInput({ label, error, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-ink/80">{label}</label>
      <input
        className={`px-4 py-2.5 rounded-lg border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
          error ? 'border-coral-500' : 'border-teal-900/15'
        }`}
        {...props}
      />
      {error && <span className="text-xs text-coral-500">{error}</span>}
    </div>
  );
}
