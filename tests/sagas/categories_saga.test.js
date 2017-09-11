const { put, call } = require('redux-saga/effects');
const {
  fetchCategory, fetchCategories
} = require('../../app/sagas/categories_saga');
const {
  fetchAllCategories, fetchSingleCategory
} = require('../../app/services/api');
const {
  REQUEST, SUCCESS, FAILURE, CATEGORIES_FETCH, CATEGORIES_FETCH_ALL
} = require('../../app/constants');

describe('#fetchCategory', () => {
  it('handles successful fetchSingleCategory api call', () => {
    const id = Symbol('id');
    const category = Symbol('category');
    const fetchCategoryResponse = {
      data: {
        data: category
      }
    };

    const generator = fetchCategory({ payload: { id } });

    expect(generator.next().value).toEqual(
      put({ type: CATEGORIES_FETCH + REQUEST })
    );

    expect(generator.next().value).toEqual(
      call(fetchSingleCategory, id)
    );

    expect(generator.next(fetchCategoryResponse).value).toEqual(
      put({
        type: CATEGORIES_FETCH + SUCCESS,
        payload: { category }
      })
    );
  });

  it('handles failed fetchSingleCategory api call', () => {
    const id = Symbol('id');
    const error = Symbol('error');
    const fetchCategoryError = {
      response: {
        data: { error }
      }
    };

    const generator = fetchCategory({ payload: { id } });

    expect(generator.next().value).toEqual(
      put({ type: CATEGORIES_FETCH + REQUEST })
    );

    expect(generator.next().value).toEqual(
      call(fetchSingleCategory, id)
    );

    expect(generator.throw(fetchCategoryError).value).toEqual(
      put({
        type: CATEGORIES_FETCH + FAILURE,
        payload: {
          error,
          response: fetchCategoryError.response
        }
      })
    );
  });
});

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
      put({ type: CATEGORIES_FETCH_ALL + REQUEST })
    );

    expect(generator.next().value).toEqual(
      call(fetchAllCategories)
    );

    expect(generator.next(fetchAllCategoriesResponse).value).toEqual(
      put({
        type: CATEGORIES_FETCH_ALL + SUCCESS,
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
      put({ type: CATEGORIES_FETCH_ALL + REQUEST })
    );

    expect(generator.next().value).toEqual(
      call(fetchAllCategories)
    );

    expect(generator.throw(fetchAllCategoriesError).value).toEqual(
      put({
        type: CATEGORIES_FETCH_ALL + FAILURE,
        payload: {
          error,
          response: fetchAllCategoriesError.response
        }
      })
    );
  });
});
