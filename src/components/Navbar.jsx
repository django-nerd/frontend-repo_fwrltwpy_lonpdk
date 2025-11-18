import { useState } from 'react'
import { Menu, X, CheckCheck, Mail } from 'lucide-react'

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-9 h-9 rounded-xl bg-[#FF4F4F] shadow-[0_10px_30px_rgba(255,79,79,0.45)] grid place-items-center">
          <CheckCheck className="w-5 h-5 text-white" />
        </div>
        <Mail className="w-4 h-4 text-white/90 absolute -right-1 -bottom-1 bg-[#111827] rounded-md p-0.5 border border-white/10" />
      </div>
      <span className="font-semibold text-slate-900 tracking-tight text-lg">Reddbly</span>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLinks = (
    <ul className="flex flex-col md:flex-row md:items-center gap-6 text-slate-600">
      <li><a href="#features" className="hover:text-slate-900 transition-colors">Features</a></li>
      <li><a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy</a></li>
      <li><a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a></li>
      <li><a href="#faq" className="hover:text-slate-900 transition-colors">FAQ</a></li>
    </ul>
  )

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="shrink-0"><Logo /></a>

        <nav className="hidden md:block">{NavLinks}</nav>

        <div className="hidden md:block">
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF4F4F] text-white font-medium shadow-[0_12px_30px_rgba(255,79,79,0.35)] hover:brightness-95 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5"><path fill="#ff3d00" d="M24 9.5c3.2 0 6.1 1.1 8.4 2.9L39 5.8C35 2.6 29.8 1 24 1 14.8 1 6.8 6.6 3.2 14.5l9.3 7.2C13.9 15.3 18.4 9.5 24 9.5z"/><path fill="#4caf50" d="M46.5 24c0-2.9-.5-5.6-1.5-8.1h-21v9.6h12.1c-.6 3-2.3 5.6-4.8 7.3l9.3 7.2C44.8 36.4 46.5 30.6 46.5 24z"/><path fill="#1976d2" d="M24 47c6.5 0 12-2.4 16.1-6.4l-9.3-7.2C28.8 35.2 26.6 36 24 36c-5.6 0-10.1-3.8-11.5-8.9l-9.3 7.2C6.8 41.4 14.8 47 24 47z"/><path fill="#ffc107" d="M12.5 27.1c-.3-1-.5-2-.5-3.1s.2-2.1.5-3.1l-9.3-7.2C1.1 16.8 0 20.3 0 24s1.1 7.2 3.2 10.3l9.3-7.2z"/></svg>
            Add to Chrome
          </a>
        </div>

        <button className="md:hidden p-2 rounded-lg border border-slate-200" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-6">
            {NavLinks}
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF4F4F] text-white font-medium shadow-[0_12px_30px_rgba(255,79,79,0.35)]">Add to Chrome</a>
          </div>
        </div>
      )}
    </header>
  )
}
