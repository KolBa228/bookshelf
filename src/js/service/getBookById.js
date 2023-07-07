import { apiConfig } from '../config';
import { fetchData } from './fetchData';

const getCategoryList = async (id) => {
  const response = await fetchData({
    path:` ${apiConfig.getTopBooks}/${id}`,
    method: 'GET',
  });
  return response;
};

export default getCategoryList;
