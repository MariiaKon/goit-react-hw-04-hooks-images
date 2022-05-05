import { ThreeDots } from 'react-loader-spinner';
import { LoaderBox } from './styled/Loader.styled';

export const Loader = () => {
  return (
    <LoaderBox>
      <ThreeDots color="#3f51b5" height={80} width={80} />
    </LoaderBox>
  );
};
