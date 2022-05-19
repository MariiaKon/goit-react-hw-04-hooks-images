import { Overlay, ModalCss } from './styled/Modal.styled';
import PropTypes from 'prop-types';

export function Modal({ closeModal, image }) {
  (() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    });
  })();

  return (
    <Overlay onClick={closeModal}>
      <ModalCss
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <img src={image.largeImageURL} alt={image.tags} />
      </ModalCss>
    </Overlay>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
