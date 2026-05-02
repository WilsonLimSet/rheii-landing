/**
 * Waitlist Modal Component
 *
 * Modal for collecting waitlist signups featuring:
 * - Form fields: First Name, Last Name, Email
 * - Text area for growth journey preferences
 * - Dropdown for referral source (placeholder for now)
 * - Cancel and Join Waitlist buttons
 * - Close button (X) in top right
 *
 * Design: Extracted from Figma (node-id: 475-5338)
 * Colors: White background, #191716 text, #73383E primary
 * Typography: Roboto Serif Medium (30px) for heading, DM Sans for form
 */

'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import CustomDropdown from './CustomDropdown';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    growthJourney: '',
    referralSource: '',
    referralSourceOther: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const referralOptions = [
    { value: 'instagram', label: 'Instagram' },
    { value: 'linkedin', label: 'Linkedin' },
    { value: 'word-of-mouth', label: 'Word of Mouth' },
    { value: 'event', label: 'Event' },
    { value: 'others', label: 'Others' },
  ];

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      // Close modal on success
      onClose();
    } catch (err) {
      console.error('Waitlist signup error:', err);
      setError(err instanceof Error ? err.message : 'Failed to join waitlist. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-[604px] bg-white rounded-[16px] p-[48px]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-[32px] top-[32px] p-[8px] text-rheti-primary-500 hover:opacity-70 transition-opacity"
          aria-label="Close modal"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        {/* Heading */}
        <div className="flex flex-col gap-[8px] items-center text-center mb-[32px]">
          <h2
            className="font-heading font-medium text-[30px] leading-[40px] tracking-[-0.9px] text-rheti-neutral-600"
            style={{
              fontVariationSettings: "'GRAD' 0, 'wdth' 100",
            }}
          >
            Join the Waitlist for our Beta intake
          </h2>
          <p
            className="font-body text-[16px] leading-[24px] text-[#262626]"
            style={{
              fontVariationSettings: "'opsz' 14",
            }}
          >
            Rheii is invite-only.
            <br />
            Beta users will have first access and define the next wave of members.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
          {/* Error Message */}
          {error && (
            <div className="px-[16px] py-[12px] bg-red-50 border border-red-200 rounded-[4px]">
              <p className="font-body text-[14px] leading-[20px] text-red-600">{error}</p>
            </div>
          )}

          {/* First Name and Last Name */}
          <div className="flex gap-[24px]">
            <div className="flex-1 flex flex-col gap-[8px]">
              <label
                htmlFor="firstName"
                className="font-body font-semibold text-[16px] leading-[24px] text-rheti-neutral-600"
                style={{
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="h-[44px] px-[16px] py-[8px] border border-[#d9d9d9] rounded-[4px] font-body text-[16px] leading-[24px] text-rheti-neutral-600 focus:outline-none focus:border-rheti-primary-500"
                style={{
                  fontVariationSettings: "'opsz' 14",
                }}
              />
            </div>
            <div className="flex-1 flex flex-col gap-[8px]">
              <label
                htmlFor="lastName"
                className="font-body font-semibold text-[16px] leading-[24px] text-rheti-neutral-600"
                style={{
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="h-[44px] px-[16px] py-[8px] border border-[#d9d9d9] rounded-[4px] font-body text-[16px] leading-[24px] text-rheti-neutral-600 focus:outline-none focus:border-rheti-primary-500"
                style={{
                  fontVariationSettings: "'opsz' 14",
                }}
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-[8px]">
            <label
              htmlFor="email"
              className="font-body font-semibold text-[16px] leading-[24px] text-rheti-neutral-600"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-[44px] px-[16px] py-[8px] border border-[#d9d9d9] rounded-[4px] font-body text-[16px] leading-[24px] text-rheti-neutral-600 focus:outline-none focus:border-rheti-primary-500"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            />
          </div>

          {/* Growth Journey Text Area */}
          <div className="flex flex-col gap-[8px]">
            <label
              htmlFor="growthJourney"
              className="font-body font-semibold text-[16px] leading-[24px] text-rheti-neutral-600"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            >
              What matters most to you on in your growth journey?
              <br />
              <span
                className="font-body font-normal text-[#5e5a57]"
                style={{
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                (e.g. self reflection, tracking progress, supportive network, etc.)
              </span>
            </label>
            <textarea
              id="growthJourney"
              value={formData.growthJourney}
              onChange={(e) => setFormData({ ...formData, growthJourney: e.target.value })}
              rows={4}
              className="px-[16px] py-[8px] border border-[#d9d9d9] rounded-[4px] font-body text-[16px] leading-[24px] text-rheti-neutral-600 focus:outline-none focus:border-rheti-primary-500 resize-none"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            />
          </div>

          {/* Referral Source Dropdown */}
          <div className="flex flex-col gap-[8px]">
            <label
              htmlFor="referralSource"
              className="font-body font-semibold text-[16px] leading-[24px] text-rheti-neutral-600"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            >
              Where did you hear about us?
            </label>
            <CustomDropdown
              id="referralSource"
              value={formData.referralSource}
              onChange={(value) => setFormData({ ...formData, referralSource: value })}
              options={referralOptions}
              placeholder="Select"
            />
          </div>

          {/* Others Text Input (conditional) */}
          {formData.referralSource === 'others' && (
            <div className="flex flex-col gap-[8px]">
              <label
                htmlFor="referralSourceOther"
                className="font-body font-semibold text-[16px] leading-[24px] text-rheti-neutral-600"
                style={{
                  fontVariationSettings: "'opsz' 14",
                }}
              >
                Please specify
              </label>
              <input
                id="referralSourceOther"
                type="text"
                value={formData.referralSourceOther}
                onChange={(e) => setFormData({ ...formData, referralSourceOther: e.target.value })}
                placeholder="Where did you hear about us?"
                className="h-[44px] px-[16px] py-[8px] border border-[#d9d9d9] rounded-[4px] font-body text-[16px] leading-[24px] text-rheti-neutral-600 focus:outline-none focus:border-rheti-primary-500"
                style={{
                  fontVariationSettings: "'opsz' 14",
                }}
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-[24px] mt-[8px]">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 h-[48px] px-[24px] py-[12px] border border-rheti-primary-500 rounded-[100px] font-body font-semibold text-[16px] leading-[24px] text-rheti-primary-500 hover:bg-rheti-primary-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 h-[48px] px-[24px] py-[12px] bg-rheti-primary-500 rounded-[100px] font-body font-semibold text-[16px] leading-[24px] text-white hover:bg-rheti-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontVariationSettings: "'opsz' 14",
              }}
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
