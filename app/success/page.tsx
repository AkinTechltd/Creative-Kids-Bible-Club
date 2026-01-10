'use client'

import React, { useEffect, useState, Suspense } from 'react';
import { Check, Download, Mail, Home } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const SuccessContent = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      // Optionally fetch session details from your backend
      fetch(`/api/checkout/verify?session_id=${sessionId}`)
        .then(res => res.json())
        .then(data => {
          setOrderDetails(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-[3rem] p-12 shadow-2xl text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={48} className="text-green-600" />
          </div>

          {/* Heading */}
          <h1 className="font-['Young_Serif'] text-4xl md:text-5xl text-[#2e3973] mb-4">
            Thank You for Your Order!
          </h1>

          <p className="font-['Poppins'] text-gray-600 text-lg mb-8">
            Your payment was successful. We're excited to support your family's faith journey!
          </p>

          {/* Order Details */}
          {!loading && sessionId && (
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
              <h3 className="font-['Poppins'] font-bold text-[#2e3973] mb-3">Order Confirmation</h3>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Order ID:</span> {sessionId.slice(0, 20)}...
              </p>
              <p className="text-sm text-gray-600">
                A confirmation email has been sent to your inbox with download links and next steps.
              </p>
            </div>
          )}

          {/* What's Next */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <h3 className="font-['Young_Serif'] text-2xl text-[#2e3973] mb-6">What's Next?</h3>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-['Poppins'] font-bold text-[#2e3973] mb-1">Check Your Email</h4>
                  <p className="text-sm text-gray-600">Your receipt and download links are waiting in your inbox.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Download size={24} className="text-orange-600" />
                </div>
                <div>
                  <h4 className="font-['Poppins'] font-bold text-[#2e3973] mb-1">Download & Print</h4>
                  <p className="text-sm text-gray-600">Get your devotionals ready for your family time.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="font-['Poppins'] bg-[#2e3973] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#2e3973]/90 transition-all inline-flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Back to Home
            </a>
            <a
              href="mailto:info@creativekidsbibleclub.com"
              className="font-['Poppins'] bg-gray-100 text-[#2e3973] px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contact Support
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="font-['Poppins'] text-sm text-gray-500">
            Need help? Email us at{' '}
            <a href="mailto:info@creativekidsbibleclub.com" className="text-[#f0614b] font-semibold hover:underline">
              info@creativekidsbibleclub.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const SuccessPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl w-full bg-white rounded-[3rem] p-12 shadow-2xl text-center min-h-[400px] flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full mb-4"></div>
            <div className="h-4 w-48 bg-gray-100 rounded mb-2"></div>
            <div className="h-4 w-32 bg-gray-100 rounded"></div>
          </div>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
};

export default SuccessPage;