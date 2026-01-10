// lib/stripe.ts     ← create this file (or utils/stripe.ts)
import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error(
    'STRIPE_SECRET_KEY is missing! Add it to .env.local and Vercel environment variables.'
  );
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-12-15.clover',
  // typescript: true,    // optional, but nice if you like stricter types
});