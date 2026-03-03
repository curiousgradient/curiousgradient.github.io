/**
 * Base path for static assets (e.g. /repo-name for GitHub Pages project sites).
 * Empty string for user sites or local dev.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Prepend base path to a static asset path */
export function assetPath(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
