'use client';

import { useState } from 'react';

export default function Banner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-cream border-b border-warm-brown/20 text-dark-text text-sm py-2 px-4 relative text-center font-lora">
      <span>
        We occasionally close for private farm stays —{' '}
        <a href="#visit" className="underline hover:text-barn-red transition-colors">
          check our calendar
        </a>{' '}
        before visiting.
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-brown hover:text-dark-text transition-colors text-lg leading-none"
        aria-label="Dismiss banner"
      >
        ×
      </button>
    </div>
  );
}
