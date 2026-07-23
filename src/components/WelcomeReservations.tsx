import Image from 'next/image';

export default function WelcomeReservations() {
  return (
    <section className="bg-soft-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14 items-start">

          {/* Left - Welcome Text */}
          <div>
            <h2 className="font-playfair text-2xl sm:text-3xl text-dark-text mb-5 leading-snug">
              Welcome to<br />Harvest Moon<br />Farm Shop
            </h2>
            <div className="space-y-4 font-lora text-dark-text/80 text-sm leading-relaxed">
              <p>
                Harvest Moon Farm Shop is a small family farm in Northern Michigan, just south of Charlevoix.
              </p>
              <p>
                While our farm shop opens in 2027, you can already reserve our pasture-raised chickens for next season.
              </p>
              <p>
                Our chickens are raised on fresh pasture, moved regularly, and grown the way nature intended — for exceptional flavor and quality.
              </p>
              <p>
                As our farm grows, you&apos;ll also find handcrafted goods, seasonal produce, fresh eggs, and thoughtfully curated products that celebrate simple country living.
              </p>
              <p className="font-playfair italic text-dark-text/70">
                We look forward to welcoming you to the farm.
              </p>
            </div>
          </div>

          {/* Center - Egg Basket Photo */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/egg-basket.jpg"
              alt="Fresh farm eggs in a wire basket"
              fill
              className="object-cover"
            />
          </div>

          {/* Right - How Reservations Work */}
          <div>
            <h2 className="font-playfair text-2xl sm:text-3xl text-dark-text mb-6 leading-snug">
              How Reservations Work
            </h2>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-green text-cream flex items-center justify-center font-source font-bold text-sm">1</div>
                <p className="font-lora text-sm text-dark-text/80 leading-relaxed">
                  Reserve your birds online with a $25 deposit per bird.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-green text-cream flex items-center justify-center font-source font-bold text-sm">2</div>
                <p className="font-lora text-sm text-dark-text/80 leading-relaxed">
                  We&apos;ll send updates as our birds grow on pasture.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-green text-cream flex items-center justify-center font-source font-bold text-sm">3</div>
                <p className="font-lora text-sm text-dark-text/80 leading-relaxed">
                  We&apos;ll contact you before pickup to confirm details.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-forest-green text-cream flex items-center justify-center font-source font-bold text-sm">4</div>
                <p className="font-lora text-sm text-dark-text/80 leading-relaxed">
                  Pick up your chickens at our farm or local pickup location and pay the remaining balance.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#reserve"
                className="inline-block border-2 border-forest-green text-forest-green hover:bg-forest-green hover:text-cream px-6 py-3 font-source font-semibold text-sm uppercase tracking-wider transition-all duration-300"
              >
                Reserve My Chickens
              </a>
              <p className="font-lora text-xs text-warm-brown mt-3">$25 deposit per bird</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
