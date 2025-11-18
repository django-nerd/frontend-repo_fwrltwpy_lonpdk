import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import ProblemSolution from './components/ProblemSolution'
import HowItWorks from './components/HowItWorks'
import Privacy from './components/Privacy'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <HowItWorks />
        <Privacy />
        {/* Final CTA banner */}
        <section className="py-16 bg-gradient-to-r from-[#FF4F4F] to-rose-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-2xl font-semibold tracking-tight">Stop sending emails into the void.</h3>
            <a href="#" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-slate-900 font-medium shadow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5"><path fill="#ff3d00" d="M24 9.5c3.2 0 6.1 1.1 8.4 2.9L39 5.8C35 2.6 29.8 1 24 1 14.8 1 6.8 6.6 3.2 14.5l9.3 7.2C13.9 15.3 18.4 9.5 24 9.5z"/><path fill="#4caf50" d="M46.5 24c0-2.9-.5-5.6-1.5-8.1h-21v9.6h12.1c-.6 3-2.3 5.6-4.8 7.3l9.3 7.2C44.8 36.4 46.5 30.6 46.5 24z"/><path fill="#1976d2" d="M24 47c6.5 0 12-2.4 16.1-6.4l-9.3-7.2C28.8 35.2 26.6 36 24 36c-5.6 0-10.1-3.8-11.5-8.9l-9.3 7.2C6.8 41.4 14.8 47 24 47z"/><path fill="#ffc107" d="M12.5 27.1c-.3-1-.5-2-.5-3.1s.2-2.1.5-3.1l-9.3-7.2C1.1 16.8 0 20.3 0 24s1.1 7.2 3.2 10.3l9.3-7.2z"/></svg>
              Add to Chrome
            </a>
          </div>
        </section>
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
