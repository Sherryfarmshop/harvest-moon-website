import Image from 'next/image';

export default function Intro() {
  return (
    <section className="bg-soft-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/website-intro.jpg"
              alt="Tractor at golden hour on the farm"
              fill
              className="object-cover"
            />
          </div>

          {/* Copy */}
          <div>
            <h2 className="font-playfair text-3xl sm:text-4xl text-dark-text mb-6 leading-snug">
              Welcome to the Farm
            </h2>
            <div className="space-y-4 font-lora text-dark-text/85 text-lg leading-relaxed">
              <p>
                Welcome to Harvest Moon Farm Shop, a cozy Northern Michigan farm
                market where the pace is slower, the air feels different, and
                everything is chosen with intention.
              </p>
              <p>
                Tucked into the countryside of Northern Michigan, our farm shop is
                more than a place to shop—it&apos;s a place to experience. Whether
                you&apos;re stopping by our farm stand on a summer weekend, picking
                up farm fresh eggs and seasonal local produce for the grill, enjoying
                a scoop of ice cream on a warm afternoon, or gathering a thoughtfully
                curated farm box for your stay, we&apos;ve created a space that feels
                simple, warm, and real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
