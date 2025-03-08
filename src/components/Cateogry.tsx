import Image from "next/image";

const categories = 
[
  { name: "Soy Candles", icon: "/home/category/candles.png", link: "" },
  { name: "Bulk Orders", icon: "/home/category/bulk.png", link: "" },
  { name: "Concrete Vases", icon: "/home/category/concrete.png", link: "" },
  { name: "Candle Pouring", icon: "/home/category/pouring.png", link: "" },
  { name: "Fragnance Bar", icon: "/home/category/bar.png", link: "" },
  { name: "Live Events", icon: "/home/category/event.png", link: "" },
  { name: "Concrete Tray", icon: "/home/category/concrete.png",link: "" },
  { name: "Gift Boxes", icon: "/home/category/gift.png", link: "" },
  { name: "Ceramic Diffuser", icon: "/home/category/diffuser.png", link: "" },
  { name: "Wax Melts", icon: "/home/category/melts.png", link: "" },
];
 
const CategorySection = () => {
    return (
      <div className="w-full py-6 pt-[80px]">
        <div className="flex overflow-x-auto space-x-4 px-4 md:justify-center scrollbar-hide">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="flex flex-col items-center space-y-2 p-2 transition-transform transform hover:scale-110"
            >
              {/* Outer Circular Ring */}
              <div className="w-23 h-23 rounded-full border-[0.5px] border-green-600 flex items-center justify-center">
                {/* Inner Circle with Background */}
                <div className="w-20 h-20 rounded-full border-2 border-white bg-green-800 flex items-center justify-center overflow-hidden">
                  {/* Circular Cropped Image */}
                  <Image 
                    src={category.icon} 
                    alt={category.name} 
                    width={64} 
                    height={64} 
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
              </div>
  
              {/* Category Name */}
              <p className="text-sm text-gray-700">{category.name}</p>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default CategorySection;