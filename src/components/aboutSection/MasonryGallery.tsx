"use client"
import Image from 'next/image';
import React from 'react';
import Masonry from 'react-masonry-css';

interface GalleryProps {
  images: string[];
}

const MasonryGallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="masonry-gallery">
      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <Image
            width={0}
            height={0}
              src={image}
              alt={`Gallery Item ${index}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryGallery;
