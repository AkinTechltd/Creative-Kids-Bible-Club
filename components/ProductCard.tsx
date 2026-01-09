interface ProductCardProps {
  title: string;
  volume: number;
  months: string;
  description: string;
  features: string[];
  image?: string;
  color: 'navy' | 'pink' | 'teal';
}

export default function ProductCard({
  title,
  volume,
  months,
  description,
  features,
  color,
}: ProductCardProps) {
  const colorClasses = {
    navy: 'bg-ckbc-navy',
    pink: 'bg-ckbc-pink',
    teal: 'bg-teal-500',
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className={`${colorClasses[color]} h-32 flex items-center justify-center`}>
        <div className="text-center">
          <h3 className="text-white font-poppins font-bold text-2xl">Volume {volume}</h3>
          <p className="text-white text-sm">{months}</p>
        </div>
      </div>
      <div className="p-6">
        <h4 className="font-poppins font-bold text-xl text-ckbc-navy mb-2">{title}</h4>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-2">
              <svg
                className="w-5 h-5 text-ckbc-pink mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <button className="w-full btn-primary">Learn More</button>
      </div>
    </div>
  );
}
