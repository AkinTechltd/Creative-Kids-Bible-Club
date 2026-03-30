'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const posts = [
  {
    issue: 'Vol. I',
    category: 'Family Devotion',
    title: 'How to Make Deuteronomy 6 Come Alive in Your Modern Home',
    deck: 'The command to teach diligently is not just for ancient Israel. Here is how to weave the Word of God into breakfast, car rides, and bedtime in ways children actually remember.',
    readTime: '5 min',
  },
  {
    issue: 'Vol. II',
    category: 'Life Skills & Faith',
    title: 'Balancing Spiritual Growth with Practical Life Skills',
    deck: 'Daniel excelled in wisdom and in the court of the king. Esther navigated an empire with grace. Our children are called to the same — deeply rooted and practically equipped.',
    readTime: '4 min',
  },
  {
    issue: 'Vol. III',
    category: 'Scripture for Kids',
    title: 'Breaking Down Complex Bible Passages for Ages 6–12',
    deck: 'Children are not bored with the Bible — they are bored with complicated explanations of it. A practical guide to simplifying Scripture without losing its power.',
    readTime: '6 min',
  },
  {
    issue: 'Vol. IV',
    category: 'Parenting & Faith',
    title: 'Raising World-Changers: When Your Child Meets the Holy Spirit',
    deck: 'The moment a child moves from knowing about God to knowing Him personally is one no parent forgets. Here is how to create the conditions for that encounter.',
    readTime: '7 min',
  },
]

const Blog = () => {
  return (
    <section id="blog" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Masthead */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-b-4 border-double border-[#2e3973] pb-4 mb-10"
        >
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="font-['Poppins'] text-[10px] font-black uppercase tracking-[0.35em] text-[#f0614b] mb-1">Weekly Insights</p>
              <h2 className="font-['Young_Serif'] text-5xl md:text-7xl text-[#2e3973] leading-none">
                The Discipleship Desk.
              </h2>
            </div>
            <p className="font-['Poppins'] text-sm text-gray-500 max-w-xs leading-relaxed pb-1">
              Weekly encouragement for parents navigating the beautiful journey of raising a supernatural army.
            </p>
          </div>
        </motion.div>

        {/* Article list — broadsheet row layout */}
        <div className="divide-y divide-gray-100">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group grid lg:grid-cols-12 gap-4 lg:gap-8 py-8 hover:bg-gray-50/60 transition-colors -mx-4 px-4"
            >
              {/* Left: issue + category */}
              <div className="lg:col-span-2 flex lg:flex-col gap-3 lg:gap-1 items-center lg:items-start">
                <span className="font-['Young_Serif'] text-sm text-[#f0614b]">{post.issue}</span>
                <span className="font-['Poppins'] text-[10px] font-black uppercase tracking-wider text-gray-400">{post.category}</span>
              </div>

              {/* Centre: title + deck */}
              <div className="lg:col-span-8">
                <h3 className="font-['Young_Serif'] text-xl md:text-2xl text-[#2e3973] leading-snug mb-2 group-hover:text-[#f0614b] transition-colors">
                  {post.title}
                </h3>
                <p className="font-['Poppins'] text-[14px] text-gray-500 leading-relaxed">
                  {post.deck}
                </p>
              </div>

              {/* Right: read time + arrow */}
              <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-2">
                <span className="font-['Poppins'] text-[11px] text-gray-400 font-semibold uppercase tracking-wider">{post.readTime} read</span>
                <span className="font-['Poppins'] text-xs font-bold text-[#f0614b] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read <ArrowRight size={13} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter — flat inline bar, not a card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 border-t-2 border-[#2e3973] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >
          <div>
            <p className="font-['Young_Serif'] text-2xl text-[#2e3973]">Get the Discipleship Desk in your inbox.</p>
            <p className="font-['Poppins'] text-sm text-gray-500 mt-1">New articles every week — free, always.</p>
          </div>
          <a
            href="#contact"
            className="font-['Poppins'] shrink-0 inline-flex items-center gap-2 bg-[#2e3973] text-white px-7 py-3.5 font-bold text-sm hover:bg-[#f0614b] transition-colors border-2 border-[#2e3973] hover:border-[#f0614b] group"
          >
            Subscribe Free
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Blog