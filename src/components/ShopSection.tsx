import Image from 'next/image';

const seasonalProducts = [
  {
    name: 'Farmhouse Breakfast Box',
    price: '$44.99',
    description: 'Pancake mix, Harvest Moon maple syrup, Christmas jam, chocolate chips, hot cocoa & more.',
    img: '/images/breakfast-box-open.png',
    buyLink: 'https://xbysrj-1m.myshopify.com/products/farmhouse-breakfast-box',
  },
  {
    name: 'Hot Cocoa Farmhouse Box',
    price: '$34.99',
    description: 'Hot cocoa for four with Santa\'s Favorite packets, snowflake marshmallows & candy canes.',
    img: '/images/cocoa-box-open.png',
    buyLink: 'https://xbysrj-1m.myshopify.com/products/farmhouse-hot-cocoa-box',
  },
  {
    name: 'Night Before Christmas Cocoa Storytime Box',
    price: '$39.99',
    description: 'The Night Before Christmas book, hot cocoa, candy canes & farmhouse treats for a cozy holiday night.',
    img: '/images/christmas-book-kit-open.png',
    buyLink: 'https://xbysrj-1m.myshopify.com/products/the-night-before-christmas-cocoa-storytime-box',
  },
];

const emptyCollections = [
  { id: 'chicken', title: 'Pasture-Raised Chicken', desc: 'Reserve your 2027 pasture-raised chickens. Fresh, natural, and locally raised in Northern Michigan.' },
  { id: 'pantry', title: 'Farmhouse Pantry', desc: 'Michigan-made pantry staples, locally sourced foods, and farmhouse favorites coming soon.' },
  { id: 'gifts', title: 'Farmhouse Gifts', desc: 'Handcrafted gifts, seasonal baskets, and thoughtfully curated Michigan-made products coming soon.' },
];

function ProductCard({ name, price, description, img, buyLink }: { name: string; price: string; description: string; img: string; buyLink: string }) {
  return (
    <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 1px 8px rgba(74,53,40,0.08)' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: '#F7F3ED' }}>
        <Image src={img} alt={name} fill className="object-contain p-3" />
      </div>
      <div className="p-4">
        <h4 className="font-playfair font-bold mb-1" style={{ fontSize: '15px', color: '#3D2B1F', lineHeight: 1.3 }}>{name}</h4>
        <p className="font-lora font-semibold mb-2" style={{ fontSize: '15px', color: '#4A5D3A' }}>{price}</p>
        <p className="font-lora mb-4" style={{ fontSize: '13px', color: '#6B5544', lineHeight: 1.5, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const }}>{description}</p>
        <a href={buyLink} target="_blank" rel="noopener noreferrer"
          className="inline-block bg-[#4A5D3A] hover:bg-[#3E4F31] transition-colors font-source font-semibold uppercase tracking-[0.12em] rounded-sm w-full text-center"
          style={{ color: '#FFF4DE', padding: '10px 16px', fontSize: '11px' }}>
          Add to Cart
        </a>
      </div>
    </div>
  );
}

export default function ShopSection() {
  return (
    <section id="shop" className="py-10 md:py-14" style={{ background: '#F7F3ED' }}>
      <div style={{ maxWidth: '950px' }} className="mx-auto px-6">

        {/* Main heading */}
        <div className="text-center mb-10">
          <h2 className="font-playfair font-bold mb-2" style={{ fontSize: 'clamp(24px, 4vw, 30px)', color: '#3D2B1F' }}>
            Shop by Collection
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2 text-[#8B7355]/40">
            <span className="text-[10px] tracking-[0.3em]">‹‹‹‹</span>
          </div>
          <p className="font-lora" style={{ fontSize: '16px', color: '#6B5544', lineHeight: 1.5 }}>
            Farmhouse gifts and cozy Northern Michigan favorites, ready to ship.
          </p>
        </div>

        {/* SEASONAL FAVORITES — has products */}
        <div id="seasonal" className="mb-12">
          <h3 className="font-playfair font-bold mb-1" style={{ fontSize: '20px', color: '#4A3528' }}>
            Seasonal Favorites
          </h3>
          <div style={{ borderBottom: '2px solid #C9B896', marginBottom: '20px' }} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {seasonalProducts.map((p) => <ProductCard key={p.name} {...p} />)}
          </div>
        </div>

        {/* EMPTY COLLECTIONS */}
        <div className="grid md:grid-cols-3 gap-6">
          {emptyCollections.map((col) => (
            <div key={col.id} id={col.id}
              style={{ background: 'white', borderRadius: '10px', padding: '24px', boxShadow: '0 1px 8px rgba(74,53,40,0.08)', textAlign: 'center' }}>
              <h3 className="font-playfair font-bold mb-3" style={{ fontSize: '17px', color: '#4A3528' }}>
                {col.title}
              </h3>
              <div style={{ borderBottom: '1px solid #C9B896', marginBottom: '12px' }} />
              <p className="font-lora" style={{ fontSize: '13px', color: '#8B7355', lineHeight: 1.6 }}>
                {col.desc}
              </p>
              <p className="font-source font-semibold mt-4" style={{ fontSize: '11px', color: '#4A5D3A', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Coming Soon
              </p>
            </div>
          ))}
        </div>

        <p className="text-center font-lora mt-8" style={{ fontSize: '13px', color: '#8B7355' }}>
          Free shipping on orders over $75. Ships within 2–3 business days.
        </p>

      </div>
    </section>
  );
}
