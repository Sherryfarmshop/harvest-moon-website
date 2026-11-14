'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection() {
  const [state, handleFormspree] = useForm('mnpdjyzq');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    await handleFormspree(e);
  };

  return (
    <section id="contact" style={{ background: '#F7F3ED' }} className="py-12 md:py-16">
      <div style={{ maxWidth: '900px' }} className="mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-playfair font-bold mb-2" style={{ fontSize: 'clamp(26px, 4vw, 32px)', color: '#3D2B1F' }}>
            Visit Harvest Moon Farm Shop
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4 text-[#8B7355]/40">
            <span style={{ fontSize: '10px', letterSpacing: '0.3em' }}>‹‹‹‹</span>
          </div>
          <p className="font-lora" style={{ color: '#2C2C2C', maxWidth: '600px', margin: '0 auto' }}>
            We&apos;d love to hear from you! Whether you have questions about our pasture-raised chickens, farmhouse products, seasonal gifts, or future farm shop offerings, we&apos;re happy to help. We look forward to welcoming you to Harvest Moon Farm Shop in beautiful Northern Michigan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left — Contact info + 2027 notice */}
          <div>
            <div style={{ background: 'white', borderRadius: '10px', padding: '28px', boxShadow: '0 2px 12px rgba(74,53,40,0.08)', marginBottom: '24px' }}>
              <h3 className="font-playfair font-bold mb-5" style={{ fontSize: '20px', color: '#4A3528' }}>
                Contact Information
              </h3>
              <div className="space-y-3 font-lora" style={{ color: '#2C2C2C' }}>
                <div>
                  <span style={{ fontWeight: 700, color: '#4A3528' }}>Harvest Moon Farm Shop</span><br />
                  Sherry Cleland, Owner
                </div>
                <div>
                  📍 3133 US Highway 31 S<br />
                  Charlevoix, Michigan 49720
                </div>
                <div>
                  📞 <a href="tel:7347160475" style={{ color: '#4A5D3A', fontWeight: 600 }}>734-716-0475</a>
                </div>
                <div>
                  ✉ <a href="mailto:harvestmoonfarmshop@gmail.com" style={{ color: '#4A5D3A', fontWeight: 600 }}>
                    harvestmoonfarmshop@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div style={{ background: '#4A3528', borderRadius: '10px', padding: '28px', color: '#FFF4DE' }}>
              <h3 className="font-playfair font-bold mb-3" style={{ fontSize: '20px', color: '#FFF4DE' }}>
                Farm Shop Opening in 2027!
              </h3>
              <p className="font-lora" style={{ color: '#FFF4DE', lineHeight: 1.5 }}>
                We&apos;re preparing something special! Our farm shop will be opening in 2027. Until then, explore our online offerings and reserve your pasture-raised chickens for the upcoming season.
              </p>
              <p className="font-lora mt-3" style={{ fontSize: '14px', color: '#FFF4DE', opacity: 0.75 }}>
                Our physical farm shop is not yet open for walk-in shopping.
              </p>
            </div>
          </div>

          {/* Right — Contact form */}
          <div style={{ background: 'white', borderRadius: '10px', padding: '28px', boxShadow: '0 2px 12px rgba(74,53,40,0.08)' }}>
            <h3 className="font-playfair font-bold mb-5" style={{ fontSize: '20px', color: '#4A3528' }}>
              Send Us a Message
            </h3>

            {state.succeeded ? (
              <div style={{ textAlign: 'center', padding: '30px 20px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✅</div>
                <p className="font-playfair font-bold" style={{ color: '#4A5D3A', fontSize: '18px', marginBottom: '8px' }}>Message sent!</p>
                <p className="font-lora" style={{ color: '#6B5544', fontSize: '15px' }}>We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

                <div>
                  <label className="font-source" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#3D2B1F', display: 'block', marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input required name="name" placeholder="Your name"
                    style={{ width: '100%', padding: '12px', border: '1px solid #C9B896', borderRadius: '6px', background: '#F7F3ED', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                  <ValidationError field="name" prefix="Name" errors={state.errors} />
                </div>

                <div>
                  <label className="font-source" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#3D2B1F', display: 'block', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input required type="email" name="email" placeholder="you@email.com" autoComplete="off"
                    style={{ width: '100%', padding: '12px', border: '1px solid #C9B896', borderRadius: '6px', background: '#F7F3ED', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                  <ValidationError field="email" prefix="Email" errors={state.errors} />
                </div>

                <div>
                  <label className="font-source" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#3D2B1F', display: 'block', marginBottom: '6px' }}>
                    Phone Number
                  </label>
                  <input name="phone" placeholder="(231) 555-0000"
                    style={{ width: '100%', padding: '12px', border: '1px solid #C9B896', borderRadius: '6px', background: '#F7F3ED', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }} />
                </div>

                <div>
                  <label className="font-source" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#3D2B1F', display: 'block', marginBottom: '6px' }}>
                    Message *
                  </label>
                  <textarea required name="message" placeholder="Tell us about your order, questions, or visit..." rows={4}
                    style={{ width: '100%', padding: '12px', border: '1px solid #C9B896', borderRadius: '6px', background: '#F7F3ED', fontSize: '15px', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                  <ValidationError field="message" prefix="Message" errors={state.errors} />
                </div>

                <button type="submit" disabled={state.submitting}
                  className="bg-[#4A5D3A] hover:bg-[#3E4F31] transition-colors font-source font-semibold uppercase tracking-[0.15em] rounded-sm"
                  style={{ color: '#FFF4DE', padding: '14px', fontSize: '12px', border: 'none', cursor: 'pointer', opacity: state.submitting ? 0.7 : 1 }}>
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}


