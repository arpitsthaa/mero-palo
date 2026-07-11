import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getTokensForUser, cancelToken } from '../utils/storage';
import Ticket from '../components/Ticket';
import Button from '../components/Button';

export default function Dashboard() {
  const { user } = useAuth();
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    if (user) setTokens(getTokensForUser(user.email));
  }, [user]);

  const active = tokens.filter((t) => t.status === 'waiting' || t.status === 'called');
  const past = tokens.filter((t) => t.status === 'done' || t.status === 'cancelled');

  const handleCancel = (id) => {
    cancelToken(id);
    setTokens(getTokensForUser(user.email));
  };

  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-3">Dashboard</p>
      <h1 className="font-display text-4xl font-bold text-teal-900 mb-2">Hi, {user.name.split(' ')[0]}</h1>
      <p className="text-ink/60 mb-10">Here are your booked tokens.</p>

      <section className="mb-12">
        <h2 className="font-display text-xl font-semibold text-ink mb-5">My Active Tokens</h2>
        {active.length === 0 ? (
          <div className="bg-white border border-dashed border-teal-900/20 rounded-2xl p-10 text-center">
            <p className="text-ink/50 text-sm mb-4">You have no active tokens.</p>
            <Link to="/departments" className="text-teal-900 font-medium text-sm hover:underline">Book a token →</Link>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6">
            {active.map((t) => (
              <div key={t.id} className="flex flex-col items-center gap-3">
                <Ticket
                  tokenNumber={t.tokenNumber}
                  department={t.departmentName}
                  patientName={t.patientName}
                  status={t.status}
                  peopleAhead={Math.max(0, t.tokenNumber - 20)}
                />
                <Button variant="danger" onClick={() => handleCancel(t.id)} className="text-xs px-4 py-1.5">
                  Cancel token
                </Button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-ink mb-5">Past Tokens</h2>
        {past.length === 0 ? (
          <p className="text-sm text-ink/50">No past tokens.</p>
        ) : (
          <div className="bg-white rounded-2xl border border-teal-900/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-ink/40 border-b border-teal-900/10">
                  <th className="px-5 py-3">Token</th>
                  <th className="px-5 py-3">Department</th>
                  <th className="px-5 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {past.map((t) => (
                  <tr key={t.id} className="border-b border-teal-900/5 last:border-0">
                    <td className="px-5 py-3 font-mono">#{t.tokenNumber}</td>
                    <td className="px-5 py-3">{t.departmentName}</td>
                    <td className="px-5 py-3 capitalize">{t.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
