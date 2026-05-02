/**
 * Custom Dropdown Component
 *
 * Custom dropdown with radio button options matching Figma design
 * - White dropdown box with options
 * - Radio button selection
 * - Click outside to close
 *
 * Design: Extracted from Figma (node-id: 563-4946)
 * Colors: White background, #c6c2be border, radio buttons
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  id?: string;
}

export default function CustomDropdown({
  value,
  onChange,
  options,
  placeholder = 'Select',
  id,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* Dropdown Button */}
      <button
        type="button"
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[44px] px-[16px] py-[8px] border border-[#c6c2be] rounded-[4px] bg-white flex items-center justify-between focus:outline-none focus:border-rheti-primary-500 transition-colors"
      >
        <span
          className={`font-body text-[15px] sm:text-[16px] leading-[24px] ${
            value ? 'text-rheti-neutral-600' : 'text-[#9e9c9a]'
          }`}
          style={{
            fontVariationSettings: "'opsz' 14",
          }}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        {isOpen ? (
          <ChevronUp size={16} className="text-[#8c8c8c]" />
        ) : (
          <ChevronDown size={16} className="text-[#8c8c8c]" />
        )}
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-[8px] bg-white border border-[#d9d9d9] rounded-[4px] shadow-[0px_4px_16px_0px_rgba(165,165,165,0.16)] overflow-hidden">
          <div className="py-[8px]">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="w-full h-[44px] px-[16px] flex items-center gap-[8px] hover:bg-[#fafafa] transition-colors"
              >
                {/* Radio Button */}
                <div className="flex items-center justify-center w-[20px] h-[20px]">
                  <div
                    className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center ${
                      value === option.value ? 'border-rheti-primary-500' : 'border-[#d9d9d9]'
                    }`}
                  >
                    {value === option.value && (
                      <div className="w-[10px] h-[10px] rounded-full bg-rheti-primary-500" />
                    )}
                  </div>
                </div>

                {/* Option Label */}
                <span
                  className="font-body text-[15px] sm:text-[16px] leading-[24px] text-[#262626]"
                  style={{
                    fontVariationSettings: "'opsz' 14",
                  }}
                >
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
