export default function AnnouncementStrip() {
  return (
    <section className="bg-[#F0EBE1] py-10 border-y border-[#D6CCBC]/40">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-[1fr_2.5fr_1fr] items-center gap-6">

        {/* Left - Barn sketch */}
        <div className="hidden sm:flex justify-center">
          <svg width="100" height="70" viewBox="0 0 100 70" fill="none" className="text-[#8B7355]/50">
            <path d="M50 5L10 30V65H90V30L50 5Z" stroke="currentColor" strokeWidth="1"/>
            <rect x="38" y="40" width="24" height="25" stroke="currentColor" strokeWidth="1"/>
            <line x1="50" y1="40" x2="50" y2="65" stroke="currentColor" strokeWidth="0.75"/>
            <path d="M20 30L50 10L80 30" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="22" r="5" stroke="currentColor" strokeWidth="0.75"/>
            <path d="M5 32L15 35V50L5 48Z" stroke="currentColor" strokeWidth="0.75"/>
            <path d="M95 32L85 35V50L95 48Z" stroke="currentColor" strokeWidth="0.75"/>
            <path d="M0 60L10 55" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M100 60L90 55" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>

        {/* Center - Text */}
        <div className="text-center">
          <p className="font-playfair text-lg sm:text-xl text-[#3D2B1F] leading-relaxed">
            Harvest Moon Farm Shop opens in 2027<br />
            with handcrafted goods, seasonal foods,<br />
            and locally raised products.
          </p>
        </div>

        {/* Right - Wheat/botanical */}
        <div className="hidden sm:flex justify-center">
          <svg width="60" height="70" viewBox="0 0 60 70" fill="none" className="text-[#8B7355]/50">
            <path d="M30 10C30 10 25 20 27 30C29 40 25 50 30 65" stroke="currentColor" strokeWidth="1"/>
            <ellipse cx="22" cy="20" rx="8" ry="3.5" transform="rotate(-25 22 20)" stroke="currentColor" strokeWidth="0.75"/>
            <ellipse cx="38" cy="28" rx="8" ry="3.5" transform="rotate(25 38 28)" stroke="currentColor" strokeWidth="0.75"/>
            <ellipse cx="21" cy="38" rx="8" ry="3.5" transform="rotate(-20 21 38)" stroke="currentColor" strokeWidth="0.75"/>
            <ellipse cx="39" cy="46" rx="8" ry="3.5" transform="rotate(20 39 46)" stroke="currentColor" strokeWidth="0.75"/>
            <ellipse cx="23" cy="54" rx="7" ry="3" transform="rotate(-15 23 54)" stroke="currentColor" strokeWidth="0.75"/>
          </svg>
        </div>

      </div>
    </section>
  );
}
