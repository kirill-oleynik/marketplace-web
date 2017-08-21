import isArray from 'lodash/isArray';
import isPlainObject from 'lodash/isPlainObject';
import camelCase from 'lodash/camelCase';

export default function requestMiddleware() {
  // TODO:
  // Move response transformation to proxy,
  // when new proxy will be merged
  const convertToCamelCase = (data) => {
    if (isArray(data)) {
      return data.map(convertToCamelCase);
    }

    if (isPlainObject(data)) {
      return Object.keys(data).reduce((accumulator, key) => (
        { ...accumulator, [camelCase(key)]: convertToCamelCase(data[key]) }
      ), {});
    }

    return data;
  };

  return (next) => (action) => {
    const {
      type,
      payload = {},
      payload: { request }
    } = action;

    if (!request) {
      return next(action);
    }

    const REQUEST_TYPE = `${type}_REQUEST`;
    const SUCCESS_TYPE = `${type}_SUCCESS`;
    const FAILURE_TYPE = `${type}_FAILURE`;

    next({
      payload,
      type: REQUEST_TYPE
    });

    request
      .then((response) => next({
        type: SUCCESS_TYPE,
        payload: {
          response,
          data: convertToCamelCase(response.data)
        }
      }))
      .catch((error) => next({
        type: FAILURE_TYPE,
        payload: {
          response: error.response,
          error: convertToCamelCase(error.response.data.error)
        }
      }));

    return request;
  };
}
