interface TestimonialProps {
  quote: string;
  author: string;
  title?: string;
  image?: string;
}

export default function Testimonial({
  quote,
  author,
  title,
  image,
}: TestimonialProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-ckbc-pink">
      <svg
        className="w-8 h-8 text-ckbc-pink mb-4"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-6 0-8.812 3.114-9 6.034-2.857 9.835 8.235 12 9 13s-4 2-7 2z" />
      </svg>
      <p className="text-gray-700 italic mb-6 text-lg">{quote}</p>
      <div className="flex items-center space-x-4">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-poppins font-bold text-ckbc-navy">{author}</p>
          {title && <p className="text-gray-600 text-sm">{title}</p>}
        </div>
      </div>
    </div>
  );
}
