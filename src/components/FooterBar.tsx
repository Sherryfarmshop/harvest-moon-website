export default function FooterBar() {
  return (
    <footer style={{ background: '#3D2B1F' }} className="py-10">
      <div style={{ maxWidth: '950px' }} className="mx-auto px-6">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Farm info */}
          <div className="md:col-span-1">
            <h4 className="font-playfair font-bold mb-3" style={{ fontSize: '17px', color: '#FFF4DE' }}>
              Harvest Moon Farm Shop
            </h4>
            <p className="font-lora" style={{ fontSize: '14px', color: '#FFF4DE', opacity: 0.75, lineHeight: 1.7 }}>
              3133 US Highway 31 S<br />
              Charlevoix, Michigan 49720
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h4 className="font-playfair font-bold mb-3" style={{ fontSize: '17px', color: '#FFF4DE' }}>
              Contact
            </h4>
            <div className="font-lora" style={{ fontSize: '14px', color: '#FFF4DE', opacity: 0.75, lineHeight: 1.9 }}>
              <a href="tel:7347160475" style={{ color: '#FFF4DE', textDecoration: 'none', display: 'block' }}>📞 734-716-0475</a>
              <a href="mailto:harvestmoonfarmshop@gmail.com" style={{ color: '#FFF4DE', textDecoration: 'none', display: 'block', wordBreak: 'break-all' }}>✉ harvestmoonfarmshop@gmail.com</a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <h4 className="font-playfair font-bold mb-3" style={{ fontSize: '17px', color: '#FFF4DE' }}>
              Explore
            </h4>
            <div className="font-source" style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', lineHeight: 2.2 }}>
              <a href="#home" style={{ display: 'block', color: '#FFF4DE', opacity: 0.75, textDecoration: 'none' }}>Home</a>
              <a href="#shop" style={{ display: 'block', color: '#FFF4DE', opacity: 0.75, textDecoration: 'none' }}>Shop</a>
              <a href="#farm" style={{ display: 'block', color: '#FFF4DE', opacity: 0.75, textDecoration: 'none' }}>Our Farm</a>
              <a href="#contact" style={{ display: 'block', color: '#FFF4DE', opacity: 0.75, textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h4 className="font-playfair font-bold mb-3" style={{ fontSize: '17px', color: '#FFF4DE' }}>
              Follow Along
            </h4>
            <p className="font-lora mb-4" style={{ fontSize: '13px', color: '#FFF4DE', opacity: 0.7, lineHeight: 1.6 }}>
              See life on the farm, updates, and what we&apos;re growing.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" style={{ color: '#FFF4DE', opacity: 0.6 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" style={{ color: '#FFF4DE', opacity: 0.6 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,244,222,0.15)', paddingTop: '16px', textAlign: 'center' }}>
          <p className="font-source" style={{ fontSize: '11px', color: '#FFF4DE', opacity: 0.4, letterSpacing: '0.08em' }}>
            © 2026 Harvest Moon Farm Shop · Charlevoix, Michigan · All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
