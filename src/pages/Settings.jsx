import { useState } from 'react';

function Toggle({ label, description, checked, onChange }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-teal-900/10 last:border-0">
      <div>
        <p className="text-sm font-medium text-ink">{label}</p>
        <p className="text-xs text-ink/50 mt-0.5">{description}</p>
      </div>
      <button
        onClick={onChange}
        aria-pressed={checked}
        className={`w-11 h-6 rounded-full relative transition-colors ${checked ? 'bg-teal-900' : 'bg-ink/20'}`}
      >
        <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
      </button>
    </div>
  );
}

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="max-w-lg mx-auto px-5 py-16">
      <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-3">Settings</p>
      <h1 className="font-display text-4xl font-bold text-teal-900 mb-8">Settings</h1>

      <div className="bg-white rounded-2xl border border-teal-900/10 p-6">
        <Toggle
          label="Notifications"
          description="Notify me when it is my turn."
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
        />
        <Toggle
          label="SMS"
          description="Send SMS when it is my turn."
          checked={smsAlerts}
          onChange={() => setSmsAlerts(!smsAlerts)}
        />
        <Toggle
          label="Dark mode"
          description="Dark Mode (coming soon)."
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>

      {smsAlerts && (
        <p className="text-xs text-amber-600 mt-3">SMS charges may apply.</p>
      )}
    </div>
  );
}
