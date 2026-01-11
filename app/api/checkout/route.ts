// app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

interface CartItem {
  id: string;
  title: string;
  price: number;
  subtitle?: string;
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe(); // ✅ Runtime initialization
    
    const body = await req.json();
    const { items } = body as { items: CartItem[] };

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty or invalid' },
        { status: 400 }
      );
    }

    const lineItems = items.map((item) => {
      const productData = {
        name: item.title,
        ...(item.subtitle?.trim() && { description: item.subtitle.trim() }),
      };

      return {
        price_data: {
          currency: 'gbp',
          product_data: productData,
          unit_amount: Math.round(item.price * 100),
        },
        quantity: Math.max(1, item.quantity || 1),
      };
    });

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

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error: any) {
    console.error('Stripe Checkout Error:', error);
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: error?.statusCode || 500 }
    );
  }
}