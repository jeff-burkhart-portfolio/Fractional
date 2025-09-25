
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight text-xl">Jeff Burkhart Engineering</a>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#about" className="hover:text-gray-700">About</a>
              <a href="#services" className="hover:text-gray-700">Services</a>
              <a href="#pricing" className="hover:text-gray-700">Pricing</a>
              <a href="#contact" className="hover:text-gray-700">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Fractional Director of Engineering</h1>
              <p className="mt-4 text-lg text-gray-700">Scaling Cloud, DevOps & SRE teams for startups and scale-ups. World-class engineering leadership without the full-time overhead.</p>
            </div>
            <div className="md:pl-8">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm flex items-center justify-center">
                <img src="/jeff-square.jpg" alt="Jeff Burkhart" className="w-56 h-56 object-cover rounded-full border border-gray-200 shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">About Jeff</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">I’m a technology leader with 40+ years in tech and 26 years directing engineering teams across cloud, DevOps, and SRE. I’ve led at Informix, TiVo, Platinum Technology, Embarcadero Technology, Zymergen, and SleepNumber. I help early‑stage and growth companies build durable engineering organizations, ship safely, and scale efficiently.</p>
            </div>
            
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Fractional Leadership</h3>
              <p className="mt-2 text-sm text-gray-700">Part-time Director-level leadership (1–3 days/week) owning delivery, quality, and stakeholder alignment.</p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Team Scaling</h3>
              <p className="mt-2 text-sm text-gray-700">Recruiting, onboarding, mentoring, and process design to uplevel execution.</p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Cloud & DevOps Strategy</h3>
              <p className="mt-2 text-sm text-gray-700">Infrastructure roadmaps, SRE practices, cost optimization, and platform maturity.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">Pricing (Monthly)</h2>
          <p className="mt-2 text-sm text-gray-700">Dual currency shown for convenience. Equity can supplement cash for early‑stage startups.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Advisory</h3>
              <p className="mt-2 text-sm text-gray-700">2–4 hrs / week • Strategic guidance</p>
              <div className="mt-4 text-sm">
                <div className="flex items-center justify-between border-t pt-3"><span>EUR</span><span className="font-semibold">€3,000 – €5,000</span></div>
                <div className="flex items-center justify-between"><span>USD</span><span className="font-semibold">$3,200 – $5,400</span></div>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Growth</h3>
              <p className="mt-2 text-sm text-gray-700">8–12 hrs / week • Hands‑on leadership</p>
              <div className="mt-4 text-sm">
                <div className="flex items-center justify-between border-t pt-3"><span>EUR</span><span className="font-semibold">€10,000 – €15,000</span></div>
                <div className="flex items-center justify-between"><span>USD</span><span className="font-semibold">$10,700 – $16,000</span></div>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Scale‑Up</h3>
              <p className="mt-2 text-sm text-gray-700">16–20 hrs / week • Interim VP‑level</p>
              <div className="mt-4 text-sm">
                <div className="flex items-center justify-between border-t pt-3"><span>EUR</span><span className="font-semibold">€18,000 – €22,000</span></div>
                <div className="flex items-center justify-between"><span>USD</span><span className="font-semibold">$19,300 – $23,600</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
              <p className="mt-3 text-gray-700">Ready to scale your engineering org? Reach out to discuss scope and timelines.</p>
            </div>
            <form action="https://formspree.io/f/myznydyr" method="POST" className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <label className="block text-sm font-medium">Name</label>
              <input name="name" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Your name" required />
              <label className="mt-4 block text-sm font-medium">Email</label>
              <input name="email" type="email" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="you@company.com" required />
              <label className="mt-4 block text-sm font-medium">Message</label>
              <textarea name="message" className="mt-1 w-full rounded-xl border px-3 py-2 h-28" placeholder="How can I help?" required />
              <button type="submit" className="mt-6 w-full rounded-2xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
