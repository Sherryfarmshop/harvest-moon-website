import Image from 'next/image';

export default function OpeningBanner() {
  return (
    <section className="w-full m-0 p-0" style={{ fontSize: 0, lineHeight: 0 }}>
      <Image
        src="/images/opening-banner.jpg"
        alt="Harvest Moon Farm Shop opens in 2027 with handcrafted goods, seasonal foods, and locally raised products."
        width={1920}
        height={300}
        className="w-full h-auto block m-0 p-0"
      />
    </section>
  );
}
