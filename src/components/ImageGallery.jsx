import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGalleryCss } from './styled/ImageGallery.styled';
import PropTypes from 'prop-types';

export function ImageGallery({ images }) {
  return (
    <ImageGalleryCss>
      {images.map(img => {
        return <ImageGalleryItem key={img.id} image={img} />;
      })}
    </ImageGalleryCss>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
