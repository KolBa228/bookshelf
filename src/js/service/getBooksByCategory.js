import { apiConfig } from '../config';
import { fetchData } from './fetchData';

const getBooksByCategory = async category => {
  const response = await fetchData({
    path: `${apiConfig.getBooksByCategory}?category=${category}`,
    method: 'GET',
  });
  // console.log(response);
  return response;
};

export default getBooksByCategory;
