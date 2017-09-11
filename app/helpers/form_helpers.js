import first from 'lodash/first';
import omitBy from 'lodash/omitBy';

export const getValue = (event = {}) => event.target && event.target.value;
export const getChecked = (event = {}) => event.target && event.target.checked;

export const getError = (clientError = [], serverError = []) => (
  first(clientError) || first(serverError)
);

export const getDifference = (original, modified) => (
  omitBy(modified, (val, key) => original[key] === val)
);
