import { Bell, ShieldCheck, Link2, CheckCheck, AlertTriangle } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl p-8 border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.15)]">
            <div className="flex items-center gap-3 text-slate-800 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <h3 className="font-semibold">The Old Way</h3>
            </div>
            <p className="text-slate-600">Did they see it? Did it go to spam? Endless waiting and guessing.</p>
            <div className="mt-6 h-40 rounded-2xl bg-slate-50 border border-slate-200 grid place-items-center text-slate-400">confused-sender.png</div>
          </div>

          <div className="rounded-3xl p-8 border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)]">
            <div className="flex items-center gap-3 text-slate-800 mb-4">
              <CheckCheck className="w-5 h-5 text-emerald-500" />
              <h3 className="font-semibold">The Reddbly Way</h3>
            </div>
            <p className="text-slate-600">Get a friendly heads-up the moment your email is opened.</p>
            <div className="mt-6 h-40 rounded-2xl bg-slate-50 border border-slate-200 grid place-items-center text-slate-400">read-notification.png</div>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={<CheckCheck className='w-5 h-5 text-emerald-600' />} title="Real-time Tracking" desc="Get notified the second your email is opened." />
          <FeatureCard icon={<Link2 className='w-5 h-5 text-blue-600' />} title="Link Tracking" desc="Know exactly which links they clicked inside your email." />
          <FeatureCard icon={<Bell className='w-5 h-5 text-[#FF4F4F]' />} title="Reminders" desc="Didn't get a reply? Set reminders to follow up automatically." />
          <FeatureCard icon={<ShieldCheck className='w-5 h-5 text-slate-700' />} title="Privacy First" desc="We track pixels, not content. Your data stays private." />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl p-6 border border-slate-200 bg-white hover:bg-slate-50 transition">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl bg-slate-100 grid place-items-center border border-slate-200">{icon}</div>
        <h4 className="font-semibold text-slate-800">{title}</h4>
      </div>
      <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  )
}
