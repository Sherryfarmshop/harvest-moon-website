import Image from 'next/image';

const cards = [
  {
    title: 'Fresh From the Farm',
    image: '/images/website-maple-syrup.jpg',
    alt: 'Maple syrup bottles with Harvest Moon Farm tags',
    copy: 'Simple, seasonal, and straight from the source. From farm fresh eggs to whatever is growing in the fields, everything here is gathered at its peak and meant to be enjoyed the way nature intended.',
  },
  {
    title: 'Farm Boxes',
    image: '/images/website-breakfast-box.jpg',
    alt: 'Farmhouse Breakfast Box with pancake mix, eggs, and maple syrup',
    copy: "Thoughtfully curated for slow mornings, easy meals, and cozy moments. Each box is filled with simple, useful things—whether you're making breakfast, brewing coffee, or firing up the grill.",
  },
  {
    title: 'Ice Cream & Treats',
    image: '/images/website-icecream.jpg',
    alt: 'Family enjoying ice cream at the farm',
    copy: 'A sweet pause in your visit. Simple, nostalgic treats meant to be enjoyed right here on the farm—best shared, best savored, and best with a little sunshine.',
  },
  {
    title: 'Gathered Goods',
    image: '/images/website-gathered-goods.jpg',
    alt: 'Vintage stoneware crocks, wooden utensils, and gathered home goods',
    copy: 'A collection of old, useful, and thoughtfully chosen pieces. From vintage finds to simple home goods, everything here has character—and something worth bringing home.',
  },
];

export default function WhatYoullFind() {
  return (
    <section id="offerings" className="bg-cream py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-dark-text mb-4">
            What You&apos;ll Find
          </h2>
          <div className="w-16 h-0.5 bg-harvest-gold mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-soft-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-playfair text-2xl text-dark-text mb-3">
                  {card.title}
                </h3>
                <p className="font-lora text-dark-text/80 leading-relaxed">
                  {card.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
