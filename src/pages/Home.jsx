import { Link } from 'react-router-dom';
import { departments } from '../data/departments';
import DepartmentCard from '../components/DepartmentCard';
import Ticket from '../components/Ticket';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-4">
            Kathmandu Hospital
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-teal-900 leading-[1.05]">
            Get Hospital<br />Tokens Online.
          </h1>
          <p className="text-ink/60 mt-6 text-lg max-w-md">
            Mero Palo helps you book doctor tokens. Select a department, get your number, and check the live queue from home.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/departments" className="px-6 py-3 rounded-full bg-teal-900 text-cream text-sm font-medium hover:bg-teal-800 transition-colors">
              Book Token
            </Link>
            <Link to="/about" className="px-6 py-3 rounded-full border border-teal-900 text-teal-900 text-sm font-medium hover:bg-teal-900 hover:text-cream transition-colors">
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <div className="-rotate-3">
            <Ticket tokenNumber={24} department="General Physician" patientName="Arpit Shrestha" status="waiting" peopleAhead={3} />
          </div>
        </div>
      </section>

      {/* Departments preview */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl font-semibold text-ink">Departments</h2>
          <Link to="/departments" className="text-sm text-teal-900 font-medium hover:underline">View all →</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {departments.slice(0, 3).map((d) => (
            <DepartmentCard key={d.id} department={d} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-teal-900/5 py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-display text-3xl font-semibold text-ink mb-10 text-center">How to book a token</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Select Department', desc: 'Choose a department like general, dental, or pediatrics.' },
              { title: 'Get Your Token', desc: 'Get your token number and check how many people are ahead of you.' },
              { title: 'Go to Hospital', desc: 'Go to the hospital when your number is called.' },
            ].map((step, i) => (
              <div key={step.title} className="bg-white rounded-2xl p-6 border border-teal-900/10">
                <span className="font-mono text-xs text-amber-600">0{i + 1}</span>
                <h3 className="font-display text-lg font-semibold mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-ink/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="font-display text-3xl font-semibold text-ink mb-10 text-center">Patient Feedback</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Sabina R.', quote: 'I booked my token from home and did not have to wait in the crowded room. It is very easy.' },
            { name: 'Bikash T.', quote: 'I could see my live queue position. It is very helpful.' },
            { name: 'Anisha K.', quote: 'I took my daughter to the hospital. Everything was fast and simple.' },
          ].map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 border border-teal-900/10">
              <p className="text-sm text-ink/70 italic">"{t.quote}"</p>
              <p className="text-sm font-medium text-teal-900 mt-4">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 pb-20">
        <div className="bg-teal-900 rounded-3xl px-8 py-14 text-center">
          <h2 className="font-display text-3xl font-semibold text-cream mb-4">Want a Token?</h2>
          <p className="text-cream/70 mb-8 max-w-md mx-auto">Create an account and book a token now.</p>
          <Link to="/register" className="inline-block px-8 py-3 rounded-full bg-amber-500 text-teal-950 text-sm font-semibold hover:bg-amber-600 transition-colors">
            Register
          </Link>
        </div>
      </section>
    </div>
  );
}
