const { ids, byId } = require('../../app/reducers/categories');
const { SUCCESS, CATEGORIES_FETCH } = require('./../../app/constants');

describe('#ids', () => {
  test('it has correct initial state', () => {
    const state = ids(undefined, {});

    expect(state).toEqual([]);
  });

  test('it handles CATEGORIES_FETCH_SUCCESS', () => {
    const firstCategoryId = Symbol('firstCategoryId');
    const secondCategoryId = Symbol('secondCategoryId');

    const categories = [
      { id: firstCategoryId, title: 'Test1' },
      { id: secondCategoryId, title: 'Test2' }
    ];

    const state = ids(undefined, {
      type: CATEGORIES_FETCH + SUCCESS,
      payload: { categories }
    });

    expect(state).toEqual([firstCategoryId, secondCategoryId]);
  });
});

describe('#byId', () => {
  test('it has correct initial state', () => {
    const state = byId(undefined, {});

    expect(state).toEqual({});
  });

  test('it handles CATEGORIES_FETCH_SUCCESS', () => {
    const firstCategoryId = Symbol('firstCategoryId');
    const secondCategoryId = Symbol('secondCategoryId');

    const firstCategory = { id: firstCategoryId, title: 'Test1' };
    const secondCategory = { id: secondCategoryId, title: 'Test2' };

    const categories = [firstCategory, secondCategory];

    const state = byId(undefined, {
      type: CATEGORIES_FETCH + SUCCESS,
      payload: { categories }
    });

    expect(state).toEqual({
      [firstCategoryId]: firstCategory,
      [secondCategoryId]: secondCategory
    });
  });
});
