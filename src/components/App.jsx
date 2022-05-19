import { useEffect, useState } from 'react';
import { findImage, PER_PAGE } from './Api';
import { Searchbar } from './Searchbar';
import { Loader } from './Loader';
import { ImageGallery } from './ImageGallery';
import { LoadMoreBtn } from './Button';
import { Error } from './Error';

export function App() {
  const [query, setQuery] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMoreBtnExist, setIsLoadMoreBtnExist] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async searchQuery => {
    setQuery(searchQuery);
    setCurrentPage(1);
    setImages([]);
    setIsLoadMoreBtnExist(false);
    setError(null);
  };

  useEffect(() => {
    if (query === null) {
      return;
    }

    setIsLoading(true);
    setIsLoadMoreBtnExist(false);

    try {
      findImage(query, currentPage).then(response => {
        const lastPage = currentPage > Math.floor(response.totalHits / PER_PAGE);

        setImages(prevState => [...prevState, ...response.hits]);
        setIsLoading(false);

        if (response.totalHits === 0) {
          setError('No results');
        }

        if (response.totalHits > PER_PAGE) {
          setIsLoadMoreBtnExist(true);
        }

        if (lastPage) {
          setIsLoadMoreBtnExist(false);
        }
      });
    } catch (err) {
      setError(err);
    }
  }, [query, currentPage]);

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />

      {images.length !== 0 && <ImageGallery images={images} />}

      {isLoading && <Loader />}

      {isLoadMoreBtnExist && (
        <LoadMoreBtn
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        />
      )}

      {error && <Error children={error} />}
    </>
  );
}
