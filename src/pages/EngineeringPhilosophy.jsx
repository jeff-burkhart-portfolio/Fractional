import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Seo from '../components/Seo';

export default function EngineeringPhilosophy() {
  return (
    <div className="bg-gray-50">
      <Seo
        title="Engineering Philosophy"
        description="Core engineering and leadership principles behind how Jeff Burkhart scales Cloud, DevOps, and SRE teams."
      />
      <Container className="py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold tracking-tight">Engineering Philosophy</h1>
          <p className="mt-3 text-gray-700">
            These are the principles I use to build durable systems and high-performing, healthy teams — and the thinking behind why they matter.
          </p>
          <div className="space-y-8">
            {/* Core Philosophy */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">How I Think About Systems</h2>
              <p className="text-gray-700 mb-6">Reliable systems don't happen by accident — they're the result of deliberate decisions made early and maintained consistently. My technical approach is grounded in the belief that operational requirements deserve the same priority as functional ones. Most platform problems I've walked into weren't caused by bad engineers; they were caused by systems where reliability, security, and observability were treated as afterthoughts.</p>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Cloud-first architecture principles</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Infrastructure as Code (IaC)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Invest in CI/CD</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Leverage serverless computing and managed services</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Left Shift Security and Secure SDLC</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Prioritize operational requirements on a peer basis with functional requirements</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Pro-actively address engineering debt</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Invest in Observability</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Work to understand total cost of ownership</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Be smart in leveraging AI (see this page)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">As soon as possible develop a Production Engineering (SRE) team</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Stay ahead of the curve with capacity analysis, planning and implementation</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Consciously manage the life span of "temporary" solutions</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Establish clear and effective Incident Management policies and processes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Approach */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">How I Think About Teams</h2>
              <p className="text-gray-700 mb-6">The most important thing a leader can do is create the conditions for others to do their best work. That starts with emotional safety — people can't think clearly, take smart risks, or flag problems early when they don't feel safe. It also requires a leader who stays grounded under pressure. A non-anxious presence at the top of a team doesn't mean pretending problems don't exist — it means responding to them with clarity rather than urgency, and giving people the stability they need to solve hard things.</p>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Practice servant leadership</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Practice active listening</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Treat everyone with respect</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Perpetually focus on delivering customer value</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Deliver the MVP and iterate</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Deal pro-actively and constructively with conflicts and mis-steps</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Actively promote leadership development and continual learning</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Actively support collaboration across the organization</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Invest in time to support shared understanding</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">When inevitably challenges arise look for how the system has failed individuals</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Establish trust through active listening, being transparent, giving timely feedback, and following through on commitments</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Emotional safety is foundational to the success of individuals and teams</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Create a clear set of priorities</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Create clear lanes of execution</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Empower people</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Have a bias towards action</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Create a culture of ownership</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 font-medium">Only use command and control authority as a last resort</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-4">How I Think About Change</h2>
              <p className="text-gray-700">Most of my engagements happen at inflection points — a leadership gap, a reliability crisis, a platform that hasn't kept pace with growth. What I've learned is that the technical work is rarely the hardest part. The harder work is helping teams regain confidence, reestablish trust across functions, and find a sustainable pace after a period of strain. That's where experience with both systems and people matters most.</p>
            </div>

            <div className="flex justify-start">
              <Link
                to="/?intent=describe#contact"
                className="inline-flex w-fit rounded-2xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
              >
                Talk through your situation
              </Link>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
