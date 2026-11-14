export default function ShopSection() {
  return (
    <section id="shop" className="bg-[#FEFEFE] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-playfair text-[1.7rem] text-[#3D2B1F] leading-[1.25] mb-2">
          The Farm Shop
        </h2>
        <div className="flex items-center justify-center gap-1 mb-6 text-[#8B7355]/40">
          <span className="text-[10px] tracking-[0.3em]">‹‹‹‹</span>
        </div>
        <p className="font-lora text-[#3D2B1F]/70 text-[14px] leading-relaxed max-w-xl mx-auto mb-10">
          Our farm shop opens in 2027. Products and ordering will be available here soon.
        </p>
        {/* Products will be added here */}
      </div>
    </section>
  );
}
