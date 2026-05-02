/**
 * Why Rheii Section Component
 *
 * Section explaining why users need Rheii featuring:
 * - Heading "Growth doesn't happen in isolation."
 * - Three interactive feature cards with hover states
 * - Card backgrounds blur on hover to reveal content
 * - Background gradients
 *
 * Design: Extracted from Figma (node-id: 53-26, hover: 148-2105)
 * Colors: White background with colored overlays per card
 * Typography: Roboto Serif (H2 Regular, H3 Medium), DM Sans (B1 Regular, B2 Medium, B3 Semibold)
 * Fully responsive with viewport-based spacing and max-width constraints
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface FeatureCardProps {
  number: string;
  title: string;
  badge: string;
  headline: string;
  description: string;
  imageSrc: string;
  hoverImageSrc: string;
  overlayColor: string;
  badgeColor: string;
  badgeTextColor?: string;
  textShadow: string;
}

function FeatureCard({
  number,
  title,
  badge,
  headline,
  description,
  imageSrc,
  hoverImageSrc,
  overlayColor,
  badgeColor,
  badgeTextColor = 'white',
  textShadow,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full md:flex-1 md:max-w-none h-[360px] sm:h-[400px] md:h-[425px] p-[8px] cursor-pointer bg-white/90"
      style={{
        backdropFilter: 'blur(80px)',
      }}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Background image - changes on hover */}
        <div className="absolute inset-0">
          <Image
            src={isHovered ? hoverImageSrc : imageSrc}
            alt=""
            fill
            className="object-cover transition-opacity duration-500"
            style={{
              filter: `${isHovered ? 'blur(0px)' : 'blur(8px)'} brightness(60%)`,
            }}
          />
        </div>

        {/* Colored overlay - fades out on hover */}
        <motion.div
          animate={{ opacity: isHovered ? 0.3 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor }}
        />

        {/* Top blur overlay - appears on hover */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 left-0 right-0 h-[60%] pointer-events-none"
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          }}
        />

        {/* Default State - Number and Title */}
        <motion.div
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h3
            className="font-heading font-normal text-[24px] sm:text-[28px] md:text-[30px] leading-[32px] sm:leading-[38px] md:leading-[40px] tracking-[-0.9px] text-center text-white whitespace-nowrap"
            style={{
              fontVariationSettings: "'GRAD' 0, 'wdth' 100",
              textShadow,
            }}
          >
            {title}
          </h3>
        </motion.div>

        {/* Hover State - Badge and Description Text */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 p-6 sm:p-8 flex flex-col gap-3 items-start pointer-events-none"
        >
          {/* Badge */}
          <div
            className="inline-flex self-start px-3 py-1 rounded-full"
            style={{ backgroundColor: badgeColor }}
          >
            <span
              className="font-heading font-normal text-[13px] sm:text-[14px] leading-[20px] sm:leading-[21px]"
              style={{
                fontVariationSettings: "'opsz' 14",
                color: badgeTextColor,
              }}
            >
              {badge}
            </span>
          </div>

          {/* Description - First Paragraph */}
          <p
            className="font-heading font-normal text-[20px] sm:text-[22px] md:text-[16px] leading-[28px] sm:leading-[30px] md:leading-[24px] text-white"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            {headline}
          </p>

          {/* Description - Second Paragraph */}
          <p
            className="font-heading font-normal text-[20px] sm:text-[22px] md:text-[16px] leading-[28px] sm:leading-[30px] md:leading-[24px] text-white"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            {description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function WhyRheiiSection() {
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ backgroundColor: '#F0E6E0' }}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/landing/why-rheii-bg.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Content Container - Responsive Flexbox Layout */}
      <div className="relative z-10 w-full flex flex-col items-center md:items-start gap-10 sm:gap-12 md:gap-[12vh] px-5 sm:px-8 md:px-[7vw] py-16 sm:py-20 md:py-[17vh]">
        {/* Text Content - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 items-center md:items-start w-full max-w-[670px]"
        >
          {/* Heading */}
          <h2
            className="font-heading font-light text-[28px] sm:text-[34px] md:text-[40px] leading-[38px] sm:leading-[46px] md:leading-[56px] tracking-[-0.8px] text-rheti-neutral-600 text-center md:text-left"
            style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
          >
            And growth doesn&apos;t happen in isolation.
          </h2>

          {/* Body Text */}
        </motion.div>

        {/* Feature Cards Row - Triptych Layout */}
        <div className="w-full flex flex-col md:flex-row md:items-stretch justify-between gap-6">
          {/* Card 1 - Personalized */}
          <FeatureCard
            number="1"
            title="Personalized"
            badge="Personalized"
            headline="Your experience adapts to the way you think."
            description="Rheii learns from your patterns and reflections, offering tailored prompts and insights that evolve with you."
            imageSrc="/images/landing/personalization card img.png"
            hoverImageSrc="/images/landing/personalization card img.png"
            overlayColor="rgba(134, 133, 133, 0.5)"
            badgeColor="#ece5dd"
            badgeTextColor="black"
            textShadow="0px 5px 63px rgba(75, 52, 41, 0.95)"
          />

          {/* Card 2 - Social */}
          <FeatureCard
            number="2"
            title="Social"
            badge="Social"
            headline="See how your circle evolves with you."
            description="Build your trusted circles and track how they grow with you."
            imageSrc="/images/landing/social.jpg"
            hoverImageSrc="/images/landing/social.jpg"
            overlayColor="rgba(134, 133, 133, 0.5)"
            badgeColor="#ebf1f3"
            badgeTextColor="black"
            textShadow="0px 5px 64px #283f37"
          />

          {/* Card 3 - Community */}
          <FeatureCard
            number="3"
            title="Community"
            badge="Community"
            headline="Find your people, at every stage."
            description="Discover communities aligned with where you are and where you're headed. Connect with others navigating similar paths."
            imageSrc="/images/landing/community card.jpg"
            hoverImageSrc="/images/landing/community card.jpg"
            overlayColor="rgba(134, 133, 133, 0.5)"
            badgeColor="#F3EBED"
            badgeTextColor="black"
            textShadow="0px 5px 64px rgba(61, 88, 112, 0.45)"
          />
        </div>
      </div>
    </section>
  );
}
