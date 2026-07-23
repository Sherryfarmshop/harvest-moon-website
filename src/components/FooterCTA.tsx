export default function FooterCTA() {
  return (
    <section id="contact" className="bg-[#3D2B1F] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Left - Logo + Reserve */}
          <div>
            <div className="mb-4">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-[#F0EBE1]/40 inline-block">
                <path d="M25 5L5 20V45H45V20L25 5Z" stroke="currentColor" strokeWidth="1"/>
                <rect x="18" y="28" width="14" height="17" stroke="currentColor" strokeWidth="1"/>
                <line x1="25" y1="28" x2="25" y2="45" stroke="currentColor" strokeWidth="0.75"/>
                <circle cx="25" cy="15" r="4" stroke="currentColor" strokeWidth="0.75"/>
              </svg>
            </div>
            <h3 className="font-playfair text-xl text-[#F0EBE1] mb-3">Reserve Your 2027 Birds</h3>
            <p className="font-lora text-[13px] text-[#F0EBE1]/50 leading-relaxed mb-1">
              Spots are limited and fill up fast!
            </p>
            <p className="font-lora text-[13px] text-[#F0EBE1]/50 leading-relaxed mb-5">
              Reserve today with a $25 deposit per bird.
            </p>
            <a href="#reserve" className="inline-block bg-[#4A5D3A] text-white px-5 py-2.5 font-source font-semibold text-[11px] uppercase tracking-[0.15em] hover:bg-[#3E4F31] transition-colors">
              Reserve My Chickens
            </a>
          </div>

          {/* Center - Contact */}
          <div>
            <h3 className="font-playfair text-xl text-[#F0EBE1] mb-3">Have Questions?</h3>
            <p className="font-lora text-[13px] text-[#F0EBE1]/50 leading-relaxed mb-1">
              We&apos;re happy to help!
            </p>
            <p className="font-lora text-[13px] text-[#F0EBE1]/50 leading-relaxed mb-5">
              Reach out anytime.
            </p>
            <p className="font-lora text-[13px] text-[#F0EBE1]/50 flex items-center gap-2 justify-center md:justify-start">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#F0EBE1]/50">
                <rect x="1" y="3" width="14" height="10" rx="1"/>
                <path d="M1 3L8 9L15 3"/>
              </svg>
              <a href="mailto:hello@harvestmoonfarmshop.com" className="hover:text-[#D4A017] transition-colors">
                hello@harvestmoonfarmshop.com
              </a>
            </p>
          </div>

          {/* Right - Follow */}
          <div>
            <h3 className="font-playfair text-xl text-[#F0EBE1] mb-3">Follow Along</h3>
            <p className="font-lora text-[13px] text-[#F0EBE1]/50 leading-relaxed mb-1">
              See life on the farm, updates,
            </p>
            <p className="font-lora text-[13px] text-[#F0EBE1]/50 leading-relaxed mb-5">
              and what we&apos;re growing.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="text-[#F0EBE1]/50 hover:text-[#F0EBE1] transition-colors" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="text-[#F0EBE1]/50 hover:text-[#F0EBE1] transition-colors" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
