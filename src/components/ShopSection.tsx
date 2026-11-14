import Image from 'next/image';

const products = [
  {
    name: 'Farmhouse Breakfast Box',
    price: '$44.99',
    description: 'Pancake mix, Harvest Moon maple syrup, Christmas jam, chocolate chips, hot cocoa & more.',
    imgOpen: '/images/breakfast-box-open.png',
    buyLink: 'https://xbysrj-1m.myshopify.com/products/farmhouse-breakfast-box',
  },
  {
    name: 'Hot Cocoa Farmhouse Box',
    price: '$34.99',
    description: 'Hot cocoa for four with Santa\'s Favorite packets, snowflake marshmallows & candy canes.',
    imgOpen: '/images/cocoa-box-open.png',
    buyLink: 'https://xbysrj-1m.myshopify.com/products/farmhouse-hot-cocoa-box',
  },
];

export default function ShopSection() {
  return (
    <section id="shop" className="py-10 md:py-14" style={{ background: '#F7F3ED' }}>
      <div style={{ maxWidth: '950px' }} className="mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="font-playfair font-bold mb-2" style={{ fontSize: 'clamp(24px, 4vw, 30px)', color: '#3D2B1F' }}>
            The Farm Shop
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2 text-[#8B7355]/40">
            <span className="text-[10px] tracking-[0.3em]">‹‹‹‹</span>
          </div>
          <p className="font-lora" style={{ fontSize: '16px', color: '#6B5544', lineHeight: 1.5 }}>
            Farmhouse gifts and cozy Northern Michigan favorites, ready to ship.
          </p>
        </div>

        {/* Product grid — 3 per row desktop, 2 per row mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <div key={product.name}
              style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 1px 8px rgba(74,53,40,0.08)' }}>

              {/* Square image */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', background: '#F7F3ED' }}>
                <Image
                  src={product.imgOpen}
                  alt={product.name}
                  fill
                  className="object-contain p-3"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-playfair font-bold mb-1" style={{ fontSize: '15px', color: '#3D2B1F', lineHeight: 1.3 }}>
                  {product.name}
                </h3>
                <p className="font-lora font-semibold mb-2" style={{ fontSize: '15px', color: '#4A5D3A' }}>
                  {product.price}
                </p>
                <p className="font-lora mb-4" style={{ fontSize: '13px', color: '#6B5544', lineHeight: 1.5,
                  overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {product.description}
                </p>
                <a
                  href={product.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#4A5D3A] hover:bg-[#3E4F31] transition-colors font-source font-semibold uppercase tracking-[0.12em] rounded-sm w-full text-center"
                  style={{ color: '#FFF4DE', padding: '10px 16px', fontSize: '11px' }}
                >
                  Add to Cart
                </a>
              </div>

            </div>
          ))}
        </div>

        <p className="text-center font-lora mt-6" style={{ fontSize: '13px', color: '#8B7355' }}>
          Free shipping on orders over $75. Ships within 2–3 business days.
        </p>

      </div>
    </section>
  );
}
