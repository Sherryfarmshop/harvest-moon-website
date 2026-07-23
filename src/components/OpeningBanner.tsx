export default function OpeningBanner() {
  return (
    <section className="w-full bg-[#F5F0E8] py-8 border-y border-[#C9B896]/30" style={{ fontSize: 'initial', lineHeight: 'initial' }}>
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] items-center gap-6">

        {/* Left - Barn illustration */}
        <div className="hidden sm:flex justify-center">
          <svg width="60" height="50" viewBox="0 0 60 50" fill="none" className="text-[#8B7355]/40">
            <path d="M30 2L5 20V48H55V20L30 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <rect x="22" y="30" width="16" height="18" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <line x1="30" y1="30" x2="30" y2="48" stroke="currentColor" strokeWidth="1"/>
            <path d="M15 20L30 8L45 20" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="30" cy="16" r="3" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        {/* Center - Text */}
        <div className="text-center">
          <h2 className="font-playfair text-lg sm:text-xl text-[#3D2B1F] leading-snug mb-3">
            Harvest Moon Farm Shop opens in 2027
          </h2>
          <p className="font-lora text-sm text-[#8B7355] leading-relaxed">
            with handcrafted goods,<br />
            seasonal foods,<br />
            and locally raised products.
          </p>
        </div>

        {/* Right - Olive branch */}
        <div className="hidden sm:flex justify-center">
          <svg width="50" height="60" viewBox="0 0 50 60" fill="none" className="text-[#8B7355]/40">
            <path d="M25 5C25 5 20 15 22 25C24 35 20 45 25 55" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <ellipse cx="18" cy="18" rx="6" ry="3" transform="rotate(-30 18 18)" stroke="currentColor" strokeWidth="1" fill="none"/>
            <ellipse cx="32" cy="25" rx="6" ry="3" transform="rotate(30 32 25)" stroke="currentColor" strokeWidth="1" fill="none"/>
            <ellipse cx="17" cy="35" rx="6" ry="3" transform="rotate(-20 17 35)" stroke="currentColor" strokeWidth="1" fill="none"/>
            <ellipse cx="33" cy="42" rx="6" ry="3" transform="rotate(25 33 42)" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>

      </div>
    </section>
  );
}
