'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      {/* <Hero
        title="Get in Touch"
        subtitle="Have questions? We'd love to hear from you. Reach out anytime!"
        accent
      /> */}

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-3">Email</h3>
              <p className="text-gray-600 mb-2">For general inquiries</p>
              <a href="mailto:hello@creativekidsbibleclub.com" className="text-ckbc-navy font-semibold hover:text-ckbc-pink">
                hello@creativekidsbibleclub.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-3">Phone</h3>
              <p className="text-gray-600 mb-2">Customer support (UK)</p>
              <a href="tel:+441234567890" className="text-ckbc-navy font-semibold hover:text-ckbc-pink">
                +44 (0) 123 456 7890
              </a>
            </div>

            {/* Hours */}
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-3">Hours</h3>
              <p className="text-gray-600 text-sm">
                Monday - Friday<br />9:00 AM - 5:00 PM GMT<br />(Closed weekends)
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-6">
                Send us a Message
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Have a question about our devotionals, club membership, or anything else? Fill out the form and we'll get back to you as soon as possible!
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We typically respond to inquiries within 24 business hours.
              </p>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  ✓ Thank you! We've received your message and will be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-semibold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ckbc-navy"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ckbc-navy"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-semibold text-gray-700 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ckbc-navy"
                    placeholder="+44 (0)123 456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ckbc-navy"
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="club">Club Membership</option>
                    <option value="order">Order Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="event">Event Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ckbc-navy"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button type="submit" className="w-full btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info Panel */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-8">
                Other Ways to Connect
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-3">
                    Partnership Inquiry
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Interested in partnering with CKBC? We collaborate with churches, schools, and educational organizations.
                  </p>
                  <a
                    href="mailto:partnerships@creativekidsbibleclub.com"
                    className="text-ckbc-navy font-semibold hover:text-ckbc-pink"
                  >
                    partnerships@creativekidsbibleclub.com
                  </a>
                </div>

                <div>
                  <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-3">
                    Follow on Social Media
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Connect with us for daily inspiration, behind-the-scenes content, and community updates.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-ckbc-navy text-white rounded-full flex items-center justify-center hover:bg-ckbc-pink transition"
                    >
                      f
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-ckbc-navy text-white rounded-full flex items-center justify-center hover:bg-ckbc-pink transition"
                    >
                      📷
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-ckbc-navy text-white rounded-full flex items-center justify-center hover:bg-ckbc-pink transition"
                    >
                      ▶
                    </a>
                    <a
                      href="https://pinterest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-ckbc-navy text-white rounded-full flex items-center justify-center hover:bg-ckbc-pink transition"
                    >
                      📌
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-3">
                    Newsletter
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Subscribe to our newsletter for exclusive content, discounts, and updates delivered to your inbox.
                  </p>
                  <form className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ckbc-navy"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-ckbc-pink text-white rounded-lg hover:bg-ckbc-navy transition font-semibold"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>

                <div className="bg-gradient-to-br from-ckbc-navy/5 to-ckbc-pink/5 p-6 rounded-lg border-l-4 border-ckbc-navy">
                  <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-2">
                    💡 Tip
                  </h3>
                  <p className="text-gray-700">
                    For fastest response, check out our FAQ section in the Shop or Club pages—we might have already answered your question!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <details className="bg-white p-6 rounded-lg cursor-pointer group">
              <summary className="font-poppins font-bold text-lg text-ckbc-navy flex justify-between items-center">
                How long does it take to receive printed books?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee. We ship from our UK-based fulfillment center.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg cursor-pointer group">
              <summary className="font-poppins font-bold text-lg text-ckbc-navy flex justify-between items-center">
                Can I use CKBC materials in my church or school?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Yes! We offer group licensing for churches, schools, and organizations. Please contact our partnerships team for special pricing and bulk discounts.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg cursor-pointer group">
              <summary className="font-poppins font-bold text-lg text-ckbc-navy flex justify-between items-center">
                What if I'm not satisfied with my purchase?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                We offer a 30-day satisfaction guarantee. If you're not happy with your purchase, simply reach out and we'll provide a full refund.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg cursor-pointer group">
              <summary className="font-poppins font-bold text-lg text-ckbc-navy flex justify-between items-center">
                Do you offer international shipping?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                Yes! We ship internationally. Rates and delivery times vary by location. Contact us for a shipping quote to your country.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg cursor-pointer group">
              <summary className="font-poppins font-bold text-lg text-ckbc-navy flex justify-between items-center">
                How can I update my club membership?
                <span className="group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-gray-600 mt-4">
                You can manage your club membership from your account dashboard, or contact our support team for assistance with upgrades or downgrades.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-ckbc-navy to-ckbc-pink text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-3xl mb-6">
            We're Here to Help
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Whether you have a quick question or need detailed support, our team is ready to assist
          </p>
          <p className="text-white/80">
            Response time: Usually within 24 business hours
          </p>
        </div>
      </section>
    </div>
  );
}
