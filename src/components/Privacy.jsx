import { Shield, BadgeCheck } from 'lucide-react'

export default function Privacy() {
  return (
    <section id="privacy" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">Privacy & Security</h3>
            <p className="text-slate-600">GDPR compliant. We don't sell your data. We don't read your emails. Permissions are scoped and transparent.</p>
            <ul className="mt-6 space-y-2 text-slate-700 text-sm">
              <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-slate-700" /> End-to-end TLS, encrypted at rest</li>
              <li className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-emerald-600" /> Independent security reviews</li>
              <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-slate-700" /> No content scanning — pixel-only tracking</li>
            </ul>
          </div>
          <div className="h-56 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-indigo-50 grid place-items-center text-slate-400">3D lock</div>
        </div>
      </div>
    </section>
  )
}
