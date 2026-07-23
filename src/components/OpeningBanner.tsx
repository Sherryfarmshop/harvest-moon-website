export default function OpeningBanner() {
  return (
    <section className="w-full bg-[#F0EBE3] py-6 border-y border-warm-brown/10">
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-center gap-8">
        {/* Left decorative branch */}
        <span className="hidden sm:block text-warm-brown/30 text-xl">🌿</span>

        <div className="text-center">
          <h2 className="font-playfair text-xl sm:text-2xl text-dark-text leading-snug mb-1">
            Harvest Moon Farm Shop<br />opens in 2027
          </h2>
          <div className="flex items-center justify-center gap-2 my-2">
            <div className="w-8 h-px bg-warm-brown/30" />
            <span className="text-warm-brown/40 text-xs tracking-widest">&laquo;&laquo;&laquo;</span>
            <div className="w-8 h-px bg-warm-brown/30" />
          </div>
          <p className="font-lora text-sm text-warm-brown leading-relaxed">
            with handcrafted goods, seasonal foods,<br />and locally raised products.
          </p>
        </div>

        {/* Right decorative branch */}
        <span className="hidden sm:block text-warm-brown/30 text-xl">🌾</span>
      </div>
    </section>
  );
}
