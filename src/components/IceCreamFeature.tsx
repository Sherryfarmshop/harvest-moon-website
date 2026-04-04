import Image from 'next/image';

export default function IceCreamFeature() {
  return (
    <section id="ice-cream" className="relative min-h-[80vh] flex items-center">
      <Image
        src="/images/website-icecream-feature.jpg"
        alt="Friends enjoying soft serve ice cream in a golden field at sunset"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-20 md:py-28 text-center">
        <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl text-soft-white text-shadow mb-8">
          Ice Cream on the Farm
        </h2>
        <div className="space-y-5 font-lora text-cream/90 text-lg sm:text-xl leading-relaxed text-shadow-sm">
          <p>
            Simple, nostalgic treats made for warm Northern Michigan days. At
            Harvest Moon Farm Shop, our soft serve is meant to be enjoyed right
            here on the farm—slowly, with open views, fresh air, and a little
            extra time to stay awhile.
          </p>
          <p>
            We serve creamy soft serve ice cream with seasonal toppings and
            farm-inspired favorites, including blueberry preserves and other
            simple summer treats. Whether you&apos;re stopping in after picking up
            farm fresh eggs and produce, visiting for the weekend, or just looking
            for a peaceful place to enjoy ice cream in Northern Michigan, Harvest
            Moon is a sweet stop worth making.
          </p>
        </div>
      </div>
    </section>
  );
}
