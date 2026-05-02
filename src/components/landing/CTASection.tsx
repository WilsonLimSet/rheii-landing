/**
 * CTA (Call-to-Action) Section Component
 *
 * Final conversion section before footer with:
 * - Sunset beach background image
 * - Centered motivational text
 * - "Join Waitlist" button
 *
 * Design: Extracted from Figma (node-id: 53-32)
 * Typography: Roboto Serif H4 Medium (24px), DM Sans B2 Semibold (16px)
 * Colors: White text with shadows on orange-tinted background
 * Visual match to Figma with responsive adaptations
 */

'use client';

import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative w-full h-[350px] md:h-[538px] overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.7) sepia(0.15) saturate(0.85) contrast(0.95)' }}
          onEnded={(e) => {
            // Ensure the video restarts reliably across browsers
            try {
              const v = e.currentTarget as HTMLVideoElement;
              v.currentTime = 0;
              v.play().catch(() => {});
            } catch {
              // Silently ignore video replay errors
            }
          }}
        >
          <source src="/images/landing/candle-bg.mp4" type="video/mp4" />
        </video>
        {/* Nostalgic Fade Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(138, 121, 106, 0.08), rgba(101, 67, 33, 0.1))',
            mixBlendMode: 'overlay',
          }}
        />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[820px] flex flex-col items-center gap-6 sm:gap-8 text-center"
        >
          {/* Text Content */}
          <div className="flex flex-col gap-2 items-center">
            <h2
              className="font-body font-normal text-black text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              You&apos;re in control of your narrative.
            </h2>

            <p
              className="font-body font-normal text-black text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px]"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              We&apos;re here to help you see it.
            </p>
          </div>

          <a
            href="https://testflight.apple.com/join/uqq786sf"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden rounded-full min-h-[44px]"
          >
            <div className="flex flex-col items-center justify-center min-w-[160px] rounded-full">
              <div className="bg-black border border-black flex items-center justify-center px-[20px] py-[10px] rounded-full min-h-[44px]">
                <span
                  className="font-body font-semibold text-[14px] leading-[20px] text-white"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  Join Our iOS Beta
                </span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
