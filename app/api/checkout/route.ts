// app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-12-15.clover',
});

interface CartItem {
  id: string;
  title: string;
  price: number;
  subtitle?: string;
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json() as { items: CartItem[] };

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items in cart' },
        { status: 400 }
      );
    }

    // Create line items for Stripe
    const lineItems = items.map((item) => {
      const productData: { name: string; description?: string } = {
        name: item.title,
      };

      // Only add description if it exists and is not empty
      if (item.subtitle && item.subtitle.trim() !== '') {
        productData.description = item.subtitle;
      }

      return {
        price_data: {
          currency: 'gbp',
          product_data: productData,
          unit_amount: Math.round(item.price * 100), // Convert to pence
        },
        quantity: item.quantity || 1,
      };
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/#devotionals`,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['GB', 'US', 'CA', 'AU'],
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
};