const camelCase = require('lodash/camelCase');
const isArray = require('lodash/isArray');
const isPlainObject = require('lodash/isPlainObject');

module.exports = function convertToCamelCase(data) {
  if (isArray(data)) {
    return data.map(convertToCamelCase);
  }

  if (isPlainObject(data)) {
    return Object.keys(data).reduce((accumulator, key) => {
      accumulator[camelCase(key)] = convertToCamelCase(data[key]);
      return accumulator;
    }, {});
  }

  return data;
};
