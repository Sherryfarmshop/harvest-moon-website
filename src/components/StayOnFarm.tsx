import Image from 'next/image';

export default function StayOnFarm() {
  return (
    <section id="stay" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/website-stay-on-farm.jpg"
              alt="Cozy glamping camper on hilltop with Adirondack chairs and sunset view"
              fill
              className="object-cover"
            />
          </div>

          {/* Copy */}
          <div>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-dark-text mb-6 leading-snug">
              Stay on the Farm
            </h2>
            <div className="space-y-4 font-lora text-dark-text/85 text-lg leading-relaxed mb-8">
              <p>
                Enjoy a peaceful stay in the countryside of Northern Michigan,
                close to Charlevoix and just a short drive from some of the
                area&apos;s beautiful beaches. Set on the farm with open views,
                fresh air, and a slower pace, it&apos;s a simple place to unwind
                and settle into the quiet.
              </p>
              <p>
                Whether you&apos;re here for a summer getaway, a weekend escape,
                or a different kind of Up North stay, our farm offers a cozy
                retreat close to town, the shoreline, and the beauty of Northern
                Michigan.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.vrbo.com/5195624"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-barn-red text-soft-white font-source font-semibold px-8 py-3 rounded-md hover:bg-barn-red/90 transition-colors tracking-wide text-sm uppercase"
              >
                Book on VRBO
              </a>
              <a
                href="tel:7347160475"
                className="inline-block border-2 border-forest-green text-forest-green font-source font-semibold px-8 py-3 rounded-md hover:bg-forest-green hover:text-soft-white transition-colors tracking-wide text-sm uppercase"
              >
                Call to Book: 734-716-0475
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
