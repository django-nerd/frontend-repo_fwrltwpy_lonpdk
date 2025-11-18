export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-8">Simple, honest pricing</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl p-8 border border-slate-200 bg-slate-50">
            <h4 className="font-semibold text-slate-900">Free Forever</h4>
            <p className="text-slate-600 mt-1 text-sm">Basic tracking, unlimited opens.</p>
            <p className="text-4xl font-semibold mt-4">$0</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• Real-time open tracking</li>
              <li>• Basic notifications</li>
              <li>• Community support</li>
            </ul>
            <button className="mt-6 inline-flex px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm">Get Started</button>
          </div>

          <div className="relative rounded-3xl p-8 border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.15)]">
            <span className="absolute -top-3 right-6 text-xs px-2 py-1 rounded-full bg-slate-900 text-white">Best Value</span>
            <h4 className="font-semibold text-slate-900">Pro</h4>
            <p className="text-slate-600 mt-1 text-sm">Link tracking, full history, no signature branding.</p>
            <p className="text-4xl font-semibold mt-4">$9<span className="text-base text-slate-500">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• Everything in Free</li>
              <li>• Link & attachment tracking</li>
              <li>• Auto follow-up reminders</li>
              <li>• Priority support</li>
            </ul>
            <button className="mt-6 inline-flex px-5 py-2 rounded-full bg-[#FF4F4F] text-white shadow-[0_12px_30px_rgba(255,79,79,0.35)]">Upgrade</button>
          </div>
        </div>
      </div>
    </section>
  )
}
