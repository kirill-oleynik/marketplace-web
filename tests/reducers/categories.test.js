const { ids, byId } = require('../../app/reducers/categories');
const {
  SUCCESS, CATEGORIES_FETCH, CATEGORIES_FETCH_ALL, CATEGORIES_COLLAPSE,
  AUTH_SIGN_OUT
} = require('./../../app/constants');

describe('#ids', () => {
  test('it has correct initial state', () => {
    const state = ids(undefined, {});

    expect(state).toEqual([]);
  });

  test('it handles CATEGORIES_FETCH_ALL_SUCCESS', () => {
    const firstCategoryId = Symbol('firstCategoryId');
    const secondCategoryId = Symbol('secondCategoryId');

    const categories = [
      { id: firstCategoryId, title: 'Test1', applications: [] },
      { id: secondCategoryId, title: 'Test2', applications: [] }
    ];

    const state = ids(undefined, {
      type: CATEGORIES_FETCH_ALL + SUCCESS,
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

  test('it handles CATEGORIES_FETCH_ALL_SUCCESS', () => {
    const firstCategoryId = Symbol('firstCategoryId');
    const secondCategoryId = Symbol('secondCategoryId');
    const firstApplicationId = Symbol('firstApplicationId');
    const secondApplicationId = Symbol('secondApplicationId');

    const firstCategory = {
      id: firstCategoryId,
      title: 'Test1',
      applications: [{ id: firstApplicationId }]
    };

    const secondCategory = {
      id: secondCategoryId,
      title: 'Test2',
      applications: [{ id: secondApplicationId }]
    };

    const categories = [firstCategory, secondCategory];

    const state = byId(undefined, {
      type: CATEGORIES_FETCH_ALL + SUCCESS,
      payload: { categories }
    });

    expect(state).toEqual({
      [firstCategoryId]: {
        ...firstCategory,
        slug: 'test_1',
        applications: [firstApplicationId]
      },
      [secondCategoryId]: {
        ...secondCategory,
        slug: 'test_2',
        applications: [secondApplicationId]
      }
    });
  });

  test('it handles CATEGORIES_FETCH_SUCCESS', () => {
    const firstCategoryId = Symbol('firstCategoryId');
    const firstApplicationId = Symbol('firstApplicationId');
    const secondApplicationId = Symbol('firstApplicationId');

    const category = {
      id: firstCategoryId,
      applications: [firstApplicationId]
    };

    const state = byId(
      {
        [firstCategoryId]: category
      },
      {
        type: CATEGORIES_FETCH + SUCCESS,
        payload: {
          category: {
            id: firstCategoryId,
            title: 'Test1',
            applications: [{ id: secondApplicationId }]
          }
        }
      }
    );

    expect(state).toEqual({
      [firstCategoryId]: {
        ...category,
        slug: 'test_1',
        isFetched: false,
        applications: [firstApplicationId, secondApplicationId]
      }
    });
  });

  test('it handles CATEGORIES_COLLAPSE', () => {
    const id = Symbol('id');
    const category = {
      id,
      isFetched: true,
      applications: []
    };

    const state = byId(
      {
        [id]: category
      },
      {
        type: CATEGORIES_COLLAPSE,
        payload: {
          id
        }
      }
    );

    expect(state).toEqual({
      [id]: {
        id,
        applications: [],
        isFetched: false
      }
    });
  });

  test('it handles AUTH_SIGN_OUT', () => {
    const id = Symbol('id');
    const category = {
      id,
      isFetched: true
    };

    const state = byId(
      {
        [id]: category
      },
      {
        type: AUTH_SIGN_OUT
      }
    );

    expect(state).toEqual({
      [id]: {
        ...category,
        isFetched: false
      }
    });
  });
});
