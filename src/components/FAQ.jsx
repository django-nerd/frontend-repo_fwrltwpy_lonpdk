import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 py-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <span className="font-medium text-slate-800">{q}</span>
        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="mt-2 text-slate-600 text-sm">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  const items = [
    { q: "Does the recipient know I'm tracking?", a: 'No, it is invisible.' },
    { q: 'Does it work with Outlook?', a: 'Currently Gmail only.' },
    { q: 'Is it GDPR compliant?', a: 'Yes. We do not sell data and avoid content scanning.' },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-6">FAQ</h3>
        <div className="divide-y divide-transparent">
          {items.map((it) => (
            <Item key={it.q} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
