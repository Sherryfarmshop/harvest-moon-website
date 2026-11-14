export default function WelcomeSection() {
  return (
    <section id="farm" className="bg-[#F7F3ED] py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-playfair text-[1.7rem] text-[#3D2B1F] leading-[1.25] mb-2">
          Welcome to<br />Harvest Moon Farm Shop
        </h2>
        <div className="flex items-center justify-center gap-1 mb-6 text-[#8B7355]/40">
          <span className="text-[10px] tracking-[0.3em]">‹‹‹‹</span>
        </div>
        <div className="space-y-4 font-lora text-[#3D2B1F]/70 text-[14px] leading-[1.85] text-left">
          <p>
            Harvest Moon Farm Shop is a small family farm in Northern Michigan, just south of Charlevoix.
          </p>
          <p>
            When our farm shop opens in 2027, you can reserve our pasture-raised chickens along with other farm-fresh goods, seasonal foods, and more.
          </p>
          <p>
            Our chickens are raised on fresh pasture, moved daily, and grown the way nature intended—with exceptional flavor and quality.
          </p>
          <p>
            As our farm grows, you&apos;ll also find handcrafted goods, seasonal produce, fresh eggs, and carefully curated products that celebrate simple country living.
          </p>
        </div>
        <p className="font-playfair italic text-[#3D2B1F]/55 text-[15px] mt-6">
          We look forward to welcoming you to the farm.
        </p>
      </div>
    </section>
  );
}
