import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="font-semibold tracking-tight text-xl">
              Jeff Burkhart Engineering
            </Link>
            <nav className="hidden md:flex gap-6 text-sm">
              <Link 
                to="/" 
                className={`hover:text-gray-700 ${isActive('/') ? 'text-gray-900 font-medium' : 'text-gray-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/recommendations" 
                className={`hover:text-gray-700 ${isActive('/recommendations') ? 'text-gray-900 font-medium' : 'text-gray-600'}`}
              >
                Recommendations
              </Link>
              <Link 
                to="/philosophy" 
                className={`hover:text-gray-700 ${isActive('/philosophy') ? 'text-gray-900 font-medium' : 'text-gray-600'}`}
              >
                Philosophy
              </Link>
              <a href="/#about" className="hover:text-gray-700 text-gray-600">About</a>
              <a href="/#services" className="hover:text-gray-700 text-gray-600">Services</a>
              <a href="/#pricing" className="hover:text-gray-700 text-gray-600">Pricing</a>
              <a href="/#contact" className="hover:text-gray-700 text-gray-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}
