import { ErrorCss } from './styled/Error.styled';

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
