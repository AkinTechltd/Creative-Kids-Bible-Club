// app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// ────────────────────────────────────────────────
// Best practice: Initialize Stripe as a singleton
// Do NOT create new instance on every request
// ────────────────────────────────────────────────
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  // Use the version that matches your dashboard / features
  apiVersion: '2025-12-15.clover',
  // Optional: helps with TypeScript + future-proofing
  typescript: true,
});

// Optional but strongly recommended guard
if (!process.env.STRIPE_SECRET_KEY) {
  console.error('Missing STRIPE_SECRET_KEY environment variable');
  // In production Vercel will fail build anyway, but this makes local dev clearer
}

interface CartItem {
  id: string;
  title: string;
  price: number;
  subtitle?: string;
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    // Parse and validate incoming JSON
    const body = await req.json();
    const { items } = body as { items: CartItem[] };

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty or invalid' },
        { status: 400 }
      );
    }

    // Transform cart items → Stripe line items
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
      (item) => {
        const productData: Stripe.Checkout.SessionCreateParams.LineItem.PriceData.ProductData = {
          name: item.title,
        };

        // Add subtitle/description only if it exists and isn't just whitespace
        if (item.subtitle?.trim()) {
          productData.description = item.subtitle.trim();
        }

        return {
          price_data: {
            currency: 'gbp',
            product_data: productData,
            unit_amount: Math.round(item.price * 100), // pence
          },
          quantity: Math.max(1, item.quantity || 1), // prevent zero/negative qty
        };
      }
    );

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',

      // Important: Use absolute URLs in production
      success_url: `${req.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/#devotionals`,

      // Recommended settings
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['GB', 'US', 'CA', 'AU'],
      },

      // Optional but very useful:
      // metadata: {
      //   orderId: someOrderId,
      //   userId: user?.id,
      // },
    });

    // Return the Checkout URL to the frontend
    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error: any) {
    console.error('Stripe Checkout Error:', error);

    const errorMessage =
      error instanceof Error ? error.message : 'Internal server error';

    return NextResponse.json(
      { error: errorMessage },
      { status: error?.statusCode || 500 }
    );
  }
}