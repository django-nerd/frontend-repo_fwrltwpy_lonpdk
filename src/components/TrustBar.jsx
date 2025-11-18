export default function TrustBar() {
  const logos = ['Uber', 'Stripe', 'Airbnb', 'Dropbox', 'Asana', 'Notion']
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500 mb-6">Professionals from these companies use Reddbly</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-70">
          {logos.map((name) => (
            <div key={name} className="h-10 rounded-xl bg-slate-50 border border-slate-200 grid place-items-center text-slate-400 text-sm font-medium">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
