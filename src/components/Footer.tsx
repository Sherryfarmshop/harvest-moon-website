export default function Footer() {
  return (
    <footer id="contact" className="bg-dark-text text-cream/80">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Reserve */}
          <div>
            <h3 className="font-playfair text-lg text-cream mb-3">Reserve Your 2027 Birds</h3>
            <p className="font-lora text-sm text-cream/60 leading-relaxed mb-1">
              Spots are limited and fill up fast!
            </p>
            <p className="font-lora text-sm text-cream/60 leading-relaxed mb-5">
              Reserve today with a $25 deposit per bird.
            </p>
            <a
              href="#reserve"
              className="inline-block bg-forest-green hover:bg-forest-green/90 text-cream px-5 py-2.5 font-source font-semibold text-xs uppercase tracking-[0.15em] transition-colors"
            >
              Reserve My Chickens
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg text-cream mb-3">Have Questions?</h3>
            <p className="font-lora text-sm text-cream/60 leading-relaxed mb-1">
              We&apos;re happy to help!
            </p>
            <p className="font-lora text-sm text-cream/60 leading-relaxed mb-5">
              Reach out anytime.
            </p>
            <p className="font-lora text-sm text-cream/60">
              ✉ <a href="mailto:hello@harvestmoonfarmshop.com" className="hover:text-harvest-gold transition-colors underline">hello@harvestmoonfarmshop.com</a>
            </p>
          </div>

          {/* Follow */}
          <div>
            <h3 className="font-playfair text-lg text-cream mb-3">Follow Along</h3>
            <p className="font-lora text-sm text-cream/60 leading-relaxed mb-1">
              See life on the farm, updates,
            </p>
            <p className="font-lora text-sm text-cream/60 leading-relaxed mb-5">
              and what we&apos;re growing.
            </p>
            <div className="flex gap-4 justify-center md:justify-start text-2xl">
              <a href="#" className="text-cream/60 hover:text-cream transition-colors" aria-label="Facebook">f</a>
              <a href="#" className="text-cream/60 hover:text-cream transition-colors" aria-label="Instagram">📷</a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/40 font-source">
            &copy; 2025 Harvest Moon Farm Shop
          </p>
          <div className="flex gap-6 text-xs text-cream/40 font-source uppercase tracking-[0.1em]">
            <a href="#gallery" className="hover:text-cream transition-colors">Our Farm</a>
            <a href="#offerings" className="hover:text-cream transition-colors">Shop (Opening 2027)</a>
            <a href="#visit" className="hover:text-cream transition-colors">Farm Stand</a>
            <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
