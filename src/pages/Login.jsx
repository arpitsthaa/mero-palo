import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const result = login(form.email, form.password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto px-5 py-20">
      <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-3">Login</p>
      <h1 className="font-display text-3xl font-bold text-teal-900 mb-8">Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormInput
          label="Email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <FormInput
          label="Password"
          type="password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        {error && <p className="text-sm text-coral-500">{error}</p>}
        <div className="flex justify-end">
          <Link to="/forgot-password" className="text-xs text-teal-900 hover:underline">Forgot Password?</Link>
        </div>
        <Button type="submit" className="mt-2">Login</Button>
      </form>

      <p className="text-sm text-ink/60 mt-6 text-center">
        Don't have an account? <Link to="/register" className="text-teal-900 font-medium hover:underline">Register here</Link>
      </p>
    </div>
  );
}
