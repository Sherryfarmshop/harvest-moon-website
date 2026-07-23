import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section className="bg-[#F7F3ED] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14 items-start">

          {/* LEFT COLUMN - Welcome Text */}
          <div className="pt-2">
            <h2 className="font-playfair text-[1.7rem] text-[#3D2B1F] leading-[1.25] mb-2">
              Welcome to<br />Harvest Moon Farm Shop
            </h2>
            <div className="flex items-center gap-1 mb-5 text-[#8B7355]/40">
              <span className="text-[10px] tracking-[0.3em]">‹‹‹‹</span>
            </div>
            <div className="space-y-4 font-lora text-[#3D2B1F]/70 text-[13.5px] leading-[1.85]">
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
            </div>
            <p className="font-playfair italic text-[#3D2B1F]/50 text-[15px] mt-6">
              We look forward to welcoming you to the farm.
            </p>
          </div>

          {/* CENTER COLUMN - Roasted Chicken Photo */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/farm-table-chicken.jpg"
              alt="Roasted pasture-raised chicken with vegetables on a rustic farm table"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT COLUMN - How Reservations Work */}
          <div className="pt-2">
            <h2 className="font-playfair text-[1.7rem] text-[#3D2B1F] leading-[1.25] mb-8">
              How Reservations Work
            </h2>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#4A5D3A] text-[#4A5D3A] flex items-center justify-center font-source font-semibold text-sm">1</div>
                <p className="font-lora text-[13.5px] text-[#3D2B1F]/70 leading-[1.7]">
                  Reserve your birds online with a $25 deposit per bird.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#4A5D3A] text-[#4A5D3A] flex items-center justify-center font-source font-semibold text-sm">2</div>
                <p className="font-lora text-[13.5px] text-[#3D2B1F]/70 leading-[1.7]">
                  We&apos;ll send updates as our birds grow on pasture.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#4A5D3A] text-[#4A5D3A] flex items-center justify-center font-source font-semibold text-sm">3</div>
                <p className="font-lora text-[13.5px] text-[#3D2B1F]/70 leading-[1.7]">
                  We&apos;ll contact you before pickup to confirm details.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#4A5D3A] text-[#4A5D3A] flex items-center justify-center font-source font-semibold text-sm">4</div>
                <p className="font-lora text-[13.5px] text-[#3D2B1F]/70 leading-[1.7]">
                  Pick up your chickens at our farm or local pickup location and pay the remaining balance.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <a href="#reserve" className="inline-block border-2 border-[#3D2B1F] text-[#3D2B1F] px-6 py-3 font-source font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-[#3D2B1F] hover:text-white transition-colors">
                Reserve My Chickens
              </a>
              <p className="font-lora text-[13px] text-[#8B7355] mt-3">$25 deposit per bird</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
