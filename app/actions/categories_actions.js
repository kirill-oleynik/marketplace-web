import {
  CATEGORIES_FETCH_ALL, CATEGORIES_EXPAND, CATEGORIES_COLLAPSE
} from '../constants';

export const fetchAll = () => ({
  type: CATEGORIES_FETCH_ALL
});

export const expand = (category) => ({
  type: CATEGORIES_EXPAND,
  payload: {
    id: category.id
  }
});

export const collapse = (category) => ({
  type: CATEGORIES_COLLAPSE,
  payload: {
    id: category.id
  }
});
