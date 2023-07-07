import { apiConfig } from '../config';
import { fetchData } from './fetchData';

const getCategoryList = async category => {
  const response = await fetchData({
    path: `${apiConfig.getTopBooks}?categoty=${category}`,
    method: 'GET',
  });
  return response;
};

export default getCategoryList;
