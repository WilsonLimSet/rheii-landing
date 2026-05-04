/**
 * This Is Rheii Section Component
 *
 * Section introducing the Rheii app featuring:
 * - Title with "Dump your thoughts and let Rheii handle the rest..."
 * - Three feature cards with images and descriptions
 *
 * Design: Updated to show three pillar features
 * Colors: Light background (#EFEFEE or similar)
 * Typography: Roboto Serif for heading, DM Sans for body
 * Fully responsive with grid layout
 */

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ThisIsRheiiSection() {
  const cards = [
    {
      image: '/images/home/Recurring themes.png',
      title: 'Recurring Themes',
      description: 'See the themes you keep returning to, and what they\'re telling you.'
    },
    {
      image: '/images/home/Life in Motion.png',
      title: 'Your Life in Motion',
      description: 'As you navigate through life, see where things are growing, easing, or demanding your attention.'
    },
    {
      image: '/images/home/Support Cards.png',
      title: 'Support System',
      description: 'Receive personalized suggestion and set intentions that resonate. Start building the habits that actually stick.'
    }
  ];

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundColor: '#EFEFEE',
        margin: 0,
        padding: 0,
        display: 'block',
        position: 'relative',
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 px-5 sm:px-8 md:px-[7vw] py-12 sm:py-16 md:py-24">
        {/* Title Section */}
        <div
          className="max-w-[600px] mb-16 md:mb-20"
        >
          <motion.h2
            className="font-heading font-normal text-[28px] sm:text-[34px] md:text-[42px] leading-[36px] sm:leading-[42px] md:leading-[52px] tracking-[-0.8px] text-black"
            style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {['Dump your thoughts and let ', 'Rheii', ' handle the rest...'].map((text, idx) => (
              <span key={idx}>
                {text.split('').map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.03,
                      delay: (idx === 0 ? charIdx : idx === 1 ? text.length + charIdx + 20 : text.length + charIdx + 24) * 0.03,
                    }}
                    className={idx === 1 ? 'text-rheti-primary-500' : ''}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* Card Image */}
              <div className="w-full mb-6 rounded-2xl overflow-hidden max-w-[340px]">
                <div className="relative w-full aspect-square bg-gray-200">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Card Title */}
              <h3
                className="font-heading font-normal text-[22px] sm:text-[24px] leading-[32px] sm:leading-[36px] text-black mb-4"
                style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
              >
                {card.title}
              </h3>

              {/* Card Description */}
              <p
                className="font-body font-normal text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-gray-600"
                style={{ fontVariationSettings: "'opsz' 14" }}
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
