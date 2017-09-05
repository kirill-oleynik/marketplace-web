import first from 'lodash/first';

export const getValue = (event = {}) => event.target && event.target.value;
export const getChecked = (event = {}) => event.target && event.target.checked;

export const getError = (clientError = [], serverError = []) => (
  first(clientError) || first(serverError)
);
