import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.includes('@')) errs.email = 'Enter a valid email.';
    if (form.password.length < 6) errs.password = 'At least 6 characters.';
    if (form.password !== form.confirm) errs.confirm = 'Passwords do not match.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const result = register(form.name, form.email, form.password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setErrors({ email: result.message });
    }
  };

  return (
    <div className="max-w-sm mx-auto px-5 py-20">
      <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-3">Sign Up</p>
      <h1 className="font-display text-3xl font-bold text-teal-900 mb-8">Register</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormInput
          label="Name"
          value={form.name}
          error={errors.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <FormInput
          label="Email"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <FormInput
          label="Password"
          type="password"
          value={form.password}
          error={errors.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <FormInput
          label="Confirm password"
          type="password"
          value={form.confirm}
          error={errors.confirm}
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
        />
        <Button type="submit" className="mt-2">Register</Button>
      </form>

      <p className="text-sm text-ink/60 mt-6 text-center">
        Have an account? <Link to="/login" className="text-teal-900 font-medium hover:underline">Login here</Link>
      </p>
    </div>
  );
}
