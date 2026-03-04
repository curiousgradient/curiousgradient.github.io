/**
 * Google Analytics gtag utilities.
 * NEXT_PUBLIC_GA_ID must be set for tracking to work.
 */

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/** Send a custom event to GA4 */
export function trackEvent(
  action: string,
  params?: { event_category?: string; event_label?: string; value?: number }
): void {
  if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
    window.gtag('event', action, params);
  }
}
