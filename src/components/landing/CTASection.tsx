/**
 * CTA (Call-to-Action) Section Component
 *
 * Final section with:
 * - Left side: Image of Rheii tote bag
 * - Right side: Heading, description, referral code question, and Join button
 *
 * Design: Two-column layout with image and text
 * Colors: Light background with dark text
 * Fully responsive
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center bg-gray-50 h-screen"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/home/Rheii.png"
              alt="Rheii tote bag"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center px-8 md:px-12 lg:px-16 py-12 md:py-20 gap-8"
        >
          {/* Heading */}
          <div className="max-w-[500px]">
            <h2
              className="font-heading font-normal text-[32px] sm:text-[40px] md:text-[48px] leading-[42px] sm:leading-[52px] md:leading-[60px] tracking-[-0.8px] text-black text-center"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              You already know more than you{' '}
              <span className="italic">think.</span>
            </h2>
          </div>

          {/* Description */}
          <p
            className="font-body font-normal text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-center text-gray-700 max-w-[450px]"
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Join a community of people who are ready to close that gap between where they are and where they want to be.
          </p>

          {/* Join Button */}
          <a
            href="/waitlist"
            className="overflow-hidden rounded-none min-h-[50px] mt-4"
          >
            <div className="flex flex-col items-center justify-center min-w-[180px] rounded-none">
              <div
                className="border border-black flex items-center justify-center px-[32px] py-[14px] rounded-none min-h-[50px]"
                style={{ backgroundColor: '#5C3D3D' }}
              >
                <span
                  className="font-body font-normal text-[14px] leading-[20px] text-white"
                  style={{ fontVariationSettings: "'opsz' 14" }}
                >
                  Join Here
                </span>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
