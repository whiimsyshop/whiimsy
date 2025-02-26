"use client";
import React, { useEffect, useState, useCallback } from "react";
import HeaderBox from "./HeaderBox";

const ImageGallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/getImages")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Failed to load images:", err));
  }, []);

  // Function to go to the next image
  const nextImage = useCallback(() => {
    if (selectedIndex !== null && images.length > 0) {
      setSelectedIndex((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : 0));
    }
  }, [selectedIndex, images]);

  // Function to go to the previous image
  const prevImage = useCallback(() => {
    if (selectedIndex !== null && images.length > 0) {
      setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : images.length - 1));
    }
  }, [selectedIndex, images]);

  // Close modal
  const closeModal = () => setSelectedIndex(null);

  // Handle keyboard events for navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex !== null) {
        if (event.key === "ArrowRight") nextImage();
        if (event.key === "ArrowLeft") prevImage();
        if (event.key === "Escape") closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  return (
    <>
      {/* HeaderBox outside the gallery container */}
      <div className="w-full">
        <HeaderBox title="Gallery" />
      </div>

      {/* Image Gallery */}
      <div className="bg-[#faf7f7] p-3 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-32 md:h-40 object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-[90%] max-h-[90%] flex flex-col items-center">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-700 text-2xl"
              onClick={closeModal}
            >
              ✖
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-gray-700 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ❮
            </button>

            {/* Image Display (Reduced Size) */}
            <img
              src={images[selectedIndex]}
              alt={`Gallery ${selectedIndex + 1}`}
              className="max-w-[60vw] max-h-[70vh] object-contain rounded-lg"
            />

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold bg-gray-700 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
