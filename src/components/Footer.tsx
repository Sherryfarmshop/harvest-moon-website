export default function Footer() {
  return (
    <footer id="contact">
      {/* Dark walnut CTA section */}
      <div className="bg-[#3D2B1F] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

            {/* Reserve */}
            <div>
              <h3 className="font-playfair text-xl text-[#F5F0E8] mb-4">Reserve Your 2027 Birds</h3>
              <p className="font-lora text-sm text-[#F5F0E8]/60 leading-relaxed mb-6">
                Spots are limited and fill up fast!<br />
                Reserve today with a $25 deposit per bird.
              </p>
              <a
                href="#reserve"
                className="inline-block border-2 border-[#4A5D3A] bg-[#4A5D3A] hover:bg-[#3E4F31] text-white px-6 py-3 font-source font-semibold text-xs uppercase tracking-[0.15em] transition-colors rounded-sm"
              >
                Reserve My Chickens
              </a>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-playfair text-xl text-[#F5F0E8] mb-4">Have Questions?</h3>
              <p className="font-lora text-sm text-[#F5F0E8]/60 leading-relaxed mb-6">
                We&apos;re happy to help!<br />
                Reach out anytime.
              </p>
              <p className="font-lora text-sm text-[#F5F0E8]/60 flex items-center gap-2 justify-center md:justify-start">
                <span>✉</span>
                <a href="mailto:hello@harvestmoonfarmshop.com" className="hover:text-[#D4A017] transition-colors">
                  hello@harvestmoonfarmshop.com
                </a>
              </p>
            </div>

            {/* Follow */}
            <div>
              <h3 className="font-playfair text-xl text-[#F5F0E8] mb-4">Follow Along</h3>
              <p className="font-lora text-sm text-[#F5F0E8]/60 leading-relaxed mb-6">
                See life on the farm, updates,<br />
                and what we&apos;re growing.
              </p>
              <div className="flex gap-5 justify-center md:justify-start">
                <a href="#" className="text-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-colors text-2xl font-bold" aria-label="Facebook">f</a>
                <a href="#" className="text-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-colors text-2xl" aria-label="Instagram">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Cream bottom bar */}
      <div className="bg-[#F5F0E8] py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#8B7355] font-source">
            &copy; 2025 Harvest Moon Farm Shop
          </p>
          <div className="flex gap-8 text-xs text-[#8B7355] font-source uppercase tracking-[0.1em]">
            <a href="#home" className="hover:text-[#3D2B1F] transition-colors">Our Farm</a>
            <a href="#offerings" className="hover:text-[#3D2B1F] transition-colors">Shop (Opening 2027)</a>
            <a href="#visit" className="hover:text-[#3D2B1F] transition-colors">Farm Stand</a>
            <a href="#contact" className="hover:text-[#3D2B1F] transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
