const { put, call } = require('redux-saga/effects');
const { fetchCategories } = require('../../app/sagas/categories_saga');
const { fetchAllCategories } = require('../../app/services/api');
const {
  REQUEST, SUCCESS, FAILURE, CATEGORIES_FETCH
} = require('../../app/constants');

describe('#fetchCategories', () => {
  it('handles successful fetchAllCategories api call', () => {
    const categories = Symbol('categories');
    const fetchAllCategoriesResponse = {
      data: {
        data: categories
      }
    };

    const generator = fetchCategories();

    expect(generator.next().value).toEqual(
      put({ type: CATEGORIES_FETCH + REQUEST })
    );

    expect(generator.next().value).toEqual(
      call(fetchAllCategories)
    );

    expect(generator.next(fetchAllCategoriesResponse).value).toEqual(
      put({
        type: CATEGORIES_FETCH + SUCCESS,
        payload: { categories }
      })
    );
  });

  it('handles failed fetchAllCategories api call', () => {
    const error = Symbol('error');
    const fetchAllCategoriesError = {
      response: {
        data: { error }
      }
    };

    const generator = fetchCategories();

    expect(generator.next().value).toEqual(
      put({ type: CATEGORIES_FETCH + REQUEST })
    );

    expect(generator.next().value).toEqual(
      call(fetchAllCategories)
    );

    expect(generator.throw(fetchAllCategoriesError).value).toEqual(
      put({
        type: CATEGORIES_FETCH + FAILURE,
        payload: {
          error,
          response: fetchAllCategoriesError.response
        }
      })
    );
  });
});
