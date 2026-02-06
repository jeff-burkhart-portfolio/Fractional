import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <div className="bg-gray-50">
      <Seo title="Page not found" />
      <Container className="py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Page not found</h1>
          <p className="mt-4 text-gray-700">
            That URL doesn’t exist. If you were looking for ways to work together, start from the home page.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="rounded-2xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              Go home
            </Link>
            <Link
              to="/#contact"
              className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

