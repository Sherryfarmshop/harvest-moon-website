import Image from 'next/image';

const products = [
  {
    name: 'Farmhouse Breakfast Box',
    price: '$44.99',
    description: 'A cozy Christmas breakfast for your family. Filled with pancake mix, Harvest Moon maple syrup, Christmas jam, chocolate chips, hot cocoa, snowman marshmallow toppers, and a candy cane — everything you need for a warm holiday morning.',
    imgOpen: '/images/breakfast-box-open.png',
    imgClosed: '/images/breakfast-box-closed.png',
    buyLink: '#', // Replace with Shopify/Square checkout link
  },
  {
    name: 'Hot Cocoa Farmhouse Box',
    price: '$34.99',
    description: 'Hot cocoa for four. Includes Santa\'s Favorite hot cocoa packets, snowflake marshmallows, candy canes, and a recipe card — a perfect little holiday gift for neighbors, teachers, or anyone who loves a cozy cup.',
    imgOpen: '/images/cocoa-box-open.png',
    imgClosed: '/images/cocoa-box-closed.png',
    buyLink: '#', // Replace with Shopify/Square checkout link
  },
];

export default function ShopSection() {
  return (
    <section id="shop" className="py-12 md:py-16" style={{ background: '#F7F3ED' }}>
      <div style={{ maxWidth: '950px' }} className="mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-playfair font-bold mb-2" style={{ fontSize: 'clamp(26px, 4vw, 32px)', color: '#3D2B1F' }}>
            The Farm Shop
          </h2>
          <div className="flex items-center justify-center gap-1 mb-3 text-[#8B7355]/40">
            <span className="text-[10px] tracking-[0.3em]">‹‹‹‹</span>
          </div>
          <p className="font-lora" style={{ fontSize: '17px', color: '#6B5544', lineHeight: 1.5 }}>
            Farmhouse gifts and cozy Northern Michigan favorites, ready to ship.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.name} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(74,53,40,0.10)' }}>
              {/* Product image */}
              <div style={{ position: 'relative', aspectRatio: '4/3', background: '#F7F3ED' }}>
                <Image
                  src={product.imgOpen}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              {/* Product info */}
              <div className="p-6">
                <h3 className="font-playfair font-bold mb-1" style={{ fontSize: '22px', color: '#3D2B1F' }}>
                  {product.name}
                </h3>
                <p className="font-lora font-bold mb-3" style={{ fontSize: '20px', color: '#4A5D3A' }}>
                  {product.price}
                </p>
                <p className="font-lora mb-5" style={{ fontSize: '15px', color: '#6B5544', lineHeight: 1.6 }}>
                  {product.description}
                </p>
                <a
                  href={product.buyLink}
                  className="inline-block bg-[#4A5D3A] hover:bg-[#3E4F31] transition-colors font-source font-semibold uppercase tracking-[0.15em] rounded-sm"
                  style={{ color: '#FFF4DE', padding: '12px 28px', fontSize: '12px' }}
                >
                  Add to Cart
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-lora mt-8" style={{ fontSize: '14px', color: '#8B7355' }}>
          Free shipping available on orders over $75. Ships within 2–3 business days.
        </p>

      </div>
    </section>
  );
}
