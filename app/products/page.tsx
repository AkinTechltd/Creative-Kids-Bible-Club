'use client';

import Hero from '@/components/Hero';
import ProductCard from '../../components/ProductCard';
import FeatureBox from '../../components/FeatureBox';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      {/* <Hero
        title="Devotional Series"
        subtitle="Comprehensive Bible study designed to transform your family's spiritual journey"
      /> */}

      {/* Overview */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-4">
              One Year, Three Volumes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each volume is carefully crafted with 90+ days of content, featuring scripture, creative activities, reflection questions, and parent guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Volumes */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ProductCard
              volume={1}
              title="Early Foundations"
              months="January - April"
              description="Begin the year with spiritual foundations as we explore key biblical principles and establish a strong faith foundation for your family."
              features={[
                'Scripture exploration',
                'Foundation building activities',
                'Parent guidance included',
                'Age-appropriate content',
                '90+ days of devotions',
              ]}
              color="navy"
            />
            <ProductCard
              volume={2}
              title="Growing Stronger"
              months="May - August"
              description="Deepen your faith journey in the heart of the year with transformative lessons that build on earlier foundations."
              features={[
                'Advanced scripture study',
                'Creative application tasks',
                'Community connections',
                'Seasonal celebrations',
                '92+ days of devotions',
              ]}
              color="pink"
            />
            <ProductCard
              volume={3}
              title="Year-End Reflections"
              months="September - December"
              description="Reflect on growth and prepare hearts for the year ahead with powerful teachings and gratitude exercises."
              features={[
                'Comprehensive review',
                'Gratitude exercises',
                'Future planning activities',
                'Holiday integration',
                '90+ days of devotions',
              ]}
              color="teal"
            />
          </div>
          <div className="text-center">
            <Link href="/shop" className="inline-block btn-primary">
              Purchase Now
            </Link>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            What's Inside Each Volume
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-poppins font-bold text-2xl text-ckbc-navy mb-6">
                📖 For Children
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-ckbc-pink font-bold">✓</span>
                  <span><strong>Daily Scripture:</strong> Age-appropriate Bible passages with context</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink font-bold">✓</span>
                  <span><strong>Reflection Questions:</strong> Encourage personal application and critical thinking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink font-bold">✓</span>
                  <span><strong>Creative Activities:</strong> Art projects, puzzles, crafts, and interactive tasks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink font-bold">✓</span>
                  <span><strong>Memory Verses:</strong> Key passages to commit to memory</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink font-bold">✓</span>
                  <span><strong>Fun Illustrations:</strong> Colorful, engaging artwork throughout</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-bold text-2xl text-ckbc-navy mb-6">
                👨‍🏫 For Parents/Guardians
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <span className="text-ckbc-pink font-bold">✓</span>
                  <span><strong>Parent Tips:</strong> Guidance on leading effective discussions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink font-bold">✓</span>
                  <span><strong>Deeper Context:</strong> Biblical background and teaching notes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink font-bold">✓</span>
                  <span><strong>Activity Instructions:</strong> Clear guidance for completing each project</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink font-bold">✓</span>
                  <span><strong>Discussion Starters:</strong> Conversation prompts to deepen engagement</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-ckbc-pink font-bold">✓</span>
                  <span><strong>Resource Lists:</strong> Recommended additional materials and references</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Features */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            Design & Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureBox
              icon="🌈"
              title="Vibrant Design"
              description="Nature-inspired colors and engaging illustrations that capture children's attention and make learning visually appealing."
            />
            <FeatureBox
              icon="📏"
              title="Perfect Length"
              description="Each devotion takes 15-20 minutes—ideal for busy families who want meaningful faith time without overwhelming schedules."
            />
            <FeatureBox
              icon="👨‍👩‍👧‍👦"
              title="Multi-Age Friendly"
              description="Activities can be adapted for ages 5-15, growing with your family year after year as interests change."
            />
          </div>
        </div>
      </section>

      {/* Format Options */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            Available Formats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-ckbc-navy rounded-lg p-8">
              <h3 className="font-poppins font-bold text-2xl text-ckbc-navy mb-4">
                📚 Printed Books
              </h3>
              <p className="text-gray-600 mb-6">
                Beautiful full-color printed volumes perfect for writing notes, marking passages, and physical engagement.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Premium quality paper</li>
                <li>✓ Hardcover binding</li>
                <li>✓ Full-color illustrations</li>
                <li>✓ Space for notes</li>
              </ul>
              <p className="font-poppins font-bold text-ckbc-navy">Perfect for: Physical learning</p>
            </div>
            <div className="border-2 border-ckbc-pink rounded-lg p-8">
              <h3 className="font-poppins font-bold text-2xl text-ckbc-navy mb-4">
                🖥️ Digital Version
              </h3>
              <p className="text-gray-600 mb-6">
                Convenient PDF format accessible on any device, perfect for travel and tech-savvy families.
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>✓ Instant delivery</li>
                <li>✓ Search functionality</li>
                <li>✓ Print-at-home option</li>
                <li>✓ Mobile friendly</li>
              </ul>
              <p className="font-poppins font-bold text-ckbc-pink">Perfect for: Convenience & accessibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-ckbc-navy to-ckbc-pink text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl mb-12 text-center">
            Families Love These Devotionals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <p className="text-white/90 italic mb-4">
                "The creative activities are brilliant. My kids don't even realize they're learning about the Bible—they're just having fun!"
              </p>
              <p className="font-semibold">Lisa T. - Parent</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <p className="text-white/90 italic mb-4">
                "As a children's minister, I recommend CKBC to every family. The quality is outstanding."
              </p>
              <p className="font-semibold">Rev. Marcus J. - Children's Minister</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
              <p className="text-white/90 italic mb-4">
                "We've completed volumes 1 and 2. Our family is counting down the days for volume 3!"
              </p>
              <p className="font-semibold">Sarah M. - Parent</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ckbc-navy mb-6">
            Ready to Transform Your Family's Faith?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Choose your volume and format, and start your 365-day journey today
          </p>
          <Link href="/shop" className="inline-block btn-primary">
            Shop Devotionals
          </Link>
        </div>
      </section>
    </div>
  );
}
