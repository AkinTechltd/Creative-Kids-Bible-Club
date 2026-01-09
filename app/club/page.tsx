'use client';

import Hero from '@/components/Hero';
import FeatureBox from '../../components/FeatureBox';
import Link from 'next/link';

export default function ClubPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      {/* <Hero
        title="Join the CKBC Community"
        subtitle="Connect with families worldwide in our global platform dedicated to family discipleship"
      /> */}

      {/* What is the Club */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-ckbc-navy mb-6">
                The CKBC Experience
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Beyond our devotional materials, we've created a vibrant global platform where families can connect, share their spiritual journeys, and support one another in discipleship.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The CKBC Club is more than just a community—it's a movement of families committed to making faith active, engaged, and genuinely joyful.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're looking for encouragement, resources, or connections with families on the same journey, the club has something special for you.
              </p>
            </div>
            <div className="bg-gradient-to-br from-ckbc-navy to-ckbc-pink rounded-lg h-96 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🌍</div>
                <p className="font-poppins font-bold text-xl">Global Community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Club Features */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            What You Get as a Member
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureBox
              icon="📚"
              title="Exclusive Resources"
              description="Access to bonus materials, printable worksheets, crafting templates, and extended learning activities not included in standard devotionals."
            />
            <FeatureBox
              icon="🎥"
              title="Video Teachings"
              description="Watch Queeneth and guest educators lead live and recorded teaching sessions, workshops, and spiritual discussions tailored to family discipleship."
            />
            <FeatureBox
              icon="👥"
              title="Community Forum"
              description="Connect with parents worldwide, share experiences, ask questions, and encourage each other on your faith journey."
            />
            <FeatureBox
              icon="🌟"
              title="Monthly Challenges"
              description="Participate in themed spiritual growth challenges, creative activities, and family faith experiments designed to deepen your connection."
            />
            <FeatureBox
              icon="💌"
              title="Member Newsletter"
              description="Receive exclusive tips, encouragement, featured family stories, and previews of upcoming content delivered to your inbox."
            />
            <FeatureBox
              icon="🎁"
              title="Special Offers"
              description="Enjoy member-only discounts on new releases, bundles, and access to limited edition materials celebrating special seasons."
            />
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            Stories From Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border-l-4 border-ckbc-navy">
              <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-3">
                The Williams Family (UK)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                "We were struggling to connect as a family spiritually until we discovered CKBC. Now our kids actually ask when devotion time is! The community support has been incredible too."
              </p>
              <p className="text-sm text-gray-600">
                3 children | Year 2 of membership
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-8 border-l-4 border-ckbc-pink">
              <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-3">
                The Rodriguez Family (Spain)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                "The video teachings helped us understand how to have deeper conversations with our kids about faith. We've made so many friends in the community!"
              </p>
              <p className="text-sm text-gray-600">
                4 children | Year 1 of membership
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 border-l-4 border-teal-500">
              <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-3">
                The Thompson Family (Australia)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                "As a busy homeschooling family, CKBC fits perfectly into our routine. The monthly challenges keep us excited about what's coming next."
              </p>
              <p className="text-sm text-gray-600">
                2 children | Year 1 of membership
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 border-l-4 border-purple-500">
              <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-3">
                The Chen Family (Singapore)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                "We love how culturally adaptable the materials are. The bonus resources help us contextualize lessons for our family, and the community is so welcoming!"
              </p>
              <p className="text-sm text-gray-600">
                2 children | Year 2 of membership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Teaching */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-ckbc-navy to-ckbc-pink text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl mb-6">
                Local Teaching Sessions
              </h2>
              <p className="text-white/90 mb-4 leading-relaxed">
                Beyond our online community, Queeneth occasionally leads hands-on teaching sessions in select locations, bringing the CKBC experience to life in person.
              </p>
              <p className="text-white/90 mb-6 leading-relaxed">
                These intimate gatherings combine group activities, direct engagement, and community building—creating memories that deepen your family's faith journey.
              </p>
              <p className="text-white/90 mb-6 leading-relaxed">
                Sign up for our mailing list to be notified about upcoming events in your region.
              </p>
              <button className="px-6 py-3 bg-white text-ckbc-navy rounded-lg font-poppins font-bold hover:bg-gray-100 transition-all">
                Get Event Notifications
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <h3 className="font-poppins font-bold text-xl mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="border-b border-white/30 pb-4">
                  <p className="font-semibold">London Spring Gathering</p>
                  <p className="text-white/80 text-sm">April 15-16, 2024</p>
                </div>
                <div className="border-b border-white/30 pb-4">
                  <p className="font-semibold">Manchester Summer Workshop</p>
                  <p className="text-white/80 text-sm">July 20-21, 2024</p>
                </div>
                <div className="border-b border-white/30 pb-4">
                  <p className="font-semibold">Edinburgh Community Celebration</p>
                  <p className="text-white/80 text-sm">September 28-29, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            Club Membership Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="border-2 border-gray-300 rounded-lg p-8 hover:border-ckbc-navy transition">
              <h3 className="font-poppins font-bold text-2xl text-ckbc-navy mb-2">
                Free Access
              </h3>
              <p className="text-gray-600 mb-6">Get started with the basics</p>
              <p className="font-poppins font-bold text-2xl text-ckbc-navy mb-6">
                $0<span className="text-sm text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-ckbc-pink">✓</span>
                  <span>Monthly newsletter</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ckbc-pink">✓</span>
                  <span>Community forum access</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ckbc-pink">✓</span>
                  <span>Event announcements</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-300">✗</span>
                  <span className="text-gray-300">Exclusive resources</span>
                </li>
              </ul>
              <button className="w-full btn-outline">Get Started</button>
            </div>

            {/* Premium Tier */}
            <div className="border-2 border-ckbc-navy rounded-lg p-8 shadow-lg bg-gradient-to-br from-ckbc-navy/5 to-ckbc-pink/5 transform scale-105">
              <div className="bg-ckbc-navy text-white px-3 py-1 rounded-full w-fit mb-4 text-xs font-bold">
                MOST POPULAR
              </div>
              <h3 className="font-poppins font-bold text-2xl text-ckbc-navy mb-2">
                Premium
              </h3>
              <p className="text-gray-600 mb-6">Full community experience</p>
              <p className="font-poppins font-bold text-2xl text-ckbc-navy mb-6">
                $9.99<span className="text-sm text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-ckbc-pink">✓</span>
                  <span>All free features</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ckbc-pink">✓</span>
                  <span>Exclusive video teachings</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ckbc-pink">✓</span>
                  <span>Bonus resources & templates</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ckbc-pink">✓</span>
                  <span>Monthly challenges</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ckbc-pink">✓</span>
                  <span>Member discounts</span>
                </li>
              </ul>
              <button className="w-full btn-primary">Upgrade Now</button>
            </div>

            {/* Family Tier */}
            <div className="border-2 border-gray-300 rounded-lg p-8 hover:border-ckbc-navy transition">
              <h3 className="font-poppins font-bold text-2xl text-ckbc-navy mb-2">
                Family Bundle
              </h3>
              <p className="text-gray-600 mb-6">Best for multiple families</p>
              <p className="font-poppins font-bold text-2xl text-ckbc-navy mb-6">
                $24.99<span className="text-sm text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-6 text-gray-600">
                <li className="flex gap-2">
                  <span className="text-ckbc-pink">✓</span>
                  <span>All premium features</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ckbc-pink">✓</span>
                  <span>Up to 5 family accounts</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ckbc-pink">✓</span>
                  <span>Extra resource downloads</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ckbc-pink">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-ckbc-pink">✓</span>
                  <span>Exclusive family perks</span>
                </li>
              </ul>
              <button className="w-full btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl text-ckbc-navy mb-12 text-center">
            Club Membership FAQ
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-ckbc-pink">
              <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-600">
                Yes! There are no long-term contracts. You can cancel your membership at any time with no questions asked.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-ckbc-pink">
              <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-2">
                Do I get access to all past content?
              </h3>
              <p className="text-gray-600">
                Absolutely! When you join, you get access to our entire library of past resources, video teachings, and archived content.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-ckbc-pink">
              <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-2">
                Is the community moderated?
              </h3>
              <p className="text-gray-600">
                Yes, we maintain a safe, welcoming environment for all families. Our community guidelines ensure respectful discussions focused on faith and support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-ckbc-pink">
              <h3 className="font-poppins font-bold text-lg text-ckbc-navy mb-2">
                Can church groups use CKBC?
              </h3>
              <p className="text-gray-600">
                Yes! We offer group licensing for churches, youth groups, and community organizations. Contact us for special pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-ckbc-navy to-ckbc-pink text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Join a Thriving Community
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Start with free access and explore the full community experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-ckbc-navy rounded-lg font-poppins font-bold hover:bg-gray-100 transition-all">
              Join Free Today
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-poppins font-bold hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
