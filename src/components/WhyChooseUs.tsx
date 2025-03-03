import Image from "next/image";

const features = [
  { name: "Handmade with Love", icon: "/home/why/a.jpg" },
  { name: "Unique Aroma Blends", icon: "/home/why/b.jpg" },
  { name: "Made in Small Batches", icon: "/home/why/c.jpg" },
  { name: "Cruelty Free Products", icon: "/home/why/d.jpg" },
  { name: "Recycle & Reuse", icon: "/home/why/e.jpg" },
  { name: "Paraben Free", icon: "/home/why/f.jpg" },
];

const WhyChooseUs = () => {
    return (
      <section className="py-10 text-center">
        <h2 className="text-3xl font-semibold mb-8">WHY CHOOSE US?</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center w-36">
              <div className="w-30 h-30 bg-green-700 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                <Image
                  src={feature.icon}
                  alt={feature.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-base font-medium mt-3">{feature.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WhyChooseUs;
