import axios from 'axios';

const isServer = typeof window === 'undefined';
const buildId = (isServer ? global.buildId : window.__NEXT_DATA__.buildId) || '';

const http = {
  get(path, params = {}) {
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
    .get(`static/locales/${lang}/${name}.json?${buildId}`)
    .then((response) => response.data)
);

export const createUser = (data) => http.post('api/users', data);
export const fetchCurrentUser = () => http.get('api/current_user');
export const createSession = (data) => http.post('api/sessions', data);
export const createProfile = (data) => http.post('api/profile', data);
export const fetchAllCategories = () => http.get('api/categories');
export const fetchSingleCategory = (id) => http.get(`api/categories/${id}`);
export const updateUser = (data) => http.put('api/current_user', data);
export const updatePassword = (data) => (
  http.put('api/current_user/password', data)
);
