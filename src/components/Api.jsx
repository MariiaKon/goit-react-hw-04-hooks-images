import axios from 'axios';

const API_KEY = '25393494-37d8dd7e72c61fe26f3c6ef73';
axios.defaults.baseURL = 'https://pixabay.com/api/';
export const PER_PAGE = 12;

export const findImage = async (searchQuery, currentPage) => {
  const options = {
    params: {
      key: API_KEY,
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      page: currentPage,
      per_page: PER_PAGE,
    },
  };

  const response = await axios.get('', options);
  return await response.data;
};
