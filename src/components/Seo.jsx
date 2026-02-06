import { useEffect } from 'react';

const DEFAULT_TITLE = 'Jeff Burkhart Engineering';

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} · ${DEFAULT_TITLE}` : DEFAULT_TITLE;

    if (!description) return;
    const desc = document.querySelector('meta[name="description"]');
    if (!desc) return;
    desc.setAttribute('content', description);
  }, [title, description]);

  return null;
}

