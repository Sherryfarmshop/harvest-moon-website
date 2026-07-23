import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative w-full m-0 p-0" style={{ fontSize: 0, lineHeight: 0 }}>
      <Image
        src="/images/chicken-hero.jpg"
        alt="Harvest Moon Farm Shop — Pasture-Raised Chickens — Reservations Now Open for 2027"
        width={1920}
        height={720}
        className="w-full h-auto block m-0 p-0"
        priority
      />
    </section>
  );
}
