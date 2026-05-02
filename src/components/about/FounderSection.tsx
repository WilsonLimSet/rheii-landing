'use client';

import Image from 'next/image';

export default function FounderSection() {
  return (
    <section className="relative w-full overflow-x-clip">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-white" />

      {/* Divider */}
      <div className="relative w-full max-w-[1440px] mx-auto px-[7.2vw]">
        <div className="border-t border-[#E7E3DC]" />
      </div>

      {/* Content Container - Two Column Layout */}
      <div className="relative w-full h-full max-w-[1440px] mx-auto px-[7.2vw]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 pt-[14vh] pb-[14vh]">
          {/* Left Column - Headline + Photo */}
          <div className="flex flex-col gap-10">
            <h2
              className="font-heading font-light text-[52px] leading-[1.1] tracking-[-0.8px] text-[#2f2a26]"
              style={{ fontVariationSettings: "'GRAD' 0, 'wdth' 100" }}
            >
              Why we built this
            </h2>
            <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden">
              <Image
                src="/images/team/founder.png"
                alt="Jinny and Hannah"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Body */}
          <div className="flex items-start lg:pt-[2px]">
            <div
              className="font-body font-normal text-[18px] leading-[1.6] text-[#3b3430] space-y-6"
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              <p>
                Born from years of living between cultures, careers, and seasons of change, Rheii
                grew out of our shared experience of learning how to grow without a clear blueprint.
              </p>
              <p>
                We arrived here from different directions, each learning that growth is not about
                speed, but about alignment. What brought us together was a shared belief that growth
                does not have to be solitary, and that becoming is richer when it is witnessed.
              </p>
              <p>
                This is a space for those navigating life individually, but alongside others, a
                village for reflection, movement, and steady momentum. Wherever you are in your
                journey, you&apos;re invited to walk it with us, and with each other.
              </p>
              <p className="italic text-[#4a1e2a]">With intention,</p>
              <div className="mt-1 -ml-2">
                <Image
                  src="/images/team/signature-cropped.png"
                  alt="Jinny & Hannah signature"
                  width={180}
                  height={82}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
