const {
  getIds, getById, getCategories
} = require('../../app/selectors/categories_selectors');

describe('#getIds', () => {
  test('it returns correct data', () => {
    expect(
      getIds({
        categories: {
          ids: 'Test'
        }
      })
    ).toEqual('Test');
  });
});

describe('#getById', () => {
  test('it returns correct data', () => {
    expect(
      getById({
        categories: {
          byId: 'Test'
        }
      })
    ).toEqual('Test');
  });
});

describe('#getCategories', () => {
  test('it returns correct data', () => {
    const firstCategory = {
      id: 1,
      title: 'Test1'
    };

    const secondCategory = {
      id: 2,
      title: 'Test2'
    };

    expect(
      getCategories({
        categories: {
          ids: [1, 2],
          byId: {
            2: secondCategory,
            1: firstCategory
          }
        }
      })
    ).toEqual([firstCategory, secondCategory]);
  });
});
