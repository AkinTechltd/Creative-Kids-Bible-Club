// lib/contentful.ts
import { createClient, Entry, Asset, EntrySkeletonType } from 'contentful';

if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Contentful environment variables are not set');
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

// Proper Contentful skeleton types
interface DevotionalBookSkeleton extends EntrySkeletonType {
  contentTypeId: 'creativeKidsClub';
  fields: {
    title: string;
    subtitle?: string;
    period?: string;
    price: number;
    bookCover: Asset;
    features: string[];
  };
}

interface DevotionalBundleSkeleton extends EntrySkeletonType {
  contentTypeId: 'devotionalBundle';
  fields: {
    title: string;
    price: number;
    features?: string[];
  };
}

export type DevotionalBookEntry = Entry<DevotionalBookSkeleton, undefined, string>;
export type DevotionalBundleEntry = Entry<DevotionalBundleSkeleton, undefined, string>;

export interface DevotionalBook {
  id: string;
  title: string;
  subtitle?: string;
  period?: string;
  price: number;
  image?: string;
  color?: string;
  features: string[];
}

export interface BundleInfo {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  bookCount: number;
  features?: string[];
}

// Smart color assignment based on title keywords
function assignColorByTitle(title: string, index: number): string {
  const titleLower = title.toLowerCase();
  
  // Season-based color mapping
  if (titleLower.includes('spring')) return 'bg-[#e8f0fe]'; // Light blue
  if (titleLower.includes('summer')) return 'bg-[#e9f7ef]'; // Light green
  if (titleLower.includes('fall') || titleLower.includes('autumn')) return 'bg-[#fff4ed]'; // Light orange
  if (titleLower.includes('winter')) return 'bg-[#f0f9ff]'; // Sky blue
  
  // Month-based color mapping
  if (titleLower.includes('jan') || titleLower.includes('feb') || titleLower.includes('mar')) {
    return 'bg-[#e8f0fe]'; // Winter/Spring - blue
  }
  if (titleLower.includes('apr') || titleLower.includes('may') || titleLower.includes('jun')) {
    return 'bg-[#e9f7ef]'; // Spring/Summer - green
  }
  if (titleLower.includes('jul') || titleLower.includes('aug') || titleLower.includes('sep')) {
    return 'bg-[#fff4ed]'; // Summer/Fall - orange
  }
  if (titleLower.includes('oct') || titleLower.includes('nov') || titleLower.includes('dec')) {
    return 'bg-[#fef3f2]'; // Fall/Winter - pink
  }
  
  // Fallback: cycle through colors based on index
  const defaultColors = ['bg-[#e8f0fe]', 'bg-[#e9f7ef]', 'bg-[#fff4ed]', 'bg-[#fef3f2]', 'bg-[#f0f9ff]'];
  return defaultColors[index % defaultColors.length];
}

// Smart sorting based on period or creation date
function sortBooksByPeriod(books: DevotionalBookEntry[]): DevotionalBookEntry[] {
  return books.sort((a, b) => {
    const periodA = String(a.fields.period ?? '').toLowerCase();
    const periodB = String(b.fields.period ?? '').toLowerCase();
    
    // Month order for sorting
    const monthOrder = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    
    // Extract first month from period
    const firstMonthA = monthOrder.findIndex(m => periodA.includes(m));
    const firstMonthB = monthOrder.findIndex(m => periodB.includes(m));
    
    // If both have valid months, sort by month
    if (firstMonthA !== -1 && firstMonthB !== -1) {
      return firstMonthA - firstMonthB;
    }
    
    // Otherwise, sort by creation date
    return new Date(a.sys.createdAt).getTime() - new Date(b.sys.createdAt).getTime();
  });
}

export async function getDevotionalBooks(): Promise<DevotionalBook[]> {
  try {
    const entries = await client.getEntries<DevotionalBookSkeleton>({
      content_type: 'creativeKidsClub',
    });

    // Sort books intelligently
    const sortedEntries = sortBooksByPeriod(entries.items as DevotionalBookEntry[]);

    return sortedEntries.map((entry, index) => {
      const fields = entry.fields as DevotionalBookSkeleton['fields'];
      const imageUrl = fields.bookCover?.fields?.file?.url;
      
      // Auto-assign color based on title and index
      const color = assignColorByTitle(fields.title, index);
      
      return {
        id: entry.sys.id,
        title: fields.title,
        subtitle: fields.subtitle,
        period: fields.period,
        price: fields.price,
        image: imageUrl ? `https:${imageUrl}` : undefined,
        color: color,
        features: fields.features || [],
      };
    });
  } catch (error) {
    console.error('Error fetching devotional books from Contentful:', error);
    throw error;
  }
}

export async function getBundleInfo(): Promise<BundleInfo> {
  try {
    // Get all books to calculate bundle pricing
    const books = await getDevotionalBooks();
    const totalPrice = books.reduce((sum, book) => sum + book.price, 0);
    
    // Auto-calculate 20% discount
    const bundlePrice = Math.round(totalPrice * 0.8 * 100) / 100;
    
    return {
      id: 'bundle',
      title: 'Complete Bundle',
      price: bundlePrice,
      originalPrice: totalPrice,
      bookCount: books.length,
      features: [
        '44 Weeks of Lessons',
        'Lifetime Access',
        'Holiday Specials',
        'Printable Activities',
      ],
    };
  } catch (error) {
    console.error('Error fetching bundle info from Contentful:', error);
    throw error;
  }
}

// Helper function to get a single book by ID
export async function getDevotionalBookById(id: string): Promise<DevotionalBook | null> {
  try {
    const entry = await client.getEntry<DevotionalBookSkeleton>(id);
    
    if (!entry) return null;

    const fields = entry.fields as DevotionalBookSkeleton['fields'];
    const imageUrl = fields.bookCover?.fields?.file?.url;
    
    return {
      id: entry.sys.id,
      title: fields.title,
      subtitle: fields.subtitle,
      period: fields.period,
      price: fields.price,
      image: imageUrl ? `https:${imageUrl}` : undefined,
      color: assignColorByTitle(fields.title, 0),
      features: fields.features || [],
    };
  } catch (error) {
    console.error(`Error fetching book ${id} from Contentful:`, error);
    return null;
  }
}