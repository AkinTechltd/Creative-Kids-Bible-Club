// app/api/devotionals/route.ts
import { NextResponse } from 'next/server';
import { getDevotionalBooks, getBundleInfo } from '../../../lib/contentful';

export async function GET() {
  try {
    const [books, bundle] = await Promise.all([
      getDevotionalBooks(),
      getBundleInfo(),
    ]);

    return NextResponse.json({
      books,
      bundle,
    });
  } catch (error) {
    console.error('Error in devotionals API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch devotionals' },
      { status: 500 }
    );
  }
}