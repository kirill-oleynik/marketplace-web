const camelCase = require('lodash/camelCase');
const isArray = require('lodash/isArray');
const isPlainObject = require('lodash/isPlainObject');

const convertToCamelCase = (data) => {
  if (isArray(data)) {
    return data.map(convertToCamelCase);
  }

  if (isPlainObject(data)) {
    return Object.keys(data).reduce((accumulator, key) => {
      // eslint-disable-next-line no-param-reassign
      accumulator[camelCase(key)] = convertToCamelCase(data[key]);
      return accumulator;
    }, {});
  }

  return data;
};

exports.convertToCamelCase = convertToCamelCase;
