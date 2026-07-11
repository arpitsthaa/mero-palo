import { useAuth } from '../context/AuthContext';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import { useState } from 'react';

export default function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState(user.name);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-lg mx-auto px-5 py-16">
      <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-3">My Profile</p>
      <h1 className="font-display text-4xl font-bold text-teal-900 mb-8">Profile Info</h1>

      <div className="bg-white rounded-2xl border border-teal-900/10 p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-teal-900 text-cream flex items-center justify-center font-display text-2xl">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-medium text-ink">{user.name}</p>
            <p className="text-sm text-ink/50">{user.email}</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="flex flex-col gap-4">
          <FormInput label="Full name" value={name} onChange={(e) => setName(e.target.value)} />
          <FormInput label="Email" value={user.email} disabled />
          <Button type="submit" className="mt-2 self-start">
            {saved ? 'Saved!' : 'Save'}
          </Button>
        </form>
      </div>
    </div>
  );
}
