interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureBox({ icon, title, description }: FeatureProps) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-ckbc-pink/10 rounded-full flex items-center justify-center">
          <div className="text-ckbc-pink text-2xl">{icon}</div>
        </div>
      </div>
      <h3 className="font-poppins font-bold text-xl text-ckbc-navy mb-3">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
