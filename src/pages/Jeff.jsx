import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Seo from '../components/Seo';
import { siteConfig } from '../siteConfig';

export default function Jeff() {
  const calendarUrl = siteConfig.calendarUrl;

  return (
    <div className="bg-gray-50">
      <Seo
        title="Jeff Burkhart — Engineering Leadership"
        description="Fractional Platform / SRE / Cloud Engineering Leadership. Download resume, book an intro call, or view case studies."
      />
      <Container className="py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
            <div className="text-sm text-gray-500">Jeff Burkhart — Engineering Leadership</div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">Jeff Burkhart</h1>
            <div className="mt-4 text-lg text-gray-900">
              Fractional Platform / SRE / Cloud Engineering Leadership
            </div>
            <p className="mt-3 text-gray-700">
              I help teams stabilize reliability, scale platform engineering, and build governable AI infrastructure.
            </p>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <div className="text-sm font-semibold text-gray-900">AI Governance & Distributed Systems</div>
              <ul className="mt-2 space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>Control planes and policy engines define what agents can do.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>Identity, least privilege, and verification become agent guardrails.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>Reliability signals (SLOs/SLIs) become safety boundaries.</span>
                </li>
              </ul>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">When to call me</h2>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    <span>Reliability incidents or on-call load are becoming leadership problems</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    <span>Your VP Engineering / Head of Platform / SRE leader just left (or is about to)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    <span>Cloud costs, delivery speed, or operational risk are limiting growth</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    <span>You need senior engineering leadership now, not after a 4-month search</span>
                  </li>
                </ul>
              </div>

              <div>
                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
                  <div className="text-sm font-medium text-gray-900">Actions</div>
                  <div className="mt-4 grid gap-3">
                    <a
                      href="/Jeff_Burkhart_Resume.pdf"
                      className="inline-flex w-full justify-center rounded-2xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
                      download
                    >
                      Download Resume (PDF)
                    </a>

                    {calendarUrl ? (
                      <a
                        href={calendarUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full justify-center rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
                      >
                        Talk through your situation (30-minute intro)
                      </a>
                    ) : (
                      <Link
                        to="/#contact"
                        className="inline-flex w-full justify-center rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
                      >
                        Talk through your situation (30-minute intro)
                      </Link>
                    )}

                    <Link
                      to="/case-studies"
                      className="inline-flex w-full justify-center rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
                    >
                      View Case Studies
                    </Link>
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-600">
                  Prefer email?{' '}
                  <Link className="text-gray-900 underline underline-offset-4 hover:text-gray-700" to="/#contact">
                    Use the contact form on my site.
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

