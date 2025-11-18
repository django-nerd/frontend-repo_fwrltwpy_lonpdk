export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-white font-semibold">Product</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Socials</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Twitter/X</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">Product Hunt</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">Made with ❤️ for Salespeople and Freelancers.</p>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Reddbly</p>
        </div>
      </div>
    </footer>
  )
}
