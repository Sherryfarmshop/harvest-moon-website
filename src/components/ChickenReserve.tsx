const features = [
  {
    title: 'Pasture Raised',
    desc: 'Our chickens enjoy fresh pasture, sunlight, and plenty of space to roam.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 38C20 38 8 28 8 18C8 12 12 6 20 4C28 6 32 12 32 18C32 28 20 38 20 38Z"/>
        <path d="M14 20C14 20 17 24 20 24C23 24 26 20 26 20"/>
        <line x1="20" y1="24" x2="20" y2="34"/>
      </svg>
    ),
  },
  {
    title: 'All Natural Feed',
    desc: 'We feed a simple, non-GMO diet with no hormones or unnecessary additives.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 36V12"/>
        <path d="M12 20C12 14 16 10 20 8"/>
        <path d="M28 20C28 14 24 10 20 8"/>
        <ellipse cx="12" cy="22" rx="4" ry="6" transform="rotate(-15 12 22)"/>
        <ellipse cx="28" cy="22" rx="4" ry="6" transform="rotate(15 28 22)"/>
      </svg>
    ),
  },
  {
    title: 'Moved Daily',
    desc: 'Frequent moves keep our flock healthy, happy, and thriving on fresh ground.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="20" cy="14" r="6"/>
        <path d="M14 14L8 20"/>
        <path d="M26 14L32 20"/>
        <path d="M20 20V32"/>
        <path d="M14 28L20 32L26 28"/>
      </svg>
    ),
  },
  {
    title: 'Raised with Care',
    desc: 'We treat every bird with respect — because it makes a difference.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 34C20 34 6 24 6 16C6 10 10 6 16 6C18 6 19.5 7 20 8C20.5 7 22 6 24 6C30 6 34 10 34 16C34 24 20 34 20 34Z"/>
      </svg>
    ),
  },
];

export default function ChickenReserve() {
  return (
    <section id="reserve" className="py-20 md:py-24 bg-[#FEFEFE] border-t border-[#C9B896]/20">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="font-source text-xs uppercase tracking-[0.3em] text-[#8B7355] mb-4">
            Raised with Care
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl text-[#3D2B1F]">
            Why Our Chickens Are Different
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="flex justify-center mb-4 text-[#8B7355]">{f.icon}</div>
              <h3 className="font-playfair text-base text-[#3D2B1F] font-semibold mb-2">{f.title}</h3>
              <p className="font-lora text-sm text-[#8B7355] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
