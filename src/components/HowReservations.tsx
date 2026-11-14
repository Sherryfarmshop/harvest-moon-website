import Image from 'next/image';

export default function HowReservations() {
  return (
    <section id="reserve" className="bg-[#FEFEFE] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT - Chicken Photo */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-lg">
            <Image
              src="/images/farm-table-chicken.jpg"
              alt="Pasture-raised chickens at Harvest Moon Farm Shop near Charlevoix Michigan"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT - How Reservations Work */}
          <div>
            <h2 className="font-playfair text-[1.7rem] text-[#3D2B1F] leading-[1.25] mb-2">
              How Reservations Work
            </h2>
            <div className="flex items-center gap-1 mb-6 text-[#8B7355]/40">
              <span className="text-[10px] tracking-[0.3em]">‹‹‹‹</span>
            </div>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-[#4A5D3A] text-[#4A5D3A] flex items-center justify-center font-source font-bold text-base">1</div>
                <p className="font-lora text-[18px] md:text-[20px] text-[#333333] leading-[1.6]">
                  Reserve your birds online with a $25 deposit per bird.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-[#4A5D3A] text-[#4A5D3A] flex items-center justify-center font-source font-bold text-base">2</div>
                <p className="font-lora text-[18px] md:text-[20px] text-[#333333] leading-[1.6]">
                  We&apos;ll send updates as our birds grow on pasture.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-[#4A5D3A] text-[#4A5D3A] flex items-center justify-center font-source font-bold text-base">3</div>
                <p className="font-lora text-[18px] md:text-[20px] text-[#333333] leading-[1.6]">
                  We&apos;ll contact you before pickup to confirm details.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 rounded-full border-2 border-[#4A5D3A] text-[#4A5D3A] flex items-center justify-center font-source font-bold text-base">4</div>
                <p className="font-lora text-[18px] md:text-[20px] text-[#333333] leading-[1.6]">
                  Pick up your chickens at our farm or local pickup location and pay the remaining balance.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <a href="#reserve-form" className="inline-block bg-[#4A5D3A] hover:bg-[#3E4F31] text-[#F5F0E8] px-6 py-3 font-source font-semibold text-[11px] uppercase tracking-[0.2em] transition-colors rounded-sm">
                Reserve My Chickens
              </a>
              <p className="font-lora text-[18px] font-bold text-[#8B7355] mt-3">$25 deposit per bird</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

