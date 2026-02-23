import { Link, useLocation } from 'react-router-dom';
import Container from '../components/Container';
import Seo from '../components/Seo';
import { siteConfig } from '../siteConfig';

export default function Home() {
  const calendarUrl = siteConfig.calendarUrl;
  const location = useLocation();
  const intent = new URLSearchParams(location.search).get('intent') || '';

  const intentConfig = {
    describe: {
      subject: 'Describe your situation',
      prefill:
        "Here’s my situation:\n\n- Company / stage:\n- Team size:\n- Current pain:\n- What 'better' looks like:\n\nAnything else I should know?",
    },
    question: {
      subject: 'Ask a question',
      prefill:
        "My question:\n\nContext:\n\nWhat I’ve tried so far (optional):",
    },
    fit: {
      subject: 'See if a fractional engagement makes sense',
      prefill:
        "Does a fractional engagement make sense for this situation?\n\n- Company / stage:\n- Team size:\n- Scope:\n- Timing:\n- Desired outcomes:",
    },
  };

  const prefillMessage = intentConfig[intent]?.prefill || '';
  const subject = intentConfig[intent]?.subject
    ? `Fractional VP Engineering — ${intentConfig[intent].subject}`
    : 'Fractional VP Engineering inquiry';

  return (
    <div className="bg-gray-50">
      <Seo
        title="Fractional and Full-Time Engineering Leadership"
        description="Fractional and full-time engineering leadership for startups and scale-ups. Stabilize Cloud, DevOps & SRE teams during growth, incidents, or leadership transitions."
      />
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50" />
        <Container className="relative py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-700">
                <span className="font-medium">Fractional VP Engineering</span>
                <span className="text-gray-400">•</span>
                <span>Cloud • DevOps • SRE</span>
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight">
                26 Years Leading Engineering Teams. Now Available Fractionally.
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                I help organizations build reliable, governable systems — including AI-era infrastructure — by treating governance, identity, and reliability as architectural concerns.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-gray-700 sm:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 bg-white/70 p-4">
                  <div className="font-semibold text-gray-900">26+ years</div>
                  <div className="mt-1">Leading engineering orgs</div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white/70 p-4">
                  <div className="font-semibold text-gray-900">Stabilize first</div>
                  <div className="mt-1">Decide what's next</div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white/70 p-4">
                  <div className="font-semibold text-gray-900">Available now</div>
                  <div className="mt-1">No 4-month search</div>
                </div>
              </div>
              <p className="mt-6 text-sm font-normal text-gray-500">
                Available for fractional leadership and select full-time roles.
              </p>
            </div>
            <div className="md:pl-8">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm flex items-center justify-center">
                <img src="/jeff-square.jpg" alt="Jeff Burkhart" className="w-56 h-56 object-cover rounded-full border border-gray-200 shadow-md" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="when-to-call" className="py-16 bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">When to call me</h2>
              <p className="mt-3 text-gray-700">
                You’re a good fit for a fractional engagement if any of these sound familiar:
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500" />
                  <span>Reliability incidents or on-call load are becoming leadership-level problems</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500" />
                  <span>Your VP Engineering / Head of Platform / SRE leader just left (or is about to)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500" />
                  <span>Cloud costs, delivery speed, or operational risk are limiting growth or confidence</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500" />
                  <span>You need someone who can be effective in week one, not month four</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-700">
                A fractional engagement can stabilize the situation quickly and create space to make longer-term decisions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="ai-governance" className="py-16 bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">AI Governance & Distributed Systems</h2>
              <p className="mt-3 text-gray-700">
                AI governance is distributed systems governance with higher stakes—and it needs enforceable guardrails.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span>Control planes and policy engines define what agents can do.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span>Identity, least privilege, and verification establish agent guardrails.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span>Reliability signals (SLOs/SLIs) become safety boundaries.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span>Monitoring and automated escalation make governance enforceable.</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            AI Governance Series (in progress)
          </p>
        </Container>
      </section>

      <section className="py-10 bg-white">
        <Container>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between rounded-3xl border border-gray-200 bg-gray-50 p-6">
            <div>
              <div className="text-sm font-medium text-gray-900">Ready to talk?</div>
              <div className="mt-1 text-sm text-gray-600">Currently accepting new fractional or interim engagements.</div>
            </div>
            <div className="w-full sm:w-auto">
              {calendarUrl ? (
                <>
                  <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full justify-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 sm:w-auto"
                  >
                    Talk through your situation (30-minute intro call)
                  </a>
                  <p className="mt-2 text-sm text-gray-600">
                    No sales pitch — just a conversation about what’s going on and whether I can help
                  </p>
                </>
              ) : (
                <Link
                  to="/#contact"
                  className="inline-flex w-full justify-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 sm:w-auto"
                >
                  Talk through your situation (30-minute intro call)
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="py-16">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">About Jeff</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">I'm a technology leader with more than 40 years in software and 26 years guiding engineering teams across cloud, DevOps, and SRE. My experience includes leadership roles at Informix, TiVo, Platinum Technology, Embarcadero Technology, Zymergen, and Sleep Number. I tend to be brought in at inflection points — when reliability, delivery, or team health have become leadership-level problems — and I focus on helping organizations stabilize, reset, and build something more durable.</p>
              <p className="mt-4 text-gray-700 leading-relaxed">I bring the same attention to the people side of engineering that I bring to the technical side. In my experience, holding the technical and the human in balance isn't a nice-to-have — it's what makes the difference between good and great. And ultimately, the two are inseparable.</p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">What you get</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500" /><span>Clear priorities, roadmaps, and execution cadence</span></li>
                <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500" /><span>Stronger engineering management, hiring, and leveling</span></li>
                <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500" /><span>Operational maturity: incidents, on-call, observability</span></li>
                <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-blue-500" /><span>Pragmatic governance: security, risk, reliability, and governable AI systems</span></li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="py-16 bg-white">
        <Container>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
              <p className="mt-2 text-sm text-gray-700">
                Focused help where your org is stuck—delivery, people, platform, or operations.
              </p>
            </div>
            {calendarUrl ? (
              <a
                href={calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit rounded-2xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Talk through your situation (30-minute intro call)
              </a>
            ) : (
              <Link
                to="/#contact"
                className="inline-flex w-fit rounded-2xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Talk through your situation (30-minute intro call)
              </Link>
            )}
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Fractional Leadership</h3>
              <p className="mt-2 text-sm text-gray-700">
                Part-time Director-level leadership (1–3 days/week) owning delivery, quality, and stakeholder alignment.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Team Scaling</h3>
              <p className="mt-2 text-sm text-gray-700">Recruiting, onboarding, mentoring, and process design to uplevel execution.</p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Cloud & DevOps Strategy</h3>
              <p className="mt-2 text-sm text-gray-700">Infrastructure roadmaps, SRE practices, cost optimization, and platform maturity.</p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="font-semibold">AI Governance & Control Planes</h3>
              <p className="mt-2 text-sm text-gray-700">Policy-driven infrastructure, identity boundaries, and reliability guardrails for agent-driven systems.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="approach" className="py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">What a typical first 30 days looks like</h2>
              <p className="mt-3 text-gray-700">
                The goal is fast clarity and momentum—without thrash. We’ll align on outcomes, stabilize delivery, and put sustainable habits in place.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-medium text-gray-500">Week 1</div>
                <div className="mt-1 font-semibold">Assess & align</div>
                <p className="mt-2 text-sm text-gray-700">
                  Stakeholder interviews, current-state map, and a short list of high-leverage fixes.
                </p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-medium text-gray-500">Weeks 2–3</div>
                <div className="mt-1 font-semibold">Stabilize delivery</div>
                <p className="mt-2 text-sm text-gray-700">
                  Improve planning, reduce WIP, tighten CI/CD, and address the top reliability risks.
                </p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-medium text-gray-500">Week 4</div>
                <div className="mt-1 font-semibold">Scale the system</div>
                <p className="mt-2 text-sm text-gray-700">
                  Hiring plan, role clarity, operating cadence, and governance guardrails (identity, policy, reliability signals).
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="pricing" className="py-16">
        <Container>
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
          <div className="mt-8 flex flex-wrap gap-3">
            {calendarUrl ? (
              <a
                href={calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                Talk through your situation (30-minute intro call)
              </a>
            ) : (
              <Link
                to="/#contact"
                className="rounded-2xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                Talk through your situation (30-minute intro call)
              </Link>
            )}
            <Link
              to="/?intent=fit#contact"
              className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              See if a fractional engagement makes sense
            </Link>
          </div>
          {calendarUrl && (
            <p className="mt-3 text-sm text-gray-600">
              No sales pitch — just a conversation about what’s going on and whether I can help
            </p>
          )}
        </Container>
      </section>

      <section id="faq" className="py-16 bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
              <p className="mt-3 text-gray-700">
                Quick answers to the questions that usually come up in the first conversation.
              </p>
            </div>
            <div className="space-y-3">
              <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-medium text-gray-900">
                  What does “fractional” mean in practice?
                </summary>
                <p className="mt-3 text-sm text-gray-700">
                  You get senior leadership on a predictable cadence (e.g. 4–20 hours/week). I can own outcomes, lead managers, and drive cross-functional alignment—without a full-time hire.
                </p>
              </details>
              <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-medium text-gray-900">
                  Where do you plug in: engineering, product, or operations?
                </summary>
                <p className="mt-3 text-sm text-gray-700">
                  Typically across engineering + operations: delivery, reliability, team health, and platform maturity. I’ll coordinate closely with product and security.
                </p>
              </details>
              <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-medium text-gray-900">
                  Do you do hands-on technical work?
                </summary>
                <p className="mt-3 text-sm text-gray-700">
                  When it accelerates the team. I’m happy to pair, review architecture, and unblock, but my primary value is leadership leverage: priorities, systems, and enabling others.
                </p>
              </details>
              <details className="group rounded-2xl border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-medium text-gray-900">
                  How quickly can we start?
                </summary>
                <p className="mt-3 text-sm text-gray-700">
                  Usually within a couple weeks. If you’re in a delivery or reliability crunch, we can discuss an accelerated start.
                </p>
              </details>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="py-16 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
              <p className="mt-3 text-gray-700">
                Tell me what you’re building, where you’re stuck, and what “better” looks like. I’ll reply with next steps and availability.
              </p>
              <div className="mt-6 rounded-3xl border border-gray-200 bg-gray-50 p-6">
                <div className="text-sm font-medium text-gray-900">Good fit if you want to:</div>
                <ul className="mt-3 space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-500" /><span>Scale a team without losing quality or velocity</span></li>
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-500" /><span>Stabilize incidents / on-call and improve reliability</span></li>
                  <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-teal-500" /><span>Make DevOps/SRE a force multiplier (not a bottleneck)</span></li>
                </ul>
              </div>
            </div>
            <form
              key={intent || 'default'}
              action="https://formspree.io/f/myznydyr"
              method="POST"
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <input type="hidden" name="intent" value={intent} />
              <input type="hidden" name="_subject" value={subject} />
              <label className="block text-sm font-medium">Name</label>
              <input name="name" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="Your name" required />
              <label className="mt-4 block text-sm font-medium">Email</label>
              <input name="email" type="email" className="mt-1 w-full rounded-xl border px-3 py-2" placeholder="you@company.com" required />
              <label className="mt-4 block text-sm font-medium">Message</label>
              <textarea
                name="message"
                className="mt-1 w-full rounded-xl border px-3 py-2 h-36"
                placeholder="How can I help?"
                defaultValue={prefillMessage}
                required
              />
              <button type="submit" className="mt-6 w-full rounded-2xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-800">Send</button>
            </form>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight mb-8">Learn More</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link 
                to="/recommendations" 
                className="group block rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-900">Recommendations</h3>
                <p className="text-gray-700 mb-4">Recommendations from those who have worked with me.</p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">View Recommendations →</span>
              </Link>
              
              <Link 
                to="/philosophy" 
                className="group block rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-900">Engineering & AI Governance Philosophy</h3>
                <p className="text-gray-700 mb-4">Explore my approach to engineering leadership, AI governance, technical principles, and methodologies that drive successful team outcomes.</p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">View Philosophy →</span>
              </Link>
            </div>
            <div className="mt-8 max-w-4xl mx-auto">
              <Link
                to="/case-studies"
                className="group block rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-900">Case Studies</h3>
                <p className="text-gray-700 mb-4">
                  Representative outcomes from reliability, cloud/platform, and engineering leadership engagements.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">View Case Studies →</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
