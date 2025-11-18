import Spline from '@splinetool/react-spline'
import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-white/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium mb-5 border border-slate-200">
            <span className="w-2 h-2 rounded-full bg-[#FF4F4F]" />
            New: Ultra-light tracker for Gmail
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Know exactly when your emails are read.
          </h1>

          <p className="mt-5 text-lg text-slate-600 max-w-xl">
            The lightweight Gmail tracker that tells you who opened your email, how many times, and from where. No more guessing games.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FF4F4F] text-white font-medium shadow-[0_20px_40px_rgba(255,79,79,0.35)] hover:brightness-95 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5"><path fill="#ff3d00" d="M24 9.5c3.2 0 6.1 1.1 8.4 2.9L39 5.8C35 2.6 29.8 1 24 1 14.8 1 6.8 6.6 3.2 14.5l9.3 7.2C13.9 15.3 18.4 9.5 24 9.5z"/><path fill="#4caf50" d="M46.5 24c0-2.9-.5-5.6-1.5-8.1h-21v9.6h12.1c-.6 3-2.3 5.6-4.8 7.3l9.3 7.2C44.8 36.4 46.5 30.6 46.5 24z"/><path fill="#1976d2" d="M24 47c6.5 0 12-2.4 16.1-6.4l-9.3-7.2C28.8 35.2 26.6 36 24 36c-5.6 0-10.1-3.8-11.5-8.9l-9.3 7.2C6.8 41.4 14.8 47 24 47z"/><path fill="#ffc107" d="M12.5 27.1c-.3-1-.5-2-.5-3.1s.2-2.1.5-3.1l-9.3-7.2C1.1 16.8 0 20.3 0 24s1.1 7.2 3.2 10.3l9.3-7.2z"/></svg>
              Add to Chrome — It’s Free
            </a>
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              4.9/5 on Chrome Web Store • 10k+ Users
            </div>
          </div>
        </div>

        <div className="relative h-[420px] lg:h-[520px]">
          <div className="absolute -inset-12 bg-gradient-to-tr from-[#FF4F4F]/20 via-slate-200 to-white blur-3xl rounded-[3rem] pointer-events-none" />
          <div className="relative h-full rounded-3xl overflow-hidden border border-slate-200 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)]">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
