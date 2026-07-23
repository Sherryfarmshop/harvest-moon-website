import Image from 'next/image';

const features = [
  {
    icon: '🌿',
    title: 'Pasture Raised',
    desc: 'Our birds live on open pasture with room to roam, scratch, and forage naturally.',
  },
  {
    icon: '🌾',
    title: 'All Natural Feed',
    desc: 'No antibiotics, no hormones, no shortcuts. Just quality feed and fresh grass.',
  },
  {
    icon: '🔄',
    title: 'Moved Daily',
    desc: 'Our mobile coops move to fresh ground every day for healthier birds and healthier land.',
  },
  {
    icon: '🤲',
    title: 'Raised with Care',
    desc: 'Small batch, hands-on. Every bird is looked after from day one.',
  },
];

export default function ChickenReserve() {
  return (
    <section id="reserve" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">

        {/* Intro */}
        <div className="text-center mb-16">
          <p className="font-source text-sm uppercase tracking-[0.3em] text-warm-brown mb-3">
            Now Accepting Reservations
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-dark-text mb-6">
            Why Our Chickens Are Different
          </h2>
          <p className="font-lora text-lg text-warm-brown max-w-2xl mx-auto leading-relaxed">
            We raise our birds the old-fashioned way — on pasture, in the sun, with space to be chickens. 
            No factory farms. No confinement. Just good food raised on good land.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-playfair text-lg text-dark-text font-semibold mb-2">{f.title}</h3>
              <p className="font-lora text-sm text-warm-brown leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-forest-green rounded-lg p-10 md:p-14 text-center">
          <h3 className="font-playfair text-2xl sm:text-3xl text-cream mb-4">
            Reserve Your Birds for 2027
          </h3>
          <p className="font-lora text-cream/80 text-base mb-3 max-w-xl mx-auto leading-relaxed">
            We raise a limited number of birds each season. Reservations fill up fast — 
            secure your spot now with a $25 deposit per bird.
          </p>
          <p className="font-lora text-cream/60 text-sm mb-8">
            Pickup available at the farm in Charlevoix. We&apos;ll be in touch with details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7347160475"
              className="inline-block bg-barn-red hover:bg-barn-red/90 text-cream px-8 py-4 rounded font-source font-semibold text-base uppercase tracking-wider transition-colors shadow-lg"
            >
              Call to Reserve
            </a>
            <a
              href="mailto:hello@harvestmoonfarmshop.com?subject=Chicken%20Reservation%20for%202027"
              className="inline-block border-2 border-cream/40 text-cream hover:bg-cream/10 px-8 py-4 rounded font-source font-semibold text-base uppercase tracking-wider transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
