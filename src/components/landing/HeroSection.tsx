/**
 * Hero Section Component
 *
 * Top section of the Rheii landing page featuring:
 * - Background image with color tint overlay
 * - Left and right edge blur (15% width each, gradient to transparent center)
 * - Flexbox-centered "Rheii" branding and subtitle
 *
 * Design: Extracted from Figma (node-id: 46-3)
 * Colors: White text with shadow, brown tint overlay
 * Typography: Roboto Serif (H1 Italic, H4 Regular)
 * Responsive design with modern CSS techniques
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // #region agent log
    if (sectionRef.current && bgRef.current && contentRef.current) {
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const bgRect = bgRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const innerRect = innerRef.current?.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const computedSection = window.getComputedStyle(sectionRef.current);
      const computedBg = window.getComputedStyle(bgRef.current);
      fetch('http://127.0.0.1:7243/ingest/8bed6cbb-debd-473a-a110-c7a68df1bf1b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          location: 'HeroSection.tsx:useEffect',
          message: 'Hero layout snapshot',
          data: {
            scrollY: window.scrollY,
            sectionTop: sectionRect.top,
            sectionHeight: sectionRect.height,
            sectionMinHeight: computedSection.minHeight,
            sectionPaddingTop: computedSection.paddingTop,
            contentTop: contentRect.top,
            contentHeight: contentRect.height,
            innerTop: innerRect?.top,
            innerHeight: innerRect?.height,
            bgTop: bgRect.top,
            bgHeight: bgRect.height,
            bgPosition: computedBg.backgroundPosition,
            viewportHeight,
          },
          timestamp: Date.now(),
          sessionId: 'debug-session',
          runId: 'run2',
          hypothesisId: 'H1',
        }),
      }).catch(() => {});
    }
    // #endregion
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[100dvh] overflow-hidden">
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0">
        <Image
          src="/images/landing/landing page bg.jpg"
          alt=""
          fill
          className="object-cover object-left"
          priority
          onLoad={() => {
            // #region agent log
            fetch('http://127.0.0.1:7243/ingest/8bed6cbb-debd-473a-a110-c7a68df1bf1b', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                location: 'HeroSection.tsx:Image.onLoad',
                message: 'Background image loaded',
                data: { imageSrc: '/images/landing/landing page bg.jpg' },
                timestamp: Date.now(),
                sessionId: 'debug-session',
                runId: 'run1',
                hypothesisId: 'C',
              }),
            }).catch(() => {});
            // #endregion
          }}
          onError={(e) => {
            // #region agent log
            fetch('http://127.0.0.1:7243/ingest/8bed6cbb-debd-473a-a110-c7a68df1bf1b', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                location: 'HeroSection.tsx:Image.onError',
                message: 'Background image failed to load',
                data: { error: e.toString() },
                timestamp: Date.now(),
                sessionId: 'debug-session',
                runId: 'run1',
                hypothesisId: 'C',
              }),
            }).catch(() => {});
            // #endregion
          }}
        />

        {/* Color Tint Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: 'rgba(138, 121, 106, 0.3)',
          }}
        />

        {/* Left Edge Blur - 15% width with gradient to transparent */}
        <div
          className="absolute inset-y-0 left-0 w-[10%] md:w-[15%] backdrop-blur-2xl pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, black, transparent)',
          }}
        />

        {/* Right Edge Blur - 15% width with gradient to transparent */}
        <div
          className="absolute inset-y-0 right-0 w-[10%] md:w-[15%] backdrop-blur-2xl pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to left, black, transparent)',
            WebkitMaskImage: 'linear-gradient(to left, black, transparent)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-[100dvh] pt-[120px] sm:pt-[104px] md:pt-[80px] px-4"
      >
        <div
          ref={innerRef}
          className="min-h-[calc(100dvh-120px)] sm:min-h-[calc(100dvh-104px)] md:min-h-[calc(100dvh-80px)] flex items-start justify-center pt-[24vh] sm:pt-[28vh] md:pt-[34vh]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="flex flex-col gap-[8px] items-center text-white"
            style={{ textShadow: '0px 1px 11px rgba(53, 38, 19, 0.24)' }}
          >
            <h1
              className="font-heading font-extralight text-[36px] sm:text-[41px] md:text-[45px] leading-[54px] sm:leading-[63px] md:leading-[68px] text-center max-w-[300px] sm:max-w-none"
              style={{
                transform: 'scaleX(0.985)',
                fontVariationSettings: "'opsz' 14",
              }}
            >
              Your Growth,
              <br />
              made visible.
            </h1>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
