import { Overlay, ModalCss } from './styled/Modal.styled';
import PropTypes from 'prop-types';

export function Modal({ closeModal, image }) {
  return (
    <Overlay onClick={closeModal}>
      <ModalCss>
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
