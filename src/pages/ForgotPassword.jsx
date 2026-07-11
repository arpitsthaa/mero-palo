import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-sm mx-auto px-5 py-20">
      <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-3">Reset Password</p>
      <h1 className="font-display text-3xl font-bold text-teal-900 mb-4">Reset Password</h1>

      {sent ? (
        <div className="bg-white border border-teal-900/10 rounded-xl p-6 text-sm text-ink/70">
          We sent a reset link to <strong>{email}</strong> if it exists.
          <Link to="/login" className="block mt-4 text-teal-900 font-medium hover:underline">← Login</Link>
        </div>
      ) : (
        <>
          <p className="text-sm text-ink/60 mb-6">
            Enter your email to get a reset link.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <FormInput
              label="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="mt-2">Reset</Button>
          </form>
          <p className="text-sm text-ink/60 mt-6 text-center">
            <Link to="/login" className="text-teal-900 font-medium hover:underline">← Login</Link>
          </p>
        </>
      )}
    </div>
  );
}
