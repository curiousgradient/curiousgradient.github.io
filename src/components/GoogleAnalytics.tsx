'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { basePath } from '@/lib/basePath';

/**
 * Sends page_view to GA4 when the route changes.
 * Required for Next.js client-side navigation - without this, GA only sees the initial page load.
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!gaId || typeof window === 'undefined' || !window.gtag) return;

    const pagePath = basePath ? `${basePath}${pathname || '/'}` : pathname || '/';
    window.gtag('config', gaId, {
      page_path: pagePath,
      page_title: document.title,
    });
  }, [pathname, gaId]);

  return null;
}
