/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // If using icons
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Example icon

interface ImageItem {
  src: string;
  alt: string;
  width?: number; // Optional, but recommended
  height?: number; // Optional, but recommended
  overlayIcon?: React.FC<{ className?: string }>; // For icon components
  overlayText?: string;
}

const GalleryGrid: React.FC<{ images: ImageItem[] }> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 500} // Provide default values
            height={image.height || 300} // Provide default values
            className="w-full h-auto rounded-lg object-cover"
            priority={index < 4}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
            {image.overlayIcon && (
              <image.overlayIcon className="text-white text-2xl" />
            )}
            {image.overlayText && (
              <p className="text-white">{image.overlayText}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;

// Example usage:
const MyComponent: React.FC = () => {
  const galleryImages: ImageItem[] = [
    {
      src: "/images/image1.jpg",
      alt: "Description of image 1",
      width: 400, // Example width
      height: 250, // Example height
      overlayIcon: ({ className }) => (
        <FontAwesomeIcon icon={faSearch} className={className} />
      ),
      overlayText: "View Details",
    },
    {
      src: "https://via.placeholder.com/300", // Or a real URL
      alt: "Description of image 2",
      width: 300,
      height: 200,
    },
    // ... more images
  ];

  return (
    <div>
      <GalleryGrid images={galleryImages} />
    </div>
  );
};
