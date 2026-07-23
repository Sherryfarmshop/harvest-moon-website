export default function OpeningBanner() {
  return (
    <section className="bg-cream py-8 border-y border-warm-brown/15">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-center gap-6">
        {/* Left decorative illustration - trees */}
        <span className="hidden sm:block text-warm-brown/40 text-2xl">🌲🏠🌲</span>

        <p className="font-playfair text-base sm:text-lg text-dark-text leading-relaxed text-center">
          Harvest Moon Farm Shop opens in 2027<br className="hidden sm:block" />
          with handcrafted goods, seasonal foods,<br className="hidden sm:block" />
          and locally raised products.
        </p>

        {/* Right decorative illustration - wheat */}
        <span className="hidden sm:block text-warm-brown/40 text-2xl">🌾</span>
      </div>
    </section>
  );
}
