export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <p className="text-xs uppercase tracking-widest text-amber-600 font-semibold mb-4">About Us</p>
      <h1 className="font-display text-4xl font-bold text-teal-900 mb-6">Why We Built This</h1>
      <p className="text-ink/70 leading-relaxed mb-4">
        Mero Palo means "my turn" in Nepali. We made this website because hospital waiting rooms are always full of people. This system helps you book tokens from home.
      </p>
      <p className="text-ink/70 leading-relaxed mb-4">
        You can book a token, check your position, and go to the hospital on time. Hospital staff can also manage patients easily.
      </p>
      <p className="text-ink/70 leading-relaxed">
        This is a student project for our React class. It shows how to use React, routing, and state.
      </p>

      <div className="grid sm:grid-cols-3 gap-5 mt-12">
        {[
          { label: 'Departments', value: '6' },
          { label: 'Wait time reduced', value: '40%' },
          { label: 'Built with', value: 'React' },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-teal-900/10 p-6 text-center">
            <p className="font-display text-3xl font-bold text-teal-900">{s.value}</p>
            <p className="text-xs text-ink/50 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
