'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ComponentProps } from 'react';

type ViewTransitionLinkProps = ComponentProps<typeof Link>;

/**
 * Link component that uses the View Transitions API for smooth page changes.
 * Falls back to normal navigation when the API isn't supported.
 */
export default function ViewTransitionLink({
  href,
  onClick,
  children,
  ...props
}: ViewTransitionLinkProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    const isInternal = typeof href === 'string' && href.startsWith('/') && !href.startsWith('//');
    if (!isInternal) return;

    e.preventDefault();

    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      (document as Document & { startViewTransition: (cb: () => Promise<void>) => void }).startViewTransition(
        () => router.push(href as string)
      );
    } else {
      router.push(href as string);
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
