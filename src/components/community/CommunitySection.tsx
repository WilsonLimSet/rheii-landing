/**
 * Community Section Component
 *
 * Main content section for the Community page featuring:
 * - Background image with custom community-bg.jpg
 * - Community photos positioned around the edges
 * - Centered text content explaining the community vision
 * - "Coming Soon" message
 *
 * Design: Extracted from Figma (node-id: 159-961)
 * Colors: #fffdfa background, #191716 text
 * Typography: Roboto Serif Medium (40px) for title, DM Sans for body text
 */

'use client';

import Image from 'next/image';

export default function CommunitySection() {
  return (
    <div className="relative w-full min-h-[130vh] bg-[#fffdfa] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <Image src="/images/community/community-bg.jpg" alt="" fill className="object-cover" />
      </div>

      {/* Decorative Photos */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* Top left photo */}
        <div className="absolute left-[105px] top-[294px] w-[190px] h-[190px]">
          <Image
            src="/images/community/dsc01267.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Left middle photo */}
        <div className="absolute left-[181px] top-[641px] w-[186px] h-[186px]">
          <Image
            src="/images/community/dsc01429.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Bottom right photo */}
        <div className="absolute right-[584px] top-[822px] w-[160px] h-[160px]">
          <Image
            src="/images/community/dsc01496.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Top right photo */}
        <div className="absolute right-[124px] top-[199px] w-[190px] h-[190px]">
          <Image
            src="/images/community/dsc01494.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Bottom right corner photo */}
        <div className="absolute right-[104px] top-[597px] w-[186px] h-[186px]">
          <Image
            src="/images/community/dsc01620.jpg"
            alt=""
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[130vh] px-5 sm:px-8 md:px-[104px] pt-[140px] md:pt-[120px] pb-[120px]">
        {/* Content Container */}
        <div className="flex flex-col items-center gap-[8px] max-w-[635px]">
          {/* Title */}
          <h1
            className="font-heading font-light text-[40px] leading-[56px] tracking-[-0.8px] text-rheti-neutral-600 text-center"
            style={{
              fontVariationSettings: "'GRAD' 0, 'wdth' 100",
            }}
          >
            A community designed by you
          </h1>
        </div>

        {/* Body Text */}
        <div className="flex flex-col gap-[40px] items-center mt-[80px] max-w-[431px]">
          <p
            className="font-body text-[16px] leading-[24px] text-rheti-neutral-600 text-center"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Through our community, growth becomes shared rather than solitary. Our offline
            gatherings are designed around your needs, connecting you with like-minded people who
            understand your context, grow alongside you, and challenge you constructively.
          </p>
        </div>

        {/* Coming Soon */}
        <p
          className="font-body font-normal text-[20px] leading-[30px] text-rheti-neutral-600 text-center mt-[80px]"
          style={{
            fontVariationSettings: "'opsz' 14",
          }}
        >
          Coming Soon.
        </p>
      </div>
    </div>
  );
}
