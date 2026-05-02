/**
 * Waitlist Page
 *
 * Dedicated page for waitlist signup featuring:
 * - Navigation bar
 * - Centered waitlist form
 * - Footer
 *
 * Design: Based on Figma waitlist modal (node-id: 475-5338)
 * Route: /waitlist
 */

import Navigation from '@/components/landing/Navigation';
import WaitlistForm from '@/components/landing/WaitlistForm';
import LandingFooter from '@/components/landing/LandingFooter';

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-[#fffdfa] flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="flex-1 flex items-start sm:items-center justify-center px-4 sm:px-6 pt-[160px] sm:pt-[120px] pb-[80px]">
        <WaitlistForm />
      </div>

      {/* Footer */}
      <LandingFooter />
    </main>
  );
}
