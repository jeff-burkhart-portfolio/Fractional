import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './Footer';
import Container from './Container';
import { siteConfig } from '../siteConfig';

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const calendarUrl = siteConfig.calendarUrl;

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search, location.hash]);

  const contactLink = '/#contact';
  const describeLink = '/?intent=describe#contact';
  const fitLink = '/?intent=fit#contact';

  const headerCta = (() => {
    if (location.pathname === '/' && calendarUrl) {
      return { type: 'external', href: calendarUrl, label: 'Talk through your situation (30-minute intro call)' };
    }
    if (location.pathname === '/recommendations') {
      return { type: 'internal', to: describeLink, label: 'Describe your situation' };
    }
    if (location.pathname === '/philosophy') {
      return { type: 'internal', to: fitLink, label: 'See if a fractional engagement makes sense' };
    }
    return { type: 'internal', to: contactLink, label: 'Contact' };
  })();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="font-semibold tracking-tight text-xl">
              Jeff Burkhart Engineering
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <NavLink
                to="/"
                className={({ isActive: navActive }) =>
                  `hover:text-gray-900 ${navActive ? 'text-gray-900 font-medium' : 'text-gray-600'}`
                }
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/recommendations"
                className={({ isActive: navActive }) =>
                  `hover:text-gray-900 ${navActive ? 'text-gray-900 font-medium' : 'text-gray-600'}`
                }
              >
                Recommendations
              </NavLink>
              <NavLink
                to="/philosophy"
                className={({ isActive: navActive }) =>
                  `hover:text-gray-900 ${navActive ? 'text-gray-900 font-medium' : 'text-gray-600'}`
                }
              >
                Philosophy
              </NavLink>
              <div className="h-5 w-px bg-gray-200" />
              <Link to="/#about" className="hover:text-gray-900 text-gray-600">About</Link>
              <Link to="/#services" className="hover:text-gray-900 text-gray-600">Services</Link>
              <Link to="/#pricing" className="hover:text-gray-900 text-gray-600">Pricing</Link>
              {headerCta.type === 'external' ? (
                <a
                  href={headerCta.href}
                  target="_blank"
                  rel="noreferrer"
                  className="whitespace-nowrap rounded-xl bg-gray-900 px-3 py-2 text-[11px] font-medium leading-tight text-white hover:bg-gray-800 lg:text-xs"
                >
                  {headerCta.label}
                </a>
              ) : (
                <Link
                  to={headerCta.to}
                  className="rounded-xl bg-gray-900 px-3 py-2 text-xs font-medium text-white hover:bg-gray-800"
                >
                  {headerCta.label}
                </Link>
              )}
            </nav>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm hover:bg-gray-50 md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((v) => !v)}
            >
              Menu
            </button>
          </div>

          {mobileOpen && (
            <div id="mobile-nav" className="md:hidden pb-4">
              <div className="mt-3 grid gap-2 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
                <NavLink
                  to="/"
                  end
                  className={({ isActive: navActive }) =>
                    `rounded-xl px-3 py-2 text-sm ${navActive ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-50'}`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/recommendations"
                  className={({ isActive: navActive }) =>
                    `rounded-xl px-3 py-2 text-sm ${navActive ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-50'}`
                  }
                >
                  Recommendations
                </NavLink>
                <NavLink
                  to="/philosophy"
                  className={({ isActive: navActive }) =>
                    `rounded-xl px-3 py-2 text-sm ${navActive ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-50'}`
                  }
                >
                  Philosophy
                </NavLink>
                <div className="my-1 h-px bg-gray-200" />
                <Link className="rounded-xl px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" to="/#about">About</Link>
                <Link className="rounded-xl px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" to="/#services">Services</Link>
                <Link className="rounded-xl px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" to="/#pricing">Pricing</Link>
                {headerCta.type === 'external' ? (
                  <a
                    className="rounded-xl bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800"
                    href={headerCta.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {headerCta.label}
                  </a>
                ) : (
                  <Link className="rounded-xl bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800" to={headerCta.to}>
                    {headerCta.label}
                  </Link>
                )}
              </div>
            </div>
          )}
        </Container>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
