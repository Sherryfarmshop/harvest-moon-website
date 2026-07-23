import Image from 'next/image';

export default function OpeningBanner() {
  return (
    <section className="w-full">
      <Image
        src="/images/opening-banner.jpg"
        alt="Harvest Moon Farm Shop opens in 2027 with handcrafted goods, seasonal foods, and locally raised products."
        width={1920}
        height={400}
        className="w-full h-auto"
      />
    </section>
  );
}
