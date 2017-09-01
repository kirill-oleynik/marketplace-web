import first from 'lodash/first';

export const getValue = (event = {}) => event.target && event.target.value;

export const getError = (clientError = [], serverError = []) => (
  first(clientError) || first(serverError)
);
