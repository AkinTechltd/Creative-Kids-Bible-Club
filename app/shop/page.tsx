'use client';

import Hero from '../../components/Hero';
import { useState } from 'react';
import Link from 'next/link';

export default function ShopPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Volume 1: Early Foundations',
      price: 24.99,
      pdfPrice: 14.99,
      description: 'January - April | 90+ days of devotions',
      volume: 1,
      color: 'bg-ckbc-navy',
    },
    {
      id: 2,
      name: 'Volume 2: Growing Stronger',
      price: 24.99,
      pdfPrice: 14.99,
      description: 'May - August | 92+ days of devotions',
      volume: 2,
      color: 'bg-ckbc-pink',
    },
    {
      id: 3,
      name: 'Volume 3: Year-End Reflections',
      price: 24.99,
      pdfPrice: 14.99,
      description: 'September - December | 90+ days of devotions',
      volume: 3,
      color: 'bg-teal-500',
    },
    {
      id: 4,
      name: 'Complete Set (All 3 Volumes)',
      price: 69.99,
      pdfPrice: 39.99,
      description: 'Full year of devotions - Save $5',
      volume: 'all',
      color: 'bg-gradient-to-r from-ckbc-navy to-ckbc-pink',
    },
  ];

  const addToCart = (product: any, format: 'print' | 'pdf') => {
    const item = {
      ...product,
      format,
      price: format === 'print' ? product.price : product.pdfPrice,
      cartId: Math.random(),
    };
    setCart([...cart, item]);
  };

  const removeFromCart = (cartId: number) => {
    setCart(cart.filter((item) => item.cartId !== cartId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="min-h-screen">
      {/* Hero
      // <Hero
      //   title="Shop"
      //   subtitle="Get your devotional volumes and start transforming your family's faith journey"
      //   accent
      // /> */}

      {/* Products */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Product Preview */}
                <div className={`${product.color} h-48 flex items-center justify-center`}>
                  <div className="text-white text-center">
                    {typeof product.volume === 'number' ? (
                      <>
                        <h3 className="font-poppins font-bold text-3xl">Volume {product.volume}</h3>
                        <p className="text-white/80">{product.description}</p>
                      </>
                    ) : (
                      <>
                        <h3 className="font-poppins font-bold text-3xl">Complete Set</h3>
                        <p className="text-white/80">All Volumes 1-3</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <h3 className="font-poppins font-bold text-2xl text-ckbc-navy mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">{product.description}</p>

                  {/* Format Options */}
                  <div className="space-y-3 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name={`format-${product.id}`} value="print" defaultChecked />
                          <span className="font-semibold text-gray-700">Printed Book</span>
                        </label>
                        <span className="font-poppins font-bold text-ckbc-navy">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 ml-6">Premium hardcover, full color, arrives in 3-5 days</p>
                      <button
                        onClick={() => addToCart(product, 'print')}
                        className="w-full mt-2 px-4 py-2 bg-ckbc-navy text-white rounded hover:bg-ckbc-pink transition text-sm font-semibold"
                      >
                        Add Print to Cart
                      </button>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name={`format-${product.id}`} value="pdf" />
                          <span className="font-semibold text-gray-700">Digital PDF</span>
                        </label>
                        <span className="font-poppins font-bold text-ckbc-pink">
                          ${product.pdfPrice.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 ml-6">Instant download, all devices, printable</p>
                      <button
                        onClick={() => addToCart(product, 'pdf')}
                        className="w-full mt-2 px-4 py-2 bg-ckbc-pink text-white rounded hover:bg-ckbc-navy transition text-sm font-semibold"
                      >
                        Add PDF to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            Why Our Customers Choose CKBC
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-poppins font-bold text-ckbc-navy mb-2">Quality Content</h3>
              <p className="text-sm text-gray-600">
                Carefully crafted by educators and spiritual leaders
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-poppins font-bold text-ckbc-navy mb-2">Quick Delivery</h3>
              <p className="text-sm text-gray-600">
                Print books ship in 3-5 days, PDFs instant
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-poppins font-bold text-ckbc-navy mb-2">Great Value</h3>
              <p className="text-sm text-gray-600">
                365 days of content for less than $1 per day
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-poppins font-bold text-ckbc-navy mb-2">Support</h3>
              <p className="text-sm text-gray-600">
                Dedicated customer service team ready to help
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping & Returns */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            Shipping & Returns
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-4">Printed Books</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-ckbc-pink">•</span>
                  <span>Standard Shipping (3-5 days): Free over $30</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink">•</span>
                  <span>Express Shipping (1-2 days): $9.99</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink">•</span>
                  <span>UK-based fulfillment for fast delivery</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink">•</span>
                  <span>International shipping available</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-4">Digital PDFs</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-ckbc-pink">•</span>
                  <span>Instant download upon purchase</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink">•</span>
                  <span>Access on any device forever</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink">•</span>
                  <span>Print at home anytime</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink">•</span>
                  <span>30-day satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Deals */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-ckbc-navy to-ckbc-pink text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-3xl mb-6">Save More with Bundles</h2>
          <p className="text-white/90 text-lg mb-8">
            Get all three volumes and save on your complete annual curriculum
          </p>
          <div className="bg-white/10 backdrop-blur p-8 rounded-lg max-w-md mx-auto">
            <p className="text-white/80 mb-4">Bundle Pricing:</p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>All Print Books:</span>
                <span className="font-bold">$69.99 (Save $5)</span>
              </div>
              <div className="flex justify-between">
                <span>All Digital PDFs:</span>
                <span className="font-bold">$39.99 (Save $5)</span>
              </div>
              <div className="flex justify-between">
                <span>Mixed Bundle:</span>
                <span className="font-bold">Custom pricing</span>
              </div>
            </div>
            <Link href="#" className="inline-block btn-secondary w-full text-center">
              Select Complete Set
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-ckbc-pink p-6 bg-gray-50 rounded">
              <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-2">
                What age group are these designed for?
              </h3>
              <p className="text-gray-600">
                Our devotionals are designed for families with children ages 5-15. Activities can be adapted for different age levels within your family.
              </p>
            </div>
            <div className="border-l-4 border-ckbc-pink p-6 bg-gray-50 rounded">
              <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-2">
                Do I need to purchase all three volumes at once?
              </h3>
              <p className="text-gray-600">
                No! You can purchase each volume separately or as a bundle. Many families start with Volume 1 in January and continue through the year.
              </p>
            </div>
            <div className="border-l-4 border-ckbc-pink p-6 bg-gray-50 rounded">
              <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-2">
                Can I print the PDF versions?
              </h3>
              <p className="text-gray-600">
                Absolutely! PDFs are designed to be printed. You have full access to print at home, at your church, or anywhere you'd like.
              </p>
            </div>
            <div className="border-l-4 border-ckbc-pink p-6 bg-gray-50 rounded">
              <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards, PayPal, and other secure payment methods through our checkout system.
              </p>
            </div>
            <div className="border-l-4 border-ckbc-pink p-6 bg-gray-50 rounded">
              <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-2">
                Is there a money-back guarantee?
              </h3>
              <p className="text-gray-600">
                Yes! Both print and digital versions come with a 30-day satisfaction guarantee. If you're not happy, we'll refund your purchase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ckbc-navy mb-6">
            Transform Your Family's Faith Today
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Over 1,000 families are already experiencing the joy of creative discipleship
          </p>
          <p className="text-gray-600 text-lg mb-8">
            <span className="font-bold">⭐⭐⭐⭐⭐ 4.9 out of 5 stars</span> from families like yours
          </p>
          <button className="btn-primary">
            Complete Your Purchase
          </button>
        </div>
      </section>
    </div>
  );
}
