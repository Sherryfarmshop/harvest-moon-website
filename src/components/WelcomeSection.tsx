export default function WelcomeSection() {
  return (
    <section id="farm" style={{ background: '#4A3528', color: '#FFF4DE' }} className="py-14 md:py-20">
      <div className="max-w-[950px] mx-auto px-6">

        {/* Main heading + subtitle */}
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(28px, 5vw, 36px)', color: '#FFF4DE' }}>
            Welcome to Harvest Moon Farm Shop
          </h2>
          <p className="font-lora"
            style={{ fontSize: 'clamp(19px, 3vw, 22px)', color: '#FFF4DE', lineHeight: 1.6 }}>
            A Family Farm and Country Store in Charlevoix, Michigan
          </p>
        </div>

        {/* Intro paragraph */}
        <p className="font-lora mb-10 text-left"
          style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: '#FFF4DE', lineHeight: 1.6 }}>
          Just south of Charlevoix, in the heart of Northern Michigan, Harvest Moon Farm Shop is a family-owned farm built on a love of the land. We believe in fresh food, local traditions, and the simple pleasures of country living, and we&apos;re glad you&apos;re here.
        </p>

        {/* Pasture-Raised Chicken */}
        <div className="mb-10">
          <h3 className="font-playfair font-bold mb-4"
            style={{ fontSize: 'clamp(23px, 4vw, 26px)', color: '#FFF4DE' }}>
            Pasture-Raised Chicken
          </h3>
          <p className="font-lora mb-3"
            style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: '#FFF4DE', lineHeight: 1.6 }}>
            We&apos;re now accepting reservations for our 2027 pasture-raised chickens.
          </p>
          <p className="font-lora mb-3"
            style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: '#FFF4DE', lineHeight: 1.6 }}>
            Our birds live outdoors on fresh grass, moved to new ground every day, with plenty of sunshine and room to roam. It&apos;s chicken raised the natural way, with care and attention to quality.
          </p>
          <p className="font-lora mb-6"
            style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: '#FFF4DE', lineHeight: 1.6 }}>
            Families in Charlevoix, Petoskey, Boyne City, East Jordan, and the surrounding communities are welcome to reserve. Spots are limited, so we encourage you to reserve early.
          </p>
          <a href="#reserve"
            className="inline-block bg-[#4A5D3A] hover:bg-[#3E4F31] font-source font-semibold uppercase tracking-[0.15em] transition-colors rounded-sm"
            style={{ color: '#FFF4DE', padding: '12px 28px', fontSize: '13px' }}>
            Reserve Your 2027 Chickens
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-[#FFF4DE]/20 my-10" />

        {/* Farmhouse Gifts */}
        <div className="mb-10">
          <h3 className="font-playfair font-bold mb-4"
            style={{ fontSize: 'clamp(23px, 4vw, 26px)', color: '#FFF4DE' }}>
            Farmhouse Gifts &amp; Country Favorites
          </h3>
          <p className="font-lora mb-3"
            style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: '#FFF4DE', lineHeight: 1.6 }}>
            Our online shop is growing, with gifts inspired by farmhouse traditions and cozy mornings.
          </p>
          <p className="font-lora mb-3"
            style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: '#FFF4DE', lineHeight: 1.6 }}>
            Start with our farmhouse breakfast gift boxes, filled with pancake mix, Christmas jam, syrup, chocolate chips, hot cocoa, and festive treats. Seasonal gift baskets, kitchen and home goods, handcrafted treasures, and thoughtfully selected Michigan-made products will bring a little country charm to every season.
          </p>
          <p className="font-lora"
            style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: '#FFF4DE', lineHeight: 1.6 }}>
            Whether you&apos;re looking for a meaningful gift or something special for your own home, we hope you&apos;ll find something you love.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-[#FFF4DE]/20 my-10" />

        {/* Coming in 2027 */}
        <div>
          <h3 className="font-playfair font-bold mb-4"
            style={{ fontSize: 'clamp(23px, 4vw, 26px)', color: '#FFF4DE' }}>
            Coming in 2027 — Our Country Farm Shop
          </h3>
          <p className="font-lora mb-3"
            style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: '#FFF4DE', lineHeight: 1.6 }}>
            We&apos;re looking forward to opening our farm shop just south of Charlevoix in 2027.
          </p>
          <p className="font-lora mb-3"
            style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: '#FFF4DE', lineHeight: 1.6 }}>
            Our plans include farm-fresh eggs, locally grown seasonal produce, Michigan-made foods and specialty products, farmhouse gifts, and delicious ice cream for those warm Northern Michigan summer days.
          </p>
          <p className="font-lora"
            style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: '#FFF4DE', lineHeight: 1.6 }}>
            We envision a welcoming little country store where neighbors and visitors can stop in, discover something special, and enjoy a taste of farm life. As we grow, we&apos;ll share updates on our progress, new products, and everything happening on the farm.
          </p>
        </div>

      </div>
    </section>
  );
}
