import { apiConfig } from '../config';
import { fetchData } from './fetchData';

const getCategoryList = async () => {
  const response = await fetchData({
    path: apiConfig.getCategoryList,
    method: 'GET',
  });
  console.log(response);
  return response;
};

export default getCategoryList;
