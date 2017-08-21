import axios from 'axios';

const http = {
  get(path, params) {
    return this._request('get', path, { params });
  },
  put(path, data) {
    return this._request('put', path, { data });
  },
  post(path, data) {
    return this._request('post', path, { data });
  },
  delete(path) {
    return this._request('delete', path);
  },
  _request(method, path, options = {}) {
    return axios({
      method,
      url: `${process.env.WEB_URL}/${path}`,
      ...options
    });
  }
};

export const getTranslations = (name, lang = 'en') => (
  http
    .get(`static/locales/${lang}/${name}.json`)
    .then((response) => response.data)
);

export const createUser = (data) => http.post('api/users', data);
