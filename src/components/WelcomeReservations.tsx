import Image from 'next/image';

export default function WelcomeReservations() {
  return (
    <section className="bg-[#FEFEFE] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 items-start">

          {/* LEFT - Welcome Text */}
          <div>
            <h2 className="font-playfair text-3xl text-[#3D2B1F] mb-2 leading-snug">
              Welcome to<br />Harvest Moon Farm Shop
            </h2>
            {/* Decorative divider */}
            <div className="flex items-center gap-1 mb-6 text-[#8B7355]/40">
              <span className="text-xs tracking-widest">&laquo;&laquo;&laquo;&laquo;</span>
            </div>
            <div className="space-y-5 font-lora text-[#3D2B1F]/75 text-[15px] leading-[1.8]">
              <p>
                Harvest Moon Farm Shop is a small family farm in Northern Michigan, just south of Charlevoix.
              </p>
              <p>
                When our farm shop opens in 2027, you can find our reserve our pasture-raised chickens along with other farm-fresh goods, seasonal foods, and more.
              </p>
              <p>
                Our chickens are raised on fresh pasture, moved daily, and grown the way nature intended—with exceptional flavor and quality.
              </p>
              <p>
                As our farm grows, you&apos;ll also find handcrafted goods, seasonal produce, fresh eggs, and carefully curated products that celebrate simple country living.
              </p>
              <p className="font-playfair italic text-[#3D2B1F]/55 text-base pt-2">
                We look forward to welcoming you to the farm.
              </p>
            </div>
          </div>

          {/* CENTER - Farm Table Chicken Photo */}
          <div className="relative aspect-[3/4] rounded overflow-hidden shadow-lg">
            <Image
              src="/images/farm-table-chicken.jpg"
              alt="Roasted pasture-raised chicken with vegetables on a rustic farm table"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT - How Reservations Work */}
          <div>
            <h2 className="font-playfair text-3xl text-[#3D2B1F] mb-8 leading-snug">
              How Reservations Work
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#4A5D3A] text-[#4A5D3A] flex items-center justify-center font-source font-bold text-sm">1</div>
                <p className="font-lora text-[15px] text-[#3D2B1F]/75 leading-relaxed">
                  Reserve your birds online with a $25 deposit per bird.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#4A5D3A] text-[#4A5D3A] flex items-center justify-center font-source font-bold text-sm">2</div>
                <p className="font-lora text-[15px] text-[#3D2B1F]/75 leading-relaxed">
                  We&apos;ll send updates as our birds grow on pasture.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#4A5D3A] text-[#4A5D3A] flex items-center justify-center font-source font-bold text-sm">3</div>
                <p className="font-lora text-[15px] text-[#3D2B1F]/75 leading-relaxed">
                  We&apos;ll contact you before pickup to confirm details.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#4A5D3A] text-[#4A5D3A] flex items-center justify-center font-source font-bold text-sm">4</div>
                <p className="font-lora text-[15px] text-[#3D2B1F]/75 leading-relaxed">
                  Pick up your chickens at our farm or local pickup location and pay the remaining balance.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#reserve"
                className="inline-block border-2 border-[#3D2B1F] text-[#3D2B1F] hover:bg-[#3D2B1F] hover:text-white px-7 py-3 font-source font-semibold text-xs uppercase tracking-[0.15em] transition-colors"
              >
                Reserve My Chickens
              </a>
              <p className="font-lora text-sm text-[#8B7355] mt-3">$25 deposit per bird</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
