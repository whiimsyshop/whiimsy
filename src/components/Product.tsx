"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const products = [
  { name: "Soy Candles", img: "/home/category/candles.png" },
  { name: "Bulk Orders", img: "/home/category/bulk.png" },
  { name: "Ceramic Vases", img: "/home/category/ceramic.png" },
  { name: "Candle Pouring", img: "/home/category/pouring.png" },
  { name: "Fragrance Bar", img: "/home/category/bar.png" },
  { name: "Live Events", img: "/home/category/event.png" },
  { name: "Ceramic Tray", img: "/home/category/ceramic.png" },
  { name: "Gift Boxes", img: "/home/category/gift.png" },
  { name: "Ceramic Diffuser", img: "/home/category/diffuser.png" },
  { name: "Wax Melts", img: "/home/category/melts.png" },
];

const ProductCarousel = () => {
  return (
    <section className="py-10 text-center pb-20"> {/* Extra padding for pagination */}
      <h2 className="text-3xl font-semibold mb-8">SHOP BY PRODUCTS</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="pb-16" /* Adds space for pagination dots */
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center text-center">
            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg flex items-center justify-center">
              <Image
                src={product.img}
                alt={product.name}
                width={224}
                height={224}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 w-full"> {/* Ensures consistent text placement */}
              <p className="text-lg font-medium">{product.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductCarousel;
