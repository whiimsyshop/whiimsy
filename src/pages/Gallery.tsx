import ImageGallery from "@/components/ImageGallery";

const Gallery = () => {
  return (
    <div className="container mx-auto p-6">
      <ImageGallery priority={true} loading="eager" />
    </div>
  );
};

export default Gallery;
