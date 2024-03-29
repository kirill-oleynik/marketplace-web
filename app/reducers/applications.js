import { combineReducers } from 'redux';

import {
  SUCCESS, FAILURE, REQUEST, CATEGORIES_FETCH, CATEGORIES_FETCH_ALL,
  APPLICATION_FETCH, APPLICATIONS_ADD_TO_FAVORITES, FAVORITES_FETCH_ALL,
  APPLICATIONS_REMOVE_FROM_FAVORITES, REVIEW_CREATE, AUTH_SIGN_OUT,
  APPLICATIONS_RATING_FETCH, SEARCH_FETCH, REVIEW_DELETE
} from '../constants';

const applicationsReduceFn = (accumulator, application) => ({
  ...accumulator,
  [application.id]: application
});

const applicationIdReduceFn = (accumulator, application) => ([
  ...accumulator,
  application.id
]);

const zeroAppRating = {
  average: 0,
  total: 0,
  votes: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  }
};

export const byId = (state = {}, action) => {
  switch (action.type) {
    case CATEGORIES_FETCH + SUCCESS:
      return action.payload.category.applications.reduce(
        applicationsReduceFn, state
      );
    case CATEGORIES_FETCH_ALL + SUCCESS:
      return action.payload.categories.reduce((accumulator, category) => (
        {
          ...accumulator,
          ...category.applications.reduce(applicationsReduceFn, {})
        }
      ), state);
    case FAVORITES_FETCH_ALL + SUCCESS:
      return action.payload.favorites.reduce((accumulator, favorite) => (
        {
          ...accumulator,
          ...[favorite.application].reduce(applicationsReduceFn, {})
        }
      ), state);
    case APPLICATION_FETCH + SUCCESS:
      return {
        ...state,
        [action.payload.application.id]: action.payload.application
      };
    case SEARCH_FETCH + SUCCESS:
      return {
        ...action.payload.data.applications.reduce(applicationsReduceFn, state),
        ...action.payload.data.categories.reduce((accumulator, category) => (
          {
            ...accumulator,
            ...category.applications.reduce(applicationsReduceFn, {})
          }
        ), state)
      };
    default:
      return state;
  }
};

export const ids = (state = new Set([]), action) => {
  switch (action.type) {
    case CATEGORIES_FETCH + SUCCESS:
      return new Set(
        action.payload.category.applications.reduce(
          applicationIdReduceFn, state
        )
      );
    case CATEGORIES_FETCH_ALL + SUCCESS:
      return new Set(
        action.payload.categories.reduce((accumulator, category) => (
          [
            ...accumulator,
            ...category.applications.reduce(applicationIdReduceFn, {})
          ]
        ), [])
      );
    default:
      return state;
  }
};

export const appProfile = (state = {}, action = {}) => {
  switch (action.type) {
    case APPLICATION_FETCH + SUCCESS:
      return action.payload.application;
    case APPLICATIONS_ADD_TO_FAVORITES + REQUEST:
    case APPLICATIONS_REMOVE_FROM_FAVORITES + REQUEST:
      return {
        ...state,
        inProgress: true
      };
    case APPLICATIONS_ADD_TO_FAVORITES + FAILURE:
    case APPLICATIONS_REMOVE_FROM_FAVORITES + FAILURE:
      return {
        ...state,
        inProgress: false
      };
    case APPLICATIONS_ADD_TO_FAVORITES + SUCCESS:
      return {
        ...state,
        inProgress: false,
        favorite: action.payload.favorite
      };
    case APPLICATIONS_REMOVE_FROM_FAVORITES + SUCCESS:
      return {
        ...state,
        inProgress: false,
        favorite: null
      };
    case REVIEW_CREATE + SUCCESS:
      return {
        ...state,
        review: action.payload.review
      };
    case REVIEW_DELETE + SUCCESS:
      return {
        ...state,
        review: undefined
      };
    case AUTH_SIGN_OUT + SUCCESS:
      return {};
    default:
      return state;
  }
};

export const appRating = (state = zeroAppRating, action = {}) => {
  switch (action.type) {
    case APPLICATIONS_RATING_FETCH + SUCCESS:
      return action.payload.rating;
    default:
      return state;
  }
};

export default combineReducers({
  ids,
  byId,
  appProfile,
  appRating
});
