import { SEARCH_FETCH } from '../constants';

export const fetch = (query) => ({
  type: SEARCH_FETCH,
  payload: { query }
});
