export default function HowItWorks() {
  const steps = [
    { title: 'Install', desc: 'Add the Chrome extension in one click.' },
    { title: 'Compose', desc: 'Write your email with Reddbly enabled.' },
    { title: 'Track', desc: 'See opens, clicks, and activity at a glance.' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-8">How it works</h3>
        <ol className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-3xl p-8 border border-slate-200 bg-slate-50">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-2xl bg-white border border-slate-200 grid place-items-center shadow">
                <span className="text-slate-700 font-semibold">{i + 1}</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">{s.title}</h4>
              <p className="text-slate-600 text-sm">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
