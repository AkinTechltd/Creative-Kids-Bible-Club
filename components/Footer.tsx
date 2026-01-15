'use client';

import { Send } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-[#2e3973]">
        <div className="grid md:grid-cols-2 gap-10 mb-8">
          <div>
            <Image
              src='/images/LOGO.png'
              alt='Creative Kids Bible Club Logo'
              width={150}
              height={75}
              className="mb-4"
            />
            <p className='max-w-sm'>
              Transforming family discipleship through creative, engaging Bible study.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul>
              <li><a href="#home" className=" transition">Home</a></li>
              <li><a href="#about" className="ttransition">About</a></li>
              <li><a href="#devotionals" className="transition">Devotionals</a></li>
              <li><a href="#community" className="transition">Community</a></li>
            </ul>
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
