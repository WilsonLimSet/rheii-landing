/**
 * This Is Rheii Section Component
 *
 * Section introducing the Rheii app featuring:
 * - Decorative background with gradients and stars (composited image)
 * - Heading "This is Rheii." with mixed styling
 * - Body description text
 * - Two overlapping skewed app screenshots
 *
 * Design: Extracted from Figma (node-id: 94-293)
 * Colors: Secondary/50 background (#F2EEEA)
 * Typography: Roboto Serif (H2 Regular/Italic), DM Sans (B1 Regular)
 * Fully responsive with flexbox layout
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ThisIsRheiiSection() {
  return (
    <section
      className="relative w-full min-h-[560px] md:min-h-screen overflow-hidden"
      style={{
        backgroundColor: '#F2EEEA', // Fallback color to prevent white gap
        margin: 0,
        padding: 0,
        display: 'block',
        position: 'relative',
      }}
    >
      {/* Background Layer - Dynamic and responsive - ensures full coverage */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/landing/gradient-stars-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'local',
          zIndex: 0,
        }}
      />

      {/* Content Container - Responsive Flexbox Layout */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-12 px-5 sm:px-8 md:px-[7vw] py-12 sm:py-16 md:pt-24 md:pb-24 min-h-full">
        {/* Text Content - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 w-full max-w-[493px] text-center md:text-left"
        >
          {/* Heading */}
          <h2
            className="font-heading font-normal text-[28px] sm:text-[34px] md:text-[40px] leading-[38px] sm:leading-[46px] md:leading-[56px] tracking-[-0.8px] text-rheti-neutral-600"
            style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
          >
            With{' '}
            <span
              className="text-rheti-primary-500"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              Rheii
            </span>
            ,
          </h2>

          {/* Body Text */}
          <p
            className="font-body font-normal text-[17px] sm:text-[19px] md:text-[19px] leading-[25px] sm:leading-[28px] md:leading-[29px] text-rheti-neutral-400"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Turn unstructured thoughts or reflections into meaningful insights over time, so you can
            make better choices and keep becoming who you want to be.
          </p>
        </motion.div>

        {/* App Screenshots - Right Side with Overlapping Layout */}
        <div className="w-full md:flex-1 flex items-center justify-center md:justify-end">
          <div className="relative w-full max-w-[1020px] h-[360px] sm:h-[470px] md:h-[620px]">
            {/* Insights Screenshot - Back */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-[6%] sm:left-[10%] top-[50px] sm:top-[70px] md:top-[90px] w-full h-[320px] sm:h-[440px] md:h-[560px]"
            >
              <div className="relative w-[94%] aspect-[8660/3845] overflow-hidden rounded-none border-[0.5px] border-black/10 shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/landing/Product%20Preview%202%20final.png"
                    alt="Insights view"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Explore Screenshot - Front */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute left-0 top-[130px] sm:top-[150px] md:top-[170px] w-full h-[330px] sm:h-[450px] md:h-[570px]"
            >
              <div className="relative w-[95%] aspect-[8774/3931] overflow-hidden rounded-none border-[0.5px] border-black/10 shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/landing/Product%20Preview%201.png"
                    alt="Explore view"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
