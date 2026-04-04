export default function Visit() {
  return (
    <section id="visit" className="bg-soft-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-dark-text mb-4">
            Come Find Us
          </h2>
          <p className="font-lora text-dark-text/75 text-lg max-w-2xl mx-auto">
            We&apos;re just south of Charlevoix on US-31, tucked into the
            countryside with plenty of room to breathe. Stop in, slow down, and
            see what&apos;s fresh.
          </p>
          <div className="w-16 h-0.5 bg-harvest-gold mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-md aspect-[4/3]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.5!2d-85.3375!3d45.2875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0UxNycxNS4wIk4gODXCsDIwJzE1LjAiVw!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harvest Moon Farm Shop location on Google Maps"
            />
          </div>

          {/* Info */}
          <div className="space-y-8">
            {/* Hours */}
            <div className="bg-cream rounded-lg p-8">
              <h3 className="font-playfair text-2xl text-dark-text mb-5">
                Summer Hours
              </h3>
              <div className="space-y-3 font-lora text-dark-text/85">
                <div className="flex justify-between">
                  <span>Wednesday – Saturday</span>
                  <span className="font-semibold">11:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">11:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between text-warm-brown">
                  <span>Monday – Tuesday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-playfair text-2xl text-dark-text mb-3">
                Contact
              </h3>
              <div className="font-lora text-dark-text/85 space-y-1">
                <p>Sherry Cleland</p>
                <p>
                  <a
                    href="tel:7347160475"
                    className="hover:text-barn-red transition-colors"
                  >
                    734-716-0475
                  </a>
                </p>
                <p className="mt-2">3133 US Highway 31 S</p>
                <p>Charlevoix, Michigan 49720</p>
              </div>
            </div>

            {/* Calendar placeholder */}
            <div className="bg-cream/60 rounded-lg p-6 border border-warm-brown/15">
              <h3 className="font-playfair text-xl text-dark-text mb-2">
                Shop Calendar
              </h3>
              <p className="font-lora text-dark-text/65 text-sm">
                Check back soon — we&apos;ll post our schedule and any closures
                here.
              </p>
              {/* TODO: Embed Google Calendar iframe here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
