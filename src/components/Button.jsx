import { Button } from './styled/Button.styled';
import PropTypes from 'prop-types';

export function LoadMoreBtn({ onClick }) {
  return (
    <Button type="button" onClick={onClick}>
      Load more
    </Button>
  );
}

LoadMoreBtn.propTypes = { onClick: PropTypes.func.isRequired };
