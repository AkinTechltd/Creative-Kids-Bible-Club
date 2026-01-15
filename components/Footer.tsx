'use client';

import { Send } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-[#2e3973]">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Image
              src='/images/LOGO.png'
              alt='Creative Kids Bible Club Logo'
              width={150}
              height={75}
              className="mb-4"
            />
            <p>
              Transforming family discipleship through creative, engaging Bible study.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className=" transition">Home</a></li>
              <li><a href="#about" className="ttransition">About</a></li>
              <li><a href="#devotionals" className="transition">Devotionals</a></li>
              <li><a href="#community" className="transition">Community</a></li>
            </ul>
          </div>
         
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="mb-4">
              Get weekly tips and resources for family discipleship
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-full text-gray-900 border border-[#2e3973] focus:outline-none"
              />
              <button className="bg-[#2e3973] hover:bg-[#d01440] p-2 rounded-full transition">
                <Send size={20}  className='text-gray-50'/>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#2e3973] pt-8 text-center">
          <p>{currentYear} Creative Kids Bible Club. All rights reserved.</p>
          <p className="mt-2">Founded by Queeneth Alobo</p>
        </div>
      </div>
    </footer>
  );
}
