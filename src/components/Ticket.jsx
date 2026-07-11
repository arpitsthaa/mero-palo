export default function Ticket({ tokenNumber, department, patientName, status = 'waiting', peopleAhead }) {
  const statusStyles = {
    waiting: { bg: 'bg-amber-500', label: 'Waiting' },
    called: { bg: 'bg-teal-900', label: 'Called' },
    done: { bg: 'bg-ink/30', label: 'Completed' },
    cancelled: { bg: 'bg-coral-500', label: 'Cancelled' },
  };
  const s = statusStyles[status] || statusStyles.waiting;

  return (
    <div className="ticket flex items-stretch max-w-md mx-2 shadow-sm">
      <div className="flex-1 p-5">
        <p className="text-xs uppercase tracking-wide text-ink/50">{department}</p>
        <p className="font-display text-4xl font-bold text-teal-900 mt-1">#{tokenNumber}</p>
        <p className="text-sm text-ink/70 mt-1">{patientName}</p>
        {peopleAhead !== undefined && status === 'waiting' && (
          <p className="text-xs text-ink/50 mt-2">{peopleAhead} waiting ahead</p>
        )}
      </div>
      <div className="ticket-perf my-3" />
      <div className="w-20 flex flex-col items-center justify-center gap-2 p-3">
        <span className={`w-2.5 h-2.5 rounded-full ${s.bg}`} />
        <span className="text-[10px] font-mono uppercase tracking-wide text-ink/60 rotate-180 [writing-mode:vertical-rl]">
          {s.label}
        </span>
      </div>
    </div>
  );
}
