'use client';

import Hero from '@/components/Hero';
import Testimonial from '@/components/Testimonial';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Main Story */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-6">
                Founded by Queeneth Alobo
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What started as a personal passion for helping families experience meaningful Bible study together has grown into a global movement. Queeneth Alobo saw a gap in the market—children's Bible resources that were both engaging AND theologically sound, materials that would keep families excited about faith.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Drawing from years of experience in education and ministry, CKBC was created to fill that need with creativity, joy, and intentionality at every step.
              </p>
            </div>
            <div className="bg-gradient-to-br from-ckbc-navy to-ckbc-pink rounded-lg h-80 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-7xl mb-4">👋</div>
                <p className="font-poppins font-bold text-lg">Meet Queeneth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="w-14 h-14 bg-ckbc-pink/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To transform family discipleship by making Bible study an engaging, joyful, and creative experience for children and their guardians, nurturing consistent spiritual growth through hands-on activity, reflection, and community engagement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <div className="w-14 h-14 bg-ckbc-navy/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-3">
                Our Core Values
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>✓ <strong>Creativity:</strong> Making faith fun and memorable</li>
                <li>✓ <strong>Authenticity:</strong> Grounded in scripture and tradition</li>
                <li>✓ <strong>Family-Centered:</strong> Designed for all ages</li>
                <li>✓ <strong>Community:</strong> Building connections globally</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-3">
                Devotional Series
              </h3>
              <p className="text-gray-600">
                Three comprehensive volumes (365 days total) with scripture, creative activities, reflection questions, and parent tips.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-3">
                Global Community
              </h3>
              <p className="text-gray-600">
                Connect with families from 50+ countries, share experiences, and grow together in faith through our digital platform.
              </p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-3">
                Exclusive Content
              </h3>
              <p className="text-gray-600">
                Video teachings, resource libraries, and member-only workshops led by experienced educators and spiritual leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-ckbc-navy to-ckbc-pink text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl mb-12 text-center">
            Our Growing Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-poppins font-bold text-4xl mb-2">1000+</p>
              <p>Families Served</p>
            </div>
            <div className="text-center">
              <p className="font-poppins font-bold text-4xl mb-2">50+</p>
              <p>Countries</p>
            </div>
            <div className="text-center">
              <p className="font-poppins font-bold text-4xl mb-2">365</p>
              <p>Days of Devotions</p>
            </div>
            <div className="text-center">
              <p className="font-poppins font-bold text-4xl mb-2">4.9★</p>
              <p>Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CKBC */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            Why Families Choose CKBC
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow flex gap-4">
              <div className="text-4xl flex-shrink-0">🎨</div>
              <div>
                <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-2">
                  Engagement Over Perfection
                </h3>
                <p className="text-gray-600">
                  We prioritize keeping children interested and parents encouraged, even if activities get messy. Faith should be fun!
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex gap-4">
              <div className="text-4xl flex-shrink-0">🔗</div>
              <div>
                <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-2">
                  Age-Appropriate Progression
                </h3>
                <p className="text-gray-600">
                  Designed to grow with your family, with activities suitable for young children through teenagers.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex gap-4">
              <div className="text-4xl flex-shrink-0">⏱️</div>
              <div>
                <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-2">
                  Time-Efficient
                </h3>
                <p className="text-gray-600">
                  Each devotion takes 15-20 minutes, perfect for busy families who still want to prioritize faith together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            What Families Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              quote="CKBC has been transformative for our family. Our kids actually ask when we're doing devotions next!"
              author="Michael P."
              title="Father of 2"
            />
            <Testimonial
              quote="The quality of the content combined with the creative activities is unmatched. Highly recommend!"
              author="Jessica L."
              title="Homeschool Mom"
            />
            <Testimonial
              quote="We've used CKBC with our youth group and the engagement is incredible. Kids love it!"
              author="Pastor David"
              title="Youth Minister"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-ckbc-navy to-ckbc-pink text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Ready to Start Your Family's Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of families transforming their faith experience with Creative Kids Bible Club
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-white text-ckbc-navy rounded-lg font-poppins font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
}
