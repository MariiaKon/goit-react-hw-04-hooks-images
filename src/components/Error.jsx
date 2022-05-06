import { ErrorCss } from './styled/Error.styled';
import PropTypes from 'prop-types';

export const Error = ({ children }) => {
  return (
    <ErrorCss>
      <p>Oops, something went wrong. Please, try again.</p>
      <p>
        Error message: <span>"{children}"</span>
      </p>
    </ErrorCss>
  );
};

Error.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
