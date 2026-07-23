const features = [
  {
    icon: '🌿',
    title: 'Pasture Raised',
    desc: 'Our chickens enjoy fresh pasture, sunlight, and plenty of space to roam.',
  },
  {
    icon: '🌾',
    title: 'All Natural Feed',
    desc: 'We feed a simple, non-GMO diet with no hormones or unnecessary additives.',
  },
  {
    icon: '🔄',
    title: 'Moved Daily',
    desc: 'Frequent moves keep our flock healthy, happy, and thriving on fresh ground.',
  },
  {
    icon: '🤍',
    title: 'Raised with Care',
    desc: 'We treat every bird with respect — because it makes a difference.',
  },
];

export default function ChickenReserve() {
  return (
    <section id="reserve" className="py-20 md:py-24 bg-[#F5F0E8]">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="font-source text-xs uppercase tracking-[0.3em] text-[#8B7355] mb-3">
            Raised Right
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl text-[#3D2B1F]">
            Why Our Chickens Are Different
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-playfair text-base text-[#3D2B1F] font-semibold mb-2">{f.title}</h3>
              <p className="font-lora text-sm text-[#8B7355] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
