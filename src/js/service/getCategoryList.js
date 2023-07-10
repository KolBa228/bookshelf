import { apiConfig } from '../config';
import { fetchData } from './fetchData';

const getCategoryList = async () => {
  const response = await fetchData({
    path: apiConfig.getCategoryList,
    method: 'GET',
  });
  return response;
};

export default getCategoryList;
