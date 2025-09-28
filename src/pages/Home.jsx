export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
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
              <p className="mt-4 text-gray-700 leading-relaxed">I'm a technology leader with 40+ years in tech and 26 years directing engineering teams across cloud, DevOps, and SRE. I've led at Informix, TiVo, Platinum Technology, Embarcadero Technology, Zymergen, and SleepNumber. I help early‑stage and growth companies build durable engineering organizations, ship safely, and scale efficiently.</p>
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

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Learn More</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <a 
                href="/recommendations" 
                className="group block rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-900">Recommendations</h3>
                <p className="text-gray-700 mb-4">Read client testimonials, case studies, and professional references from my work across various companies and projects.</p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">View Recommendations →</span>
              </a>
              
              <a 
                href="/philosophy" 
                className="group block rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-900">Engineering Philosophy</h3>
                <p className="text-gray-700 mb-4">Explore my approach to engineering leadership, technical principles, and methodologies that drive successful team outcomes.</p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">View Philosophy →</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
