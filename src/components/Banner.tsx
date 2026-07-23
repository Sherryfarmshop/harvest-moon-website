'use client';

import { useState } from 'react';

export default function Banner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-forest-green text-cream text-sm py-2.5 px-4 relative text-center font-lora tracking-wide">
      <span>
        🐔 Reservations Now Open for 2027 Pasture-Raised Chickens —{' '}
        <a href="#reserve" className="underline font-semibold hover:text-harvest-gold transition-colors">
          Reserve Yours Today
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream transition-colors text-lg leading-none"
        aria-label="Dismiss banner"
      >
        ×
      </button>
    </div>
  );
}
