import React from 'react';
import images from './ImageSelector';

const ImageGallery = () => {
  return (
    <div>
      {console.log(images)}
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.name} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
