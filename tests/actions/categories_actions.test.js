const {
  expand, collapse, fetchAll
} = require('./../../app/actions/categories_actions');
const {
  CATEGORIES_EXPAND, CATEGORIES_COLLAPSE, CATEGORIES_FETCH_ALL
} = require('./../../app/constants');

describe('#fetchAll', () => {
  test('it has CATEGORIES_FETCH_ALL type', () => {
    const action = fetchAll();

    expect(action).toEqual({
      type: CATEGORIES_FETCH_ALL
    });
  });
});

describe('#expand', () => {
  test('it has CATEGORIES_EXPAND type with category id in payload', () => {
    const id = Symbol('id');
    const action = expand({ id });

    expect(action).toEqual({
      type: CATEGORIES_EXPAND,
      payload: { id }
    });
  });
});

describe('#collapse', () => {
  test('it has CATEGORIES_COLLAPSE type with category id in payload', () => {
    const id = Symbol('id');
    const action = collapse({ id });

    expect(action).toEqual({
      type: CATEGORIES_COLLAPSE,
      payload: { id }
    });
  });
});
