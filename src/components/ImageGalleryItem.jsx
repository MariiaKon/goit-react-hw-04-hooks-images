import { useState } from 'react';
import { ImageGalleryItemCss, Image } from './styled/ImageGalleryItem.styled';
import { Modal } from './Modal';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ image }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ImageGalleryItemCss>
        <Image
          src={image.webformatURL}
          alt={image.tags}
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
      </ImageGalleryItemCss>
      {isModalOpen && (
        <Modal
          closeModal={() => {
            setIsModalOpen(false);
          }}
          image={image}
        />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
