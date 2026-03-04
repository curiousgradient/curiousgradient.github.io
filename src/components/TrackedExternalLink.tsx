'use client';

import { trackEvent } from '@/lib/gtag';

type TrackedExternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventCategory: string;
  eventLabel: string;
};

/**
 * External link that fires a GA event on click.
 * Use for resume, outbound links, etc.
 */
export default function TrackedExternalLink({
  eventCategory,
  eventLabel,
  onClick,
  children,
  ...props
}: TrackedExternalLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent('click', { event_category: eventCategory, event_label: eventLabel });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
