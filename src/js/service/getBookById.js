import { apiConfig } from '../config';
import { fetchData } from './fetchData';

const getBookById = async id => {
  const response = await fetchData({
    path: `${apiConfig.getBookById}/${id}`,
    method: 'GET',
  });
  return response;
};

export default getBookById;
