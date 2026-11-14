export default function FooterBar() {
  return (
    <footer style={{ background: '#3D2B1F', color: '#FFF4DE' }} className="py-10">
      <div style={{ maxWidth: '900px' }} className="mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left mb-8">

          {/* Farm info */}
          <div>
            <h4 className="font-playfair font-bold mb-3" style={{ fontSize: '18px', color: '#FFF4DE' }}>
              Harvest Moon Farm Shop
            </h4>
            <p className="font-lora" style={{ fontSize: '15px', color: '#FFF4DE', opacity: 0.8, lineHeight: 1.6 }}>
              3133 US Highway 31 S<br />
              Charlevoix, Michigan 49720
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-bold mb-3" style={{ fontSize: '18px', color: '#FFF4DE' }}>
              Contact Us
            </h4>
            <p className="font-lora" style={{ fontSize: '15px', color: '#FFF4DE', opacity: 0.8, lineHeight: 1.8 }}>
              <a href="tel:7347160475" style={{ color: '#FFF4DE', textDecoration: 'none' }}>📞 734-716-0475</a><br />
              <a href="mailto:harvestmoonfarmshop@gmail.com" style={{ color: '#FFF4DE', textDecoration: 'none' }}>✉ harvestmoonfarmshop@gmail.com</a>
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-playfair font-bold mb-3" style={{ fontSize: '18px', color: '#FFF4DE' }}>
              Quick Links
            </h4>
            <div className="font-source" style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 2 }}>
              <a href="#home" style={{ display: 'block', color: '#FFF4DE', opacity: 0.8, textDecoration: 'none' }}>Home</a>
              <a href="#shop" style={{ display: 'block', color: '#FFF4DE', opacity: 0.8, textDecoration: 'none' }}>Shop</a>
              <a href="#farm" style={{ display: 'block', color: '#FFF4DE', opacity: 0.8, textDecoration: 'none' }}>Our Farm</a>
              <a href="#contact" style={{ display: 'block', color: '#FFF4DE', opacity: 0.8, textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

        </div>

        <div style={{ borderTop: '1px solid rgba(255,244,222,0.2)', paddingTop: '20px', textAlign: 'center' }}>
          <p className="font-source" style={{ fontSize: '11px', color: '#FFF4DE', opacity: 0.5, letterSpacing: '0.1em' }}>
            © 2026 Harvest Moon Farm Shop · Charlevoix, Michigan · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
