import { useEffect, useState } from 'react';
import { departments } from '../data/departments';
import { getTokens, cancelToken } from '../utils/storage';

const tabs = ['Stats', 'Tokens', 'Departments'];

export default function Admin() {
  const [tab, setTab] = useState('Stats');
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    setTokens(getTokens());
  }, []);

  const refresh = () => setTokens(getTokens());

  const markDone = (id) => {
    const all = getTokens().map((t) => (t.id === id ? { ...t, status: 'done' } : t));
    localStorage.setItem('meropalo_tokens', JSON.stringify(all));
    refresh();
  };

  const waiting = tokens.filter((t) => t.status === 'waiting');

  return (
    <div className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-[200px_1fr] gap-10">
      {/* Sidebar */}
      <aside className="flex md:flex-col gap-2 md:sticky md:top-24 h-fit">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`text-left text-sm font-medium px-4 py-2.5 rounded-lg transition-colors ${
              tab === t ? 'bg-teal-900 text-cream' : 'text-ink/60 hover:bg-teal-900/5'
            }`}
          >
            {t}
          </button>
        ))}
      </aside>

      {/* Content */}
      <div>
        <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-3">Admin</p>
        <h1 className="font-display text-4xl font-bold text-teal-900 mb-8">{tab}</h1>

        {tab === 'Stats' && (
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl border border-teal-900/10 p-6">
              <p className="font-mono text-3xl font-bold text-teal-900">{tokens.length}</p>
              <p className="text-xs text-ink/50 mt-1">Total Tokens</p>
            </div>
            <div className="bg-white rounded-2xl border border-teal-900/10 p-6">
              <p className="font-mono text-3xl font-bold text-amber-600">{waiting.length}</p>
              <p className="text-xs text-ink/50 mt-1">Waiting</p>
            </div>
            <div className="bg-white rounded-2xl border border-teal-900/10 p-6">
              <p className="font-mono text-3xl font-bold text-teal-900">{departments.length}</p>
              <p className="text-xs text-ink/50 mt-1">Departments</p>
            </div>
          </div>
        )}

        {tab === 'Tokens' && (
          <div className="bg-white rounded-2xl border border-teal-900/10 overflow-x-auto">
            {tokens.length === 0 ? (
              <p className="p-6 text-sm text-ink/50">No tokens yet.</p>
            ) : (
              <table className="w-full text-sm min-w-[500px]">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-ink/40 border-b border-teal-900/10">
                    <th className="px-5 py-3">Token</th>
                    <th className="px-5 py-3">Patient</th>
                    <th className="px-5 py-3">Department</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {tokens.map((t) => (
                    <tr key={t.id} className="border-b border-teal-900/5 last:border-0">
                      <td className="px-5 py-3 font-mono">#{t.tokenNumber}</td>
                      <td className="px-5 py-3">{t.patientName}</td>
                      <td className="px-5 py-3">{t.departmentName}</td>
                      <td className="px-5 py-3 capitalize">{t.status}</td>
                      <td className="px-5 py-3">
                        {t.status === 'waiting' && (
                          <button onClick={() => markDone(t.id)} className="text-xs text-teal-900 font-medium hover:underline">
                            Mark done
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {tab === 'Departments' && (
          <div className="bg-white rounded-2xl border border-teal-900/10 overflow-x-auto">
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-ink/40 border-b border-teal-900/10">
                  <th className="px-5 py-3">Department</th>
                  <th className="px-5 py-3">Now serving</th>
                  <th className="px-5 py-3">Queue length</th>
                  <th className="px-5 py-3">Avg. wait</th>
                </tr>
              </thead>
              <tbody>
                {departments.map((d) => (
                  <tr key={d.id} className="border-b border-teal-900/5 last:border-0">
                    <td className="px-5 py-3">{d.icon} {d.name}</td>
                    <td className="px-5 py-3 font-mono">#{d.activeToken}</td>
                    <td className="px-5 py-3">{d.queueLength}</td>
                    <td className="px-5 py-3">{d.avgWaitMin} min</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
