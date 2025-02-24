import Image from "next/image";

const features = [
  { 
    title: "Lab Tested", 
    description: "Research & Development", 
    icon: "/home/feature/lab.webp" 
  },
  { 
    title: "Premium Wax", 
    description: "High Quality Soy Wax", 
    icon: "/home/feature/fragnance.webp" 
  },
  { 
    title: "Free Shipping", 
    description: "On orders above Rs 1000", 
    icon: "/home/feature/shipping.webp" 
  },
  { 
    title: "24/7 Email Support", 
    description: "whiimsyteam@gmail.com", 
    icon: "/home/feature/mail.webp" 
  },
];

const FeaturesSection = () => {
  return (
    <div className="w-full bg-gray-100 py-8 px-4 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Icon Section */}
            <div className="w-14 h-14 bg-green-800 flex items-center justify-center rounded-md">
  <Image 
    src={feature.icon} 
    alt={feature.title} 
    width={50} 
    height={50} 
    className="w-16 h-16 object-contain"
  />
</div>

            
            {/* Text Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
