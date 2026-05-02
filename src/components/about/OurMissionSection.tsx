/**
 * Our Mission Section Component
 *
 * Scrolling section explaining the Rheii mission featuring:
 * - Background tree image with brown tint overlay
 * - Two-column responsive grid layout (1.2fr_1fr)
 * - Left: Sticky "Our Mission" title at 40vh (always visible, positioned next to focus zone)
 * - Right: Scrolling text paragraphs with highlight-on-scroll animation
 * - Text highlighting: Light grey (60% opacity) when out of focus, white (100%) when in focus
 * - Focus zone: Text becomes highlighted when scrolled into viewport (80% visible)
 * - Creates reading experience where attention follows the sticky title
 *
 * Design: Extracted from Figma (node-id: 266-998)
 * Colors: Tree background with #8a5d34 tint at 50% opacity
 * Typography: Roboto Serif H2 (40px) for title, DM Sans Medium (20px) for body
 * Animation: Opacity transitions (0.6 -> 1.0) with 0.4s duration
 */

'use client';

import Image from 'next/image';

export default function OurMissionSection() {
  return (
    <section className="relative w-full overflow-x-clip">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-[#F1EBE7]" />

      {/* Content Container - Two Column Layout */}
      <div className="relative w-full h-full max-w-[1440px] mx-auto px-[7.2vw]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 pt-[20vh] pb-[20vh]">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <h2
              className="font-heading font-light text-[52px] leading-[1.1] tracking-[-0.8px] text-[#2f2a26]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              Rheii was built <em className="text-[#4a1e2a] font-light">to make growth visible</em>.
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex items-start lg:pt-[2px]">
            <div
              className="font-body font-normal text-[18px] leading-[1.6] text-[#3b3430] space-y-6"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              <p>
                Because what you can see, you can change, and what you share, you can grow together.
              </p>
              <p>
                Growth happens when you close the gap between who you are and how you want to live,
                think, and show up. That gap has never been harder to close.
              </p>
              <p>
                We live in an era of constant input- ideas, advice, and inspiration that feel
                relevant in the moment but aren&apos;t grounded in who you actually are or what
                you&apos;re trying to work through. We consume quickly and often in isolation. We
                are more informed than ever, yet increasingly overwhelmed and stuck in the same
                loops.
              </p>
              <p>
                Self-growth has become reactive and fragmented; a solo pursuit with no thread
                connecting it back to you.
              </p>
              <p>
                Rheii starts from somewhere different: within your lived experience. We bring
                together your thoughts, emotions, and patterns over time and translate them into
                insight you can actually use. Not snapshots or labels, but continuity. So you can
                grow with intention, not reaction.
              </p>
              <p>
                From there, we let your inner world shape what you consume, not the other way
                around.
              </p>
              <p>
                We believe we&apos;re at the beginning of a new era of self-growth. One that chooses
                reflection before consumption, insight over information, and community over
                isolation. Rheii is built for that era.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
