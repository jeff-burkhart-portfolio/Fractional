import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Seo from '../components/Seo';
import { siteConfig } from '../siteConfig';

function Section({ title, children }) {
  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

function Subhead({ children }) {
  return <h3 className="text-sm font-semibold tracking-tight text-gray-900">{children}</h3>;
}

function Bullets({ items }) {
  return (
    <ul className="space-y-2 text-sm text-gray-700">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudies() {
  const calendarUrl = siteConfig.calendarUrl;

  return (
    <div className="bg-gray-50">
      <Seo
        title="Case Studies"
        description="Representative case studies illustrating the types of situations Jeff Burkhart steps into as a fractional or interim engineering leader."
      />
      <Container className="py-20">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-4xl font-semibold tracking-tight">Case Studies</h1>
              <p className="mt-3 text-gray-700">
                These examples illustrate the types of situations I step into as a fractional or interim engineering leader.
                Company names are omitted where appropriate, but outcomes are representative of real work.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/?intent=describe#contact"
                className="inline-flex w-fit rounded-2xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                Describe your situation
              </Link>
              <Link
                to="/?intent=question#contact"
                className="inline-flex w-fit rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
              >
                Ask a question
              </Link>
            </div>
          </div>

          <div className="mt-10 space-y-8">
            <Section title="Stabilizing Reliability and Delivery at Scale (Consumer IoT Platform)">
              <div>
                <Subhead>Situation</Subhead>
                <p className="mt-2 text-sm text-gray-700">
                  A large consumer IoT platform supporting millions of users was experiencing increasing reliability issues,
                  long deployment cycles, and growing on-call fatigue. Cloud costs were rising while delivery confidence was declining.
                </p>
              </div>
              <div>
                <Subhead>What I did</Subhead>
                <div className="mt-3">
                  <Bullets
                    items={[
                      'Established a dedicated production engineering / SRE function',
                      'Introduced modern observability, incident response practices, and runbooks',
                      'Re-architected CI/CD pipelines and decoupled tightly coupled services',
                      'Implemented DevSecOps controls and self-service infrastructure as code',
                    ]}
                  />
                </div>
              </div>
              <div>
                <Subhead>Outcome</Subhead>
                <div className="mt-3">
                  <Bullets
                    items={[
                      'Scaled the platform by ~40% while keeping AWS spend flat',
                      'Reduced deployment time by ~90% (from hours to minutes)',
                      'Improved uptime to ~99.9%',
                      'Significantly reduced operational stress on engineering teams',
                    ]}
                  />
                </div>
              </div>
              <div>
                <Subhead>How this applies fractionally</Subhead>
                <p className="mt-2 text-sm text-gray-700">
                  This is a common scenario when reliability problems have become leadership problems. Fractional VP-level focus helps
                  stabilize systems and teams while creating space for longer-term hiring decisions.
                </p>
              </div>
            </Section>

            <Section title="Scaling Cloud, Data, and SRE for a High-Growth Deep Tech Company">
              <div>
                <Subhead>Situation</Subhead>
                <p className="mt-2 text-sm text-gray-700">
                  A rapidly growing deep-tech company needed to scale cloud infrastructure and data platforms to support compute-heavy
                  scientific workloads. The existing team was small, and delivery risk increased with each growth milestone.
                </p>
              </div>
              <div>
                <Subhead>What I did</Subhead>
                <div className="mt-3">
                  <Bullets
                    items={[
                      'Built and led cloud, data engineering, and SRE teams (4 → 25 engineers)',
                      'Containerized core services and deployed Kubernetes for scalability',
                      'Designed job execution and data pipelines to support parallel compute workloads',
                      'Introduced CI/CD, automation, and operational maturity across teams',
                    ]}
                  />
                </div>
              </div>
              <div>
                <Subhead>Outcome</Subhead>
                <div className="mt-3">
                  <Bullets
                    items={[
                      'Improved platform performance by orders of magnitude',
                      'Enabled reliable parallel compute at scale',
                      'Created a foundation that allowed scientific teams to move faster with confidence',
                    ]}
                  />
                </div>
              </div>
              <div>
                <Subhead>How this applies fractionally</Subhead>
                <p className="mt-2 text-sm text-gray-700">
                  Fractional leadership is effective when teams are growing faster than leadership capacity. The goal is to put durable
                  systems and org design in place — not just keep up.
                </p>
              </div>
            </Section>

            <Section title="Accelerating Enterprise Software Delivery Through Cloud and Agile Transformation">
              <div>
                <Subhead>Situation</Subhead>
                <p className="mt-2 text-sm text-gray-700">
                  An enterprise software organization with global teams was shipping annually, struggling with coordination, and operating
                  a legacy data-center-based platform.
                </p>
              </div>
              <div>
                <Subhead>What I did</Subhead>
                <div className="mt-3">
                  <Bullets
                    items={[
                      'Led a global engineering organization (100+ engineers across 13 teams)',
                      'Migrated core services from on-prem to AWS',
                      'Introduced Agile execution at scale and modern CI pipelines',
                      'Re-architected the platform into a multi-tenant SaaS offering',
                    ]}
                  />
                </div>
              </div>
              <div>
                <Subhead>Outcome</Subhead>
                <div className="mt-3">
                  <Bullets
                    items={[
                      'Increased release frequency by ~300% (annual → quarterly)',
                      'Improved cross-team alignment and predictability',
                      'Reduced infrastructure complexity and operational risk',
                    ]}
                  />
                </div>
              </div>
              <div>
                <Subhead>How this applies fractionally</Subhead>
                <p className="mt-2 text-sm text-gray-700">
                  This pattern shows up when delivery issues are rooted in org design and architecture, not individual performance.
                  Fractional leadership helps reset execution without wholesale disruption.
                </p>
              </div>
            </Section>

            <Section title="Reducing Partner Integration Timelines in a Large Media Platform">
              <div>
                <Subhead>Situation</Subhead>
                <p className="mt-2 text-sm text-gray-700">
                  A consumer media platform depended on complex integrations with major partners. External deployments were slow, brittle,
                  and limiting business growth.
                </p>
              </div>
              <div>
                <Subhead>What I did</Subhead>
                <div className="mt-3">
                  <Bullets
                    items={[
                      'Led server engineering and production infrastructure teams (~60 engineers)',
                      'Streamlined partner release processes and external integration workflows',
                      'Introduced distributed service architecture and production engineering practices',
                      'Worked directly with partners on technical and delivery alignment',
                    ]}
                  />
                </div>
              </div>
              <div>
                <Subhead>Outcome</Subhead>
                <div className="mt-3">
                  <Bullets
                    items={[
                      'Reduced partner deployment timelines by ~85%',
                      'Enabled faster onboarding of major partners',
                      'Improved internal and external delivery confidence',
                    ]}
                  />
                </div>
              </div>
              <div>
                <Subhead>How this applies fractionally</Subhead>
                <p className="mt-2 text-sm text-gray-700">
                  When external commitments are at risk, experienced leadership can quickly stabilize execution and protect business relationships.
                </p>
              </div>
            </Section>

            <Section title="Designing and Launching an AI-First Engineering Platform (Early-Stage)">
              <div>
                <Subhead>Situation</Subhead>
                <p className="mt-2 text-sm text-gray-700">
                  An early-stage company needed to design and deliver an AI-first platform integrating infrastructure provisioning, CI/CD,
                  observability, and developer workflows — while building the initial engineering team.
                </p>
              </div>
              <div>
                <Subhead>What I did</Subhead>
                <div className="mt-3">
                  <Bullets
                    items={[
                      'Defined technical vision and engineering standards',
                      'Hardened core build systems for production-scale usage',
                      'Expanded platform support for modern languages and workloads',
                      'Recruited and led the initial distributed engineering team',
                    ]}
                  />
                </div>
              </div>
              <div>
                <Subhead>Outcome</Subhead>
                <div className="mt-3">
                  <Bullets
                    items={[
                      'Improved platform reliability and developer adoption',
                      'Expanded the range of supported workloads and teams',
                      'Established a scalable foundation for future growth',
                    ]}
                  />
                </div>
              </div>
              <div>
                <Subhead>How this applies fractionally</Subhead>
                <p className="mt-2 text-sm text-gray-700">
                  Fractional leadership is often most valuable at inflection points — when clarity, standards, and early execution discipline
                  matter more than headcount.
                </p>
              </div>
            </Section>

            <section className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="text-2xl font-semibold tracking-tight">A common pattern</h2>
              <p className="mt-4 text-gray-700">
                Across these engagements, the pattern is consistent:
              </p>
              <div className="mt-4">
                <Bullets
                  items={[
                    'Complexity increased faster than leadership bandwidth',
                    'Reliability, delivery, or cost issues became executive concerns',
                    'Teams needed calm, experienced leadership to stabilize and reset',
                    'Fractional engagement allows companies to address these challenges quickly, without committing to a full-time executive before the situation is clear.',
                  ]}
                />
              </div>

              <div className="mt-8">
                {calendarUrl ? (
                  <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-2xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
                  >
                    Talk through your situation (30-minute intro call)
                  </a>
                ) : (
                  <Link
                    to="/#contact"
                    className="inline-flex rounded-2xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
                  >
                    Talk through your situation (30-minute intro call)
                  </Link>
                )}
              </div>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}

