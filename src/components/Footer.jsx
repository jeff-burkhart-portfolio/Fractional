import { Link } from 'react-router-dom';
import Container from './Container';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-semibold tracking-tight">Jeff Burkhart Engineering</div>
            <p className="mt-2 text-sm text-gray-600">
              Fractional engineering leadership for teams building cloud-first products.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-medium text-gray-900">Explore</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>
                <Link className="hover:text-gray-900" to="/#services">Services</Link>
              </li>
              <li>
                <Link className="hover:text-gray-900" to="/recommendations">Recommendations</Link>
              </li>
              <li>
                <Link className="hover:text-gray-900" to="/case-studies">Case studies</Link>
              </li>
              <li>
                <Link className="hover:text-gray-900" to="/philosophy">Engineering philosophy</Link>
              </li>
              <li>
                <Link className="hover:text-gray-900" to="/#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-medium text-gray-900">Engagements</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Advisory</li>
              <li>Fractional Director / Senior Director</li>
              <li>Interim VP-level leadership</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-gray-200 pt-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <div>© {year} Jeff Burkhart Engineering</div>
          <div className="flex gap-4">
            <Link className="hover:text-gray-900" to="/#contact">Work together</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

