import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function scrollToEl(el) {
  const headerOffset = 80; // sticky header height + a bit of breathing room
  const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  window.scrollTo({ top: y, left: 0 });
}

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;

    if (!hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    const id = hash.replace('#', '');
    let tries = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        scrollToEl(el);
        return;
      }

      tries += 1;
      if (tries < 20) {
        window.setTimeout(tryScroll, 50);
      }
    };

    tryScroll();
  }, [location.pathname, location.search, location.hash]);

  return null;
}

