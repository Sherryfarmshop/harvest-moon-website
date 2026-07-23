const features = [
  {
    title: 'Pasture Raised',
    desc: 'Our chickens enjoy fresh pasture, sunlight, and plenty of space to roam.',
    icon: (
      <svg width="36" height="44" viewBox="0 0 36 44" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M18 42C18 42 4 30 4 18C4 10 10 4 18 2C26 4 32 10 32 18C32 30 18 42 18 42Z"/>
        <line x1="18" y1="22" x2="18" y2="38"/>
        <path d="M12 26C12 22 15 18 18 16"/>
        <path d="M24 26C24 22 21 18 18 16"/>
      </svg>
    ),
  },
  {
    title: 'All Natural Feed',
    desc: 'We feed a simple, non-GMO diet with no hormones or unnecessary additives.',
    icon: (
      <svg width="36" height="44" viewBox="0 0 36 44" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M18 40V14"/>
        <ellipse cx="10" cy="18" rx="6" ry="3" transform="rotate(-30 10 18)"/>
        <ellipse cx="26" cy="18" rx="6" ry="3" transform="rotate(30 26 18)"/>
        <ellipse cx="10" cy="28" rx="5" ry="2.5" transform="rotate(-25 10 28)"/>
        <ellipse cx="26" cy="28" rx="5" ry="2.5" transform="rotate(25 26 28)"/>
        <circle cx="18" cy="8" r="4"/>
      </svg>
    ),
  },
  {
    title: 'Moved Daily',
    desc: 'Frequent moves keep our flock healthy, happy, and thriving on fresh ground.',
    icon: (
      <svg width="36" height="44" viewBox="0 0 36 44" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="18" cy="12" r="8"/>
        <path d="M10 12L4 18"/>
        <path d="M26 12L32 18"/>
        <path d="M14 16L10 20"/>
        <path d="M22 16L26 20"/>
        <circle cx="18" cy="12" r="3"/>
        <path d="M14 28L18 32L22 28"/>
        <line x1="18" y1="20" x2="18" y2="32"/>
        <path d="M8 36L18 40L28 36"/>
      </svg>
    ),
  },
  {
    title: 'Raised with Care',
    desc: 'We treat every bird with respect—because it makes a difference.',
    icon: (
      <svg width="36" height="40" viewBox="0 0 36 40" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M18 36C18 36 2 24 2 14C2 8 6 4 12 4C14.5 4 16.5 5 18 7C19.5 5 21.5 4 24 4C30 4 34 8 34 14C34 24 18 36 18 36Z"/>
      </svg>
    ),
  },
];

export default function WhyDifferent() {
  return (
    <section id="reserve" className="py-16 md:py-20 bg-[#FEFEFE] border-t border-[#D6CCBC]/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-source text-[10px] uppercase tracking-[0.35em] text-[#8B7355] mb-3">
            Raised with Care
          </p>
          <h2 className="font-playfair text-[1.8rem] sm:text-[2rem] text-[#3D2B1F] italic">
            Why Our Chickens Are Different
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="flex justify-center mb-4 text-[#8B7355]/60">{f.icon}</div>
              <h3 className="font-playfair text-[14px] text-[#3D2B1F] font-semibold mb-2 italic">{f.title}</h3>
              <p className="font-lora text-[12px] text-[#8B7355] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
