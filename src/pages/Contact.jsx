import { useState } from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

const faqs = [
  { q: 'Do I need an account?', a: 'Yes, you need an account to book and check your token.' },
  { q: 'Can I cancel my token?', a: 'Yes, you can cancel it from your dashboard.' },
  { q: 'What if I miss my turn?', a: 'You have 10 minutes to arrive before your token is deleted.' },
  { q: 'Is it free?', a: 'Yes, booking tokens is free.' },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-teal-900/10 py-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <span className="text-sm font-medium text-ink">{q}</span>
        <span className="text-teal-900 text-lg">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="text-sm text-ink/60 mt-2">{a}</p>}
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-14">
      <div>
        <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-3">Contact Us</p>
        <h1 className="font-display text-4xl font-bold text-teal-900 mb-6">Contact Us</h1>
        {sent ? (
          <p className="text-sm text-teal-900 bg-teal-900/5 rounded-xl p-4">Thanks! We will reply soon.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
            <FormInput label="Name" required />
            <FormInput label="Email" type="email" required />
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-ink/80">Message</label>
              <textarea
                required
                rows={4}
                className="px-4 py-2.5 rounded-lg border border-teal-900/15 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
            </div>
            <Button type="submit" className="self-start mt-2">Send message</Button>
          </form>
        )}
      </div>

      <div>
        <h2 className="font-display text-xl font-semibold text-ink mb-2">FAQ</h2>
        <div className="mt-4">
          {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
        </div>
      </div>
    </div>
  );
}
