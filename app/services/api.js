import axios from 'axios';

const isServer = typeof window === 'undefined';
const buildId = (isServer ? global.buildId : window.__NEXT_DATA__.buildId) || '';

const request = (method, path, { data, cookie, ...rest } = {}) => {
  const url = `${process.env.WEB_URL}/${path}`;

  const headers = cookie && isServer ? ({
    Cookie: cookie
  }) : undefined;

  return axios({
    url,
    method,
    headers,
    [method !== 'get' ? 'data' : 'params']: data,
    ...rest
  });
};

export const getTranslations = (name, lang = 'en') => (
  request('get', `static/locales/${lang}/${name}.json?${buildId}`)
    .then((response) => response.data)
);

export const createSession = (options) => (
  request('post', 'api/sessions', options)
);

export const createUser = (options) => (
  request('post', 'api/users', options)
);

export const updateUser = (options) => (
  request('put', 'api/current_user', options)
);

export const fetchCurrentUser = (options) => (
  request('get', 'api/current_user', options)
);

export const createProfile = (options) => (
  request('post', 'api/profile', options)
);

export const updatePassword = (options) => (
  request('put', 'api/current_user/password', options)
);

export const fetchAllCategories = (options) => (
  request('get', 'api/categories', options)
);

export const fetchSingleCategory = ({ id, ...rest }) => (
  request('get', `api/categories/${id}`, rest)
);

export const fetchSingleApplication = ({ id, ...rest }) => (
  request('get', `api/applications/${id}`, rest)
);

export const createFavorites = ({ id, ...rest }) => (
  request('post', `api/applications/${id}/favorites`, rest)
);

export const deleteFavorites = ({ id, ...rest }) => (
  request('delete', `api/favorites/${id}`, rest)
);
