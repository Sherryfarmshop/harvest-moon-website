import Image from 'next/image';

function ProductCard({ name, price, description, img, buyLink }: {
  name: string; price: string; description: string; img: string; buyLink: string;
}) {
  return (
    <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(74,53,40,0.09)' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: '#F7F3ED' }}>
        <Image src={img} alt={name} fill className="object-contain p-3" />
      </div>
      <div className="p-4">
        <h4 className="font-playfair font-bold mb-1" style={{ fontSize: '15px', color: '#3D2B1F', lineHeight: 1.3 }}>{name}</h4>
        <p className="font-lora font-semibold mb-2" style={{ fontSize: '15px', color: '#4A5D3A' }}>{price}</p>
        <p className="font-lora mb-4" style={{ fontSize: '13px', color: '#6B5544', lineHeight: 1.5,
          overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const }}>
          {description}
        </p>
        <a href={buyLink} target="_blank" rel="noopener noreferrer"
          className="inline-block bg-[#4A5D3A] hover:bg-[#3E4F31] transition-colors font-source font-semibold uppercase tracking-[0.12em] rounded-sm w-full text-center"
          style={{ color: '#FFF4DE', padding: '10px 16px', fontSize: '11px' }}>
          Add to Cart
        </a>
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center gap-4 my-12">
      <div style={{ flex: 1, height: '1px', background: '#C9B896' }} />
      <span style={{ color: '#C9B896', fontSize: '12px', letterSpacing: '0.3em' }}>✦</span>
      <div style={{ flex: 1, height: '1px', background: '#C9B896' }} />
    </div>
  );
}

export default function ShopSection() {
  return (
    <section id="shop" className="py-10 md:py-16" style={{ background: '#F7F3ED' }}>
      <div style={{ maxWidth: '950px' }} className="mx-auto px-6">

        {/* Page heading */}
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold mb-2" style={{ fontSize: 'clamp(26px, 4vw, 32px)', color: '#3D2B1F' }}>
            The Farm Shop
          </h2>
          <div className="flex items-center justify-center gap-1 mb-3 text-[#8B7355]/40">
            <span className="text-[10px] tracking-[0.3em]">‹‹‹‹</span>
          </div>
          <p className="font-lora" style={{ fontSize: '16px', color: '#6B5544', lineHeight: 1.5 }}>
            Farmhouse gifts and cozy Northern Michigan favorites, ready to ship.
          </p>
        </div>

        {/* ── SECTION 1: CHRISTMAS AT THE FARM ── */}
        <div id="christmas">
          <h3 className="font-playfair font-bold mb-2" style={{ fontSize: 'clamp(20px, 3vw, 24px)', color: '#4A3528' }}>
            Christmas at the Farm
          </h3>
          <p className="font-lora mb-6" style={{ fontSize: '15px', color: '#6B5544', lineHeight: 1.5 }}>
            Old-fashioned Christmas traditions, thoughtfully packaged with farmhouse charm.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <ProductCard
              name="Harvest Moon Farmhouse Breakfast Box"
              price="$44.99"
              description="Pancake mix, Harvest Moon maple syrup, Christmas jam, chocolate chips, hot cocoa & more."
              img="/images/breakfast-box-open.png"
              buyLink="https://xbysrj-1m.myshopify.com/products/farmhouse-breakfast-box"
            />
            <ProductCard
              name="Harvest Moon Farm Shop Hot Cocoa Kit"
              price="$34.99"
              description="Hot cocoa for four with Santa's Favorite packets, snowflake marshmallows & candy canes."
              img="/images/cocoa-box-open.png"
              buyLink="https://xbysrj-1m.myshopify.com/products/farmhouse-hot-cocoa-box"
            />
            <ProductCard
              name="The Night Before Christmas Cocoa & Storytime Box"
              price="$39.99"
              description="The Night Before Christmas book, hot cocoa, candy canes & farmhouse treats for a cozy holiday night."
              img="/images/christmas-book-kit-open.png"
              buyLink="https://xbysrj-1m.myshopify.com/products/the-night-before-christmas-cocoa-storytime-box"
            />
          </div>
          <p className="font-lora mt-5" style={{ fontSize: '13px', color: '#8B7355' }}>
            Free shipping on orders over $75. Ships within 2–3 business days.
          </p>
        </div>

        <SectionDivider />

        {/* ── SECTION 2: PASTURE-RAISED WHOLE CHICKENS ── */}
        <div id="chicken">
          <h3 className="font-playfair font-bold mb-2" style={{ fontSize: 'clamp(20px, 3vw, 24px)', color: '#4A3528' }}>
            Pasture-Raised Whole Chickens
          </h3>
          <p className="font-lora mb-6" style={{ fontSize: '15px', color: '#6B5544', lineHeight: 1.6 }}>
            Naturally raised on our Northern Michigan farm with fresh pasture, sunshine, and room to roam.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Photo */}
            <div style={{ borderRadius: '10px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
              <Image src="/images/pasture-chicken.png" alt="2027 Pasture-Raised Whole Chicken from Harvest Moon Farm" fill className="object-cover" />
            </div>

            {/* Product info */}
            <div style={{ background: 'white', borderRadius: '10px', padding: '28px', boxShadow: '0 2px 12px rgba(74,53,40,0.09)' }}>
              <h4 className="font-playfair font-bold mb-1" style={{ fontSize: '20px', color: '#3D2B1F' }}>
                2027 Pasture-Raised Whole Chicken
              </h4>
              <p className="font-lora font-bold mb-1" style={{ fontSize: '22px', color: '#4A5D3A' }}>
                $25 deposit per chicken
              </p>
              <p className="font-lora mb-5" style={{ fontSize: '13px', color: '#8B7355', lineHeight: 1.6 }}>
                Your $25 deposit secures your spot. Estimated total price is $40–$45 per chicken, with the remaining balance due at pickup. We'll contact you before pickup to confirm details.
              </p>

              {/* Quantity selector */}
              <div className="flex items-center gap-3 mb-5">
                <label className="font-source font-semibold uppercase tracking-wider" style={{ fontSize: '11px', color: '#3D2B1F' }}>
                  Quantity
                </label>
                <select
                  style={{ border: '1px solid #C9B896', borderRadius: '6px', padding: '8px 12px', background: '#F7F3ED', fontSize: '14px', color: '#3D2B1F', fontFamily: 'inherit' }}>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              {/* Reserve button — link to Shopify deposit product when ready */}
              <a href="#reserve"
                className="inline-block bg-[#4A5D3A] hover:bg-[#3E4F31] transition-colors font-source font-semibold uppercase tracking-[0.15em] rounded-sm w-full text-center"
                style={{ color: '#FFF4DE', padding: '14px 28px', fontSize: '12px' }}>
                Reserve My Chickens — $25 Deposit
              </a>
              <p className="font-lora mt-3 text-center" style={{ fontSize: '12px', color: '#8B7355' }}>
                Spots are limited. Reserve early to secure your 2027 chickens.
              </p>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* ── SECTION 3: THE FARMHOUSE PANTRY ── */}
        <div id="pantry" className="grid md:grid-cols-2 gap-8 items-center">
          <div style={{ borderRadius: '10px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
            <Image src="/images/farmhouse-pantry.jpg" alt="Farmhouse pantry with maple syrup, jams and country staples" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-playfair font-bold mb-2" style={{ fontSize: 'clamp(20px, 3vw, 24px)', color: '#4A3528' }}>
              The Farmhouse Pantry
            </h3>
            <p className="font-lora mb-6" style={{ fontSize: '15px', color: '#6B5544', lineHeight: 1.6 }}>
              Simple ingredients, local goodness, and old-fashioned favorites. Maple syrup, homemade jams, pancake mixes, and more — made or sourced with care right here in Northern Michigan.
            </p>
            <span className="font-source font-bold uppercase tracking-[0.2em]" style={{ fontSize: '12px', color: '#8B7355' }}>
              Coming Soon
            </span>
          </div>
        </div>

        <SectionDivider />

        {/* ── SECTION 4: FARMHOUSE GIFTS ── */}
        <div id="gifts" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-playfair font-bold mb-2" style={{ fontSize: 'clamp(20px, 3vw, 24px)', color: '#4A3528' }}>
              Farmhouse Gifts
            </h3>
            <p className="font-lora mb-6" style={{ fontSize: '15px', color: '#6B5544', lineHeight: 1.6 }}>
              Thoughtful gifts inspired by country living. Rustic baskets, seasonal bundles, handcrafted treasures, and Michigan-made favorites — perfect for everyone on your list.
            </p>
            <span className="font-source font-bold uppercase tracking-[0.2em]" style={{ fontSize: '12px', color: '#8B7355' }}>
              Coming Soon
            </span>
          </div>
          <div style={{ borderRadius: '10px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
            <Image src="/images/farmhouse-gifts.jpg" alt="Farmhouse gift baskets and seasonal country gifts" fill className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}
