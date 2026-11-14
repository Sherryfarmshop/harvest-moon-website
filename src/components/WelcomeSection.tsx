import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section id="farm" style={{ background: '#4A3528', color: '#FFF4DE' }} className="py-10 md:py-16">
      <div style={{ maxWidth: '950px' }} className="mx-auto px-6">

        {/* Centered heading + subtitle */}
        <div className="text-center mb-8">
          <h2 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(28px, 4vw, 32px)', color: '#FFF4DE', lineHeight: 1.2 }}>
            Welcome to Harvest Moon Farm Shop
          </h2>
          <p className="font-lora" style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: '#FFF4DE', lineHeight: 1.5 }}>
            A Family Farm and Country Store in Charlevoix, Michigan
          </p>
        </div>

        {/* Two-column: 55% text / 45% photo */}
        <div className="grid md:grid-cols-[55%_43%] gap-8 items-start mb-8">

          {/* Left - intro text */}
          <div>
            <p className="font-lora mb-5" style={{ fontSize: 'clamp(17px, 2vw, 18px)', color: '#FFF4DE', lineHeight: 1.5 }}>
              Just south of Charlevoix, in the heart of Northern Michigan, Harvest Moon Farm Shop is a family-owned farm built on a love of the land. We believe in fresh food, local traditions, and the simple pleasures of country living, and we&apos;re glad you&apos;re here.
            </p>

            <h3 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(21px, 3vw, 24px)', color: '#FFF4DE' }}>
              Pasture-Raised Chicken
            </h3>
            <p className="font-lora mb-3" style={{ fontSize: 'clamp(17px, 2vw, 18px)', color: '#FFF4DE', lineHeight: 1.5 }}>
              We&apos;re now accepting reservations for our 2027 pasture-raised chickens.
            </p>
            <p className="font-lora mb-3" style={{ fontSize: 'clamp(17px, 2vw, 18px)', color: '#FFF4DE', lineHeight: 1.5 }}>
              Our birds live outdoors on fresh grass, moved to new ground every day, with plenty of sunshine and room to roam. It&apos;s chicken raised the natural way, with care and attention to quality.
            </p>
            <p className="font-lora mb-5" style={{ fontSize: 'clamp(17px, 2vw, 18px)', color: '#FFF4DE', lineHeight: 1.5 }}>
              Families in Charlevoix, Petoskey, Boyne City, East Jordan, and the surrounding communities are welcome to reserve. Spots are limited, so we encourage you to reserve early.
            </p>
            <a href="#reserve"
              className="inline-block bg-[#4A5D3A] hover:bg-[#3E4F31] font-source font-semibold uppercase tracking-[0.15em] transition-colors rounded-sm"
              style={{ color: '#FFF4DE', padding: '11px 26px', fontSize: '12px' }}>
              Reserve Your 2027 Chickens
            </a>
          </div>

          {/* Right - tractor photo */}
          <div className="relative overflow-hidden mt-6 md:mt-0" style={{ borderRadius: '12px' }}>
            <Image
              src="/images/tractor-sunset.jpg"
              alt="Orange tractor at sunset on Harvest Moon Farm near Charlevoix Michigan"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              style={{ borderRadius: '12px' }}
            />
          </div>

        </div>

        {/* On mobile: photo stacks after intro text — handled by grid ordering */}

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,244,222,0.2)', margin: '28px 0' }} />

        {/* Farmhouse Gifts */}
        <div className="mb-7">
          <h3 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(21px, 3vw, 24px)', color: '#FFF4DE' }}>
            Farmhouse Gifts &amp; Country Favorites
          </h3>
          <p className="font-lora mb-3" style={{ fontSize: 'clamp(17px, 2vw, 18px)', color: '#FFF4DE', lineHeight: 1.5 }}>
            Our online shop is growing, with gifts inspired by farmhouse traditions and cozy mornings.
          </p>
          <p className="font-lora mb-3" style={{ fontSize: 'clamp(17px, 2vw, 18px)', color: '#FFF4DE', lineHeight: 1.5 }}>
            Start with our farmhouse breakfast gift boxes, filled with pancake mix, Christmas jam, syrup, chocolate chips, hot cocoa, and festive treats. Seasonal gift baskets, kitchen and home goods, handcrafted treasures, and thoughtfully selected Michigan-made products will bring a little country charm to every season.
          </p>
          <p className="font-lora" style={{ fontSize: 'clamp(17px, 2vw, 18px)', color: '#FFF4DE', lineHeight: 1.5 }}>
            Whether you&apos;re looking for a meaningful gift or something special for your own home, we hope you&apos;ll find something you love.
          </p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,244,222,0.2)', margin: '28px 0' }} />

        {/* Coming 2027 */}
        <div>
          <h3 className="font-playfair font-bold mb-3" style={{ fontSize: 'clamp(21px, 3vw, 24px)', color: '#FFF4DE' }}>
            Coming in 2027 — Our Country Farm Shop
          </h3>
          <p className="font-lora mb-3" style={{ fontSize: 'clamp(17px, 2vw, 18px)', color: '#FFF4DE', lineHeight: 1.5 }}>
            We&apos;re looking forward to opening our farm shop just south of Charlevoix in 2027.
          </p>
          <p className="font-lora mb-3" style={{ fontSize: 'clamp(17px, 2vw, 18px)', color: '#FFF4DE', lineHeight: 1.5 }}>
            Our plans include farm-fresh eggs, locally grown seasonal produce, Michigan-made foods and specialty products, farmhouse gifts, and delicious ice cream for those warm Northern Michigan summer days.
          </p>
          <p className="font-lora" style={{ fontSize: 'clamp(17px, 2vw, 18px)', color: '#FFF4DE', lineHeight: 1.5 }}>
            We envision a welcoming little country store where neighbors and visitors can stop in, discover something special, and enjoy a taste of farm life. As we grow, we&apos;ll share updates on our progress, new products, and everything happening on the farm.
          </p>
        </div>

      </div>
    </section>
  );
}
