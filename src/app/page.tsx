/**
 * Landing Page Route
 *
 * Entry point for all users visiting the site.
 * Renders the LandingPage component with centered layout.
 *
 * Route: /
 * Access: Public (unauthenticated)
 *
 * Design Reference: UI_UX_FLOW.md - Screen 1: Landing Page
 */

import LandingPage from '@/components/landing/LandingPage';

export default function Home() {
  return <LandingPage />;
}
