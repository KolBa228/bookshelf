import Notiflix from 'notiflix';
import { apiConfig } from '../config';

function fetchData({ path, method = 'GET'}) {
  return fetch(`${apiConfig.rootApi}${path}`, {
    method: method,
  })
    .then(response => {
      if (!response.ok) {
        return response
          .clone()
          .json()
          .then(data => {
            Notiflix.Notify.failure(
              'Something gone wrong, check internet connection and refresh page'
            );
          });
      }
      return response.json().then(data => {
        if (typeof data === 'object') {
          data.status = response.status;
        }
        return data;
      });
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'Something gone wrong, check internet connection and refresh page'
      );
    });
}

export { fetchData };
