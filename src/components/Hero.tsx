import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative w-full leading-[0]">
      <Image
        src="/images/chicken-hero.jpg"
        alt="Harvest Moon Farm Shop — Pasture-Raised Chickens — Reservations Now Open for 2027"
        width={1920}
        height={720}
        className="w-full h-auto block"
        priority
      />
    </section>
  );
}
