import { apiConfig } from '../config';
import { fetchData } from './fetchData';

const getCategoryList = async () => {
  const response = await fetchData({
    path: apiConfig.getTopBooks,
    method: 'GET',
  });
  return response;
};

export default getCategoryList;
