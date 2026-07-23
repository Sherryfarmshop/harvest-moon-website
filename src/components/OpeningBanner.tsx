import Image from 'next/image';

export default function OpeningBanner() {
  return (
    <section className="w-full bg-cream flex justify-center py-0">
      <Image
        src="/images/opening-banner.jpg"
        alt="Harvest Moon Farm Shop opens in 2027 with handcrafted goods, seasonal foods, and locally raised products."
        width={900}
        height={200}
        className="w-full max-w-3xl h-auto"
      />
    </section>
  );
}
